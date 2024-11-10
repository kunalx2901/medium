import { Blog } from "../hooks/useBlog"

export const FullBlog = ({blog}:{blog:Blog})=>{
    return <>
    
    <div className="flex justify-between items-center m-5 p-32">
        <div className="text-3xl font-bold w-[70%] "> 
          <h1>{blog.title}</h1>
            {blog.content}
        </div>
        <div className="text-xl font-light text-slate-600">
            {blog.author.name || "Anonymous"}
        </div>
    </div>

    </>
}