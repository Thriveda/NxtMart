import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

function Header(){
    const navigate = useNavigate()

    function logoutBut(){
        Cookies.remove("jwt_token")
        navigate("/", {replace:true})
    }
    return(
        <div className="flex flex-row justify-between items-start p-1 bg-[#D8D8D833] h-auto z-50 "> 
            <img src="https://res.cloudinary.com/dpqs7ibuh/image/upload/v1752589350/Logo_2_peviun.png" className="" alt="NxtMart" />
            <div className="flex flex-row justify p-4">
                <ul className="flex flex-row">
                    <li className="m-2"><Link to="/home">Home</Link></li>
                    <li className="m-2"><Link to="/cart">Cart</Link></li>
                </ul>
                <button type="button" className="m-2" onClick={logoutBut}>Logout</button>
            </div>
        </div>
    )
}

export default Header