import { useEffect, useState } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config"


interface Blog {
    content: string,
        title: string,
        id: number,
        author: {
            name: string
        }
}
export const useBlogs = ()=>{
    const [loading , setLoading] = useState(true)
    const [blogs , setBlogs] = useState<Blog[]>([])

    useEffect(()=>{
       try{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(response =>{
                setBlogs(response.data.blogs)
                setLoading(false)
            })
       }
       catch(e){
        console.log(e)
       }
    },[])

    return {
        loading,
        blogs
    }
}