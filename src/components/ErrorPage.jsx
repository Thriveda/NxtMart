import Header from "./Header"

const ErrorPage = () => {
    return(
        <div className="relative">
            <div className="fixed w-screen">
                <Header />
            </div>
            <div className="flex flex-col justify-center items-center h-screen">
                <img src="https://res.cloudinary.com/dpqs7ibuh/image/upload/v1753119336/Group_7519_frqhmr.png" alt="Error" className="m-1" />
                <h1 className="text-2xl font-semibold m-1">Oops! Something went wrong.</h1>
                <p className="mt-3 text-lg">We are having some trouble.</p>
                <button className="bg-[#088C03] px-4 py-2 mt-2 rounded-md text-[white]">Retry</button>
            </div>
        </div>
    )
}

export default ErrorPage