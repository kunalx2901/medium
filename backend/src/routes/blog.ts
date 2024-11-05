import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { blogInput , updateBlogInput } from "@kunalxdev2901/comman-package";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        MY_SECRET_KEY:string
    },
    Variables:{
        userId: string,
        name:string
    }
}>()

blogRouter.use('/*' , async(c,next)=>{
    const header = await c.req.header('Authorization') || ''
    try{
        const user = await verify(header , c.env.MY_SECRET_KEY);

    if(user){
        //@ts-ignore
        c.set("userId" ,user.id)
        await next();
    }
    else{
        c.status(403);
        c.json({
            error:"you are not logged in !"
        })
    }
    }
    catch(e){
        c.status(403);
        c.json({
            error:"you are not logged in !"
        })
    }
  })
  
blogRouter.post('/', async(c) => {
    
    const userId = await c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = blogInput.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        message:"inputs are not correct !"
      })
    }

    const blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId,
        }
    })

    return c.json({
        id:blog.id
    })

})


blogRouter.put('/', async(c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        message:"inputs are not correct !"
      })
    }

    const blog = await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })

    return c.json({
        id:blog.id
    })
})


blogRouter.get('/bulk', async(c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    })

    return c.json({
        blogs
    })
})

blogRouter.get('/:id', async(c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())

    const id =  c.req.param("id");

   try{
    const blog = await prisma.post.findUnique({
        where:{
            id
        }
    })

    return c.json({
        blog
    })
   }
   catch(e){
    c.status(411);
    c.json({
        error:"error while fetching the data !"
    })
   }

})



  