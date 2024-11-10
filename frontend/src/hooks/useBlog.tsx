import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from 'axios'

export interface Blog{
    content: string,
    title: string,
    id: string,
    author: {
        name: string
    }
}
export const useBlog = ({id}:{id:string})=>{
    const [loading , setLoading] = useState(true)
    const [blog , setBlog] = useState<Blog>()

    useEffect(()=>{
         try{
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
            .then(response =>{
                setBlog(response.data.blog)
                setLoading(false)
            })
         }
         catch(e){
            console.log(e)
         }
    },[id])

    return {
        loading,
        blog
    }
}