import { SignupInput } from "@kunalxdev2901/comman-package"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {BACKEND_URL} from '../config'


export const Auth = ({type}:{type:string})=>{

    const navigate = useNavigate()
    const [postInputs , setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
    })

    async function sendRequest(){
        try{
            const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}` , postInputs)
            const jwt = response.data.jwt
            // console.log(jwt)
            localStorage.setItem("token" , jwt)
            navigate("/blogs")
        }
        catch(e){
            console.log(e)
            alert("error while loging in!")
        }
    }

    return <div>
        {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center items-center flex-col h-screen">
        <div className="p-20 flex justify-center items-center flex-col border-2 border-slate-300 rounded-xl shadow-2xl shadow-black">
        <div className="font-extrabold text-3xl text-center">
           {type == 'signin' ? 'Sign-In to your account' : "Create an Account "}
            <div className="font-semibold text-lg text-slate-500 mb-8">
            {type == 'signin' ? "Don't have an account" :'Already have an account'}
            <Link className="mx-2 text-blue-400" to={type === "signup"? "/signin":'/signup'}>
                {type =='signup'?"Login":"Sign up"}
            </Link>
            </div>
        </div>
        {type == 'signup' ? <LabelledInputs label="Name" placeholder="kunal" onChange={(e)=>{
            setPostInputs({...postInputs , email:e.target.value})
        }}></LabelledInputs> : null}
        <LabelledInputs label="Email" placeholder="user@gmail.com" onChange={(e)=>{
            setPostInputs({...postInputs , email:e.target.value})
        }}></LabelledInputs>
        <LabelledInputs label="Password" type="password" placeholder="123456" onChange={(e)=>{
            setPostInputs({...postInputs , password:e.target.value})
        }}></LabelledInputs>

        <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-56 mt-5">{type =='signup'?"Sign up":"Sign in"}</button>
        </div>
        </div>
    </div>
}

interface LabelledInputTypes{
    label :string,
    placeholder:string,
    onChange: (e)=> void,
    type?:string
}

function LabelledInputs({label , placeholder , onChange , type}:LabelledInputTypes){
    return <div className="">
        <label className="block mb-2 text-lg font-extrabold text-gray-900">{label}</label>
            <input onChange = {onChange} type={type||"text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 font-semibold mb-5" placeholder={placeholder} required />
        </div>
}