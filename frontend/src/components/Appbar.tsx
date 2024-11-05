import { Avatar } from "./BlogCard"
export const Appbar = ()=>{
    return <>
    <div className="flex text-xl justify-between items-center px-10 py-3 border-b">

        <div>
            Blog Logo
        </div>
        <div>
            <Avatar name="Kunal"/>
        </div>

    </div>
    </>
}