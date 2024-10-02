import { signinInput, signupInput } from "@kunalxdev2901/common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt"


export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        MY_SECRET_KEY:string
    }
}>();


userRouter.post('/signup', async(c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())
    
        const body = await c.req.json()
        const {success} = signupInput.safeParse(body);

        if(!success){
          c.status(411);
          return c.json({
            message:"inputs are not correct !"
          })
        }
    
        const user = await prisma.user.create({
          data:{
            email:body.email,
            password:body.password
          }
        })

        const token = await sign({id:user.id} , c.env.MY_SECRET_KEY)
    
        return c.json({
          jwt:token
        })
    
    })


userRouter.get('/signin', async(c) => {
      
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
      const body = await c.req.json()
      const {success} = signinInput.safeParse(body);

      if(!success){
        c.status(411);
        return c.json({
          message:"inputs are not correct !"
        })
      }
    
      const user = await prisma.user.findUnique({
        where:{
          email:body.email,
          password:body.password
        }
      })
    
      if(!user){
        return c.json({
          error:'User not Found !'
        })
      }
    
      const token = await sign(user , c.env.MY_SECRET_KEY)
    
      return c.json({
        email:body.email,
        jwt:token
      })
      
    })
    