import { Appbar } from "../components/Appbar"
import { FullBlog } from "../components/FullBlog"
import { SkeletonBlog } from "../components/Skeleton"
import { useBlog } from "../hooks/useBlog"
import { useParams } from "react-router-dom"

export const Blog = ()=>{
    const id = useParams().id

    const {loading , blog} = useBlog({
        id : id || ""
    })

    if(loading){
        return <>
        <div>
            <Appbar/>
        </div>
        <SkeletonBlog/>
        
        </>
    }
    return <>
    <div>
        <Appbar/>
    </div>
    <div>
        <FullBlog blog={blog || {content : "", title : "", author : {name : ""}, id : ""}}/>
    </div>
    </>
}