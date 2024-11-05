import { useBlog } from "../hooks/useBlog"

export const Blog = ()=>{

    const {loading , blog} = useBlog()

    if(loading){
        return <div>Loading.....</div>
    }
    return <>
    <div>
        {blog}
    </div>
    <h1 className="text-xl">Blog</h1>
    </>
}