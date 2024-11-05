import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from 'axios'

export const useBlog = ({id}:{id:string})=>{
    const [loading , setLoading] = useState(true)
    const [blog , setBlog] = useState([])

    useEffect(()=>{
         try{
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`)
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