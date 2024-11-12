import { Link } from "react-router-dom"

interface BlogCardInputs {
    authorName : string,
    title:string,
    content:string,
    publishedDate:string,
    id:string
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id

}:BlogCardInputs)=>{

    return <div className="flex justify-center lg:m-7 m-12 lg:w-[50%] lg:pl-20">
    <div className="flex justify-center border-b border-slate-500 flex-col w-full p-2">
        <div className="flex m-1 gap-2">
            <div className="flex gap-2 justify-center items-center">
                        <Avatar name={authorName}/>
                    <div className="text-lg font-semibold">
                        {authorName} 
                    </div>
                    <div className="font-thin flex justify-center items-center gap-2 text-slate-500">
                        <Circle/>
                        {publishedDate}
                    </div>
            </div>
        </div>
    <div className="font-semibold text-3xl mt-2">
        <Link to={`/blog/${id}`}>
        {title}
        </Link>
    </div>
    <div className="font-light text-xl ">
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

export const Avatar = ({name , size = "small"}  : {name:string , size?:string} ) => {
    return <div className={ `flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size == 'small' ? 'w-7 h-7' : 'w-10 h-10'} `}>
    <span className={`font-medium ${size === "small" ? 'text-sm' : 'text-2xl'}  text-gray-600 dark:text-gray-300 pb-0.5`}>
    { name[0].toUpperCase()}
    </span>
</div>
}