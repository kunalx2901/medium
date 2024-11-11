import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks/useBlogs"

export const Blogs = ()=>{

    const {loading , blogs} = useBlogs()

    if(loading){
        return <div>
        Loading.....
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