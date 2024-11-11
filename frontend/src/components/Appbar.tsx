import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
export const Appbar = ()=>{
    return <>
    <div className="flex text-xl justify-between items-center px-10 py-3 border-b fixed w-full bg-white z-10">

        <Link to={'/blogs'}>
            Blog Logo
        </Link>
        <div className="flex justify-center items-baseline gap-5 ">
            <div>
                <Link to={"/blog"}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New Blog</button>

                </Link>
            </div>
            <Avatar name="Kunal"/>
        </div>

    </div>
    </>
}