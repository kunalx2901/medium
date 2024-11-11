import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks/useBlogs"
import { Skeleton } from "../components/Skeleton"


export const Blogs = ()=>{

    const {loading , blogs} = useBlogs()

    if(loading){
        return <div> 
                <div>
                    <Appbar/>
                </div>
                <div>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                </div>
        </div>
    }

    return <>
    <div>
        <Appbar/>
    </div>
    <div className="absolute top-16">
        {blogs.map((blog)=>{
            return <BlogCard authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate="10th Oct, 2024"
            id={blog.id.toString()}
            />
        })}
        
        
    </div>

    </>

}