import { SignupInput } from "@kunalxdev2901/comman-pack"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {BACKEND_URL} from '../config'


export const Auth = ({type}:{type:string})=>{

    const [loading , setloading] = useState(false)

    const navigate = useNavigate()
    const [postInputs , setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name:""
    })

async function sendRequest(){
        try{
            setloading(true)
            const response =  await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}` , postInputs)
            const jwt = response.data.jwt
            const userName = response.data.name
            if (jwt == undefined){
                alert('User not found !, Please Signup');
                navigate("/signup")
            }
            // console.log(jwt)
            else{
                localStorage.setItem("token" , jwt)
                localStorage.setItem("name" , userName)
                navigate("/blogs")
            }
        }
        catch(e){
            console.log(e)
            alert("Wrong Credentials")
            navigate("/")
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
            setPostInputs({...postInputs , name:e.target.value})
        }}></LabelledInputs> : null}
        <LabelledInputs label="Email" placeholder="user@gmail.com" onChange={(e)=>{
            setPostInputs({...postInputs , email:e.target.value})
        }}></LabelledInputs>
        <LabelledInputs label="Password" type="password" placeholder="123456" onChange={(e)=>{
            setPostInputs({...postInputs , password:e.target.value})
        }}></LabelledInputs>

        {loading ? <button disabled type="button" className="text-white text-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 w-56 mt-5 flex justify-center items-center">
                <svg aria-hidden="true" role="status" className="inline w-5 h-5 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
                    Loading...
                 </button> : 
                 <button onClick={sendRequest} disabled={postInputs.email.length == 0 || postInputs.password.length == 0 || (type == 'signup' && postInputs.name.length == 0)}  type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 w-56 mt-5 flex justify-evenly items-baseline">{type =='signup'?"Sign up":"Sign in"}
                </button>}
            
        </div>
        </div>
    </div>
}

interface LabelledInputTypes{
    label :string,
    placeholder:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?:string
}

function LabelledInputs({label , placeholder , onChange , type}:LabelledInputTypes){
    return <div className="">
        <label className="block mb-2 text-lg font-extrabold text-gray-900">{label}</label>
            <input onChange = {onChange} type={type||"text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 font-semibold mb-5" placeholder={placeholder} required />
        </div>
}