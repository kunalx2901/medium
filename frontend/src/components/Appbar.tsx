import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import logo from '../assets/medium-logo.png'
export const Appbar = ()=>{
    const userName = localStorage.getItem("name")
    return <>
    <div className="flex text-xl justify-between items-center px-10 py-2 border-b fixed w-full bg-white z-10">

        <Link to={'/blogs'}>
            <img src={logo} alt="" className="w-[6%]"/>
        </Link>
        <div className="flex justify-center items-center gap-5 ">
            <div>
                <Link to={"/blog"}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">New Blog</button>
                </Link>
            </div>
            <Avatar name={userName?.toUpperCase() || "User"} size="big"/>
        </div>

    </div>
    </>
}