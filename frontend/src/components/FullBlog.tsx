import { Blog } from "../hooks/useBlog"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}:{blog:Blog})=>{
    return <>
    
    <div className="flex justify-between items-center m-5 p-32 gap-10">
        <div className="text-4xl font-bold w-[70%] p-10"> 
          <h1>{blog.title}</h1>
          <div className="text-slate-600 text-lg mt-2">
            Published on 29th June 2024
          </div>
          <div className=" text-xl font-light mt-5 pr-20">
            {blog.content}
          </div>
        </div>

        <div className="text-xl font-light text-slate-600 p-3">
            <div className="font-bold border-b border-slate-600 mb-5 w-full ">
                Author
            </div>
           
            <div className="text-2xl font-bold text-black gap-3 ">
                <div className="flex gap-3">
                <div className="relative bottom-1">
                    <Avatar name={blog.author.name || "Anonymous"} />
                </div>
                
                <div >
                 {blog.author.name || "Anonymous"}
                </div>
                </div>

                <div className="text-slate-700 text-xl font-light mt-1">
                    a random phase to show case the ability of the author
                </div>
            </div>
        </div>
    </div>

    </>
}