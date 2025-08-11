import { useEffect, useState } from "react"
import ErrorPage from "./ErrorPage"
import Footer from "./Footer"
import Header from "./Header"
import HeaderMV from './HeaderMV'
import Categories from "./Categories"
import Products from "./Products"
import Loader from "./Loader"
import CategoriesMV from "./CategoriesMV"
function Home(){
    const [loading, setLoading] = useState(false)
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width:768px").matches)
    const [packages, setPackages] = useState([])

    useEffect(()=>{
        const mediaQuery = window.matchMedia("(max-width: 768px)")
        const handleResize = (e) => setIsMobile(e.matches)
        mediaQuery.addEventListener("change", handleResize)
        return () => mediaQuery.removeEventListener("change", handleResize) 
    }, [])
    
    function fetchProducts(){
        async function fn(){
            setLoading(true)
            const response = await fetch("https://apis2.ccbp.in/nxt-mart/category-list-details")
            const jsonResponse = await response.json()
            setPackages(jsonResponse.categories)
            setLoading(false)
        }
        fn()
        
    }
    useEffect(fetchProducts,[])
    

    
    
    return(
        isMobile ? (<div>
                {loading && <Loader loading={loading}/>}
                <div className="relative">
                    <div className="sticky top-0 bg-[#FFFFFF] z-11 self-start">
                        <CategoriesMV packages={packages} />
                    </div>
                    <div className="">
                        {packages.map((each)=>{
                            return(
                                <div className="mb-8" id={each.name}>
                                    <div className="flex flex-row">
                                        <h2 className="text-xl font-semibold ml-2.5">{each.name}</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                    <Products each={each}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="fixed bottom-0 w-screen z-10 bg-[#ffffff]">
                <HeaderMV />
                </div>
            </div>) :
        (<div>
            {loading && <Loader loading={loading}/>}
            <header className="sticky top-0 w-screen z-50 bg-[#FFFFFF]">
                <Header />
            </header>
            <div className="grid grid-cols-[15%_84%] gap-4 z-10 relative">
                <div className="sticky top-0 self-start w-[20vw]">
                    <Categories packages={packages} />
                </div>
                <div className="mt-8">
                    {packages.map((each)=>{
                        return(
                            <div className="mb-8" id={each.name}>
                                <div className="flex flex-row">
                                    <h2 className="text-xl font-semibold ml-2.5">{each.name}</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                                <Products each={each}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>)
                
    )
}
export default Home