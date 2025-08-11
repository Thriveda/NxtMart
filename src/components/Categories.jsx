import { useState } from "react"


function Categories(props){
    const {packages} = props
    const [click, setClick] = useState("All")
    

    function selectCategory(name){
        setClick(name)
        
    }
    return(
        <div className="">
            <h1 className="text-xl text-[#088C03] font-semibold ml-4 mt-8">Categories</h1>
            <ul className="flex flex-col justify-start items-start">
                <li className={`px-3 py-2 ml-2 mt-2 font-semibold ${click === "All" ? "text-white bg-[#088C03] rounded-lg" : ""}`} onClick={()=>selectCategory("All")}>All</li>
                {packages.map((each)=>{
                    return <li className={`ml-2 px-3 py-3 font-semibold ${click === each.name ? "text-white bg-[#088C03] rounded-lg" : ""}`}><a href={`#${each.name}`} onClick={()=>selectCategory(each.name)}>{each.name}</a></li>
                })}
            </ul>
        </div>
    )
}

export default Categories