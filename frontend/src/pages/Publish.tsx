import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Publish = ()=>{

    const [title , setTitle] = useState("")
    const [content , setContent] = useState("")
    const navigate = useNavigate()

    return<>
    <div>
        <Appbar/>
    </div>
    
   <div className="flex justify-center items-center">
   <div className="flex justify-center items-start flex-col w-[60%] ">
     
   <textarea rows={1}
   onChange={(e)=>{
    setTitle(e.target.value)
   }} 
   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-10 font-bold mb-5" placeholder="Title"></textarea>
    <TextArea 
    onChange={(e)=>{
        setContent(e.target.value)
    }}
    />
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-10" 
    onClick={
        async()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title: title,
                content: content,
                author:{
                    name: "Kunal"
                }
            },{
                headers: {
                      Authorization: `${localStorage.getItem("token")}`
                    }
                })

            navigate(`./${response.data.id}`)
        }}>Publish Blog</button>
    </div>
   </div>


    </>
}

function TextArea({onChange}:{onChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void}){

    return <div className="flex justify-center items-center w-full"> 
    <div className="flex justify-center items-center flex-col w-full gap-5">
       
        <textarea rows={8}  onChange={onChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 font-light" placeholder="Content"></textarea>

    </div>
    </div>
}