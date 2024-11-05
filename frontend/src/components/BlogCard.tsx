import { Link } from "react-router-dom"

interface BlogCardInputs {
    authorName : string,
    title:string,
    content:string,
    publishedDate:string
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate

}:BlogCardInputs)=>{

    return <div className="flex justify-center lg:m-7 m-12 lg:w-[50%] lg:pl-20">
    <div className="flex justify-center border-b border-slate-500 flex-col w-full p-2">
        <div className="flex m-1 gap-2">
            <div className="flex gap-2 justify-center items-center">
                        <Avatar name={authorName}/>
                    <div className="">
                        {authorName} 
                    </div>
                    <div className="font-thin flex justify-center items-center gap-2 text-slate-500">
                        <Circle/>
                        {publishedDate}
                    </div>
            </div>
        </div>
    <div className="font-bold text-xl mt-2">
        <Link to={``}>
        {title}
        </Link>
    </div>
    <div className="font-normal">
        {content.slice(0,80) + "..."}
    </div>
    <div className="text-sm text-slate-500 mt-2">
      { `${Math.ceil(content.length / 100)} minute(s) read`}
    </div>
    
</div>
</div>





}
function Circle(){

    return <div className="w-1 h-1 rounded-full bg-gray-500">

    </div>
}

export function Avatar({name}:{name:string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100         rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300 text-xs">{name[0]}</span>
    </div>
}