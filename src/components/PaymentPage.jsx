import { useNavigate } from "react-router-dom"


function PaymentPage (){
    const navigate = useNavigate()
    function homeBut(){
        navigate("/home", {replace:true})
    }
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <img src="https://res.cloudinary.com/dpqs7ibuh/image/upload/v1754581626/Group_7417_vttaoa.png" className="m-6" alt="tick" />
                <h1 className="text-xl text-[#191919] font-medium">Payment Successfull</h1>
                <p className="text-md text-[#191919CC] mt-2">Thankyou for ordering</p>
                <p className="text-md text-[#191919CC] mb-2">Your payment is successfully completed</p>
                <button className="bg-[#088C03] mt-3 px-2 py-1.5 rounded-md text-[white]" onClick={homeBut}>Return to Home Page</button>
            </div>
        </div>
    )
}

export default PaymentPage