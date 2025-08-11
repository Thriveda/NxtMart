

const PageNotFound = () => {
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <img src="https://res.cloudinary.com/dpqs7ibuh/image/upload/v1753118727/Group_7520_eewxvw.png" alt="Not Found" className="m-1" />
            <h1 className="text-2xl font-semibold m-1">Page Not Found.</h1>
            <p className="mt-3 text-lg text-center p-8 md:p-0">We are sorry, the page your requested could not be found.</p>
        </div>
    )
}
export default PageNotFound