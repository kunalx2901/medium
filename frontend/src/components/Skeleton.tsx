

export const Skeleton = ()=>{
    return <div role="status" className="w-[50%] rounded animate-pulse md:p-6 ">
        
        <div className="flex justify-center lg:m-2 m-12 lg:w-full lg:pl-20 lg:p-5">
        <div className="flex justify-center border-b border-slate-500 flex-col w-full p-2">
            <div className="flex items-center mt-4">
           <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
            <div>
                <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
            </div>
         </div>
        <span className="sr-only">Loading...</span>
    </div>
    </div>
    </div>
    
}


export const SkeletonBlog = ()=>{
    return <>
    <div className="flex justify-between items-center m-5 p-32 gap-10">
        <div className="text-4xl font-bold w-[60%] p-10"> 
            
          <div className="text-slate-600 text-lg mt-2">
          <div className="h-2.5 bg-gray-200 rounded-ful w-full mb-2"></div>
          </div>
          <div className=" text-xl font-light mt-5 pr-20">
          <div className="h-2.5 bg-gray-200 rounded-full w-full mb-2"></div>
          </div>
          <div className=" text-xl font-light mt-5 pr-20">
          <div className="h-2.5 bg-gray-200 rounded-full w-[50%] mb-2"></div>
          </div>
          <div className=" text-xl font-light mt-5 pr-20">
          <div className="h-2.5 bg-gray-200 rounded-full w-[50%] mb-2"></div>
          </div>
        </div>

        <div className="text-xl font-light text-slate-600 p-3 w-[40%]">
            <div className="font-bold border-b border-slate-600 mb-5 w-full ">
            <div className="h-2.5 bg-gray-200 rounded-full mb-2"></div>
            </div>
           
            <div className="text-2xl font-bold text-black gap-3 ">
                <div className="flex gap-3">
                <div className="relative bottom-1">
                <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>   
            <div className="h-2.5 mt-5 bg-gray-200 rounded-full w-[50%] mb-2"></div>            
            </div>
                
                <div >
                <div className="h-2.5 bg-gray-200 rounded-full w-[50%] mb-2"></div>
                </div>
                </div>

                <div className="text-slate-700 text-xl font-light mt-1">
                <div className="h-2.5 bg-gray-200 rounded-full w-full mb-2"></div>
                </div>
            </div>
        </div>
    </div>
    </>
}