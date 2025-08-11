import { useState  } from "react"
import Cookies from "js-cookie"
import { useNavigate, Navigate } from "react-router-dom"

const LoginPage = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] =  useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [showErrorMsg, setshowErrorMsg] = useState(false)
    const navigate = useNavigate()

    const userDetails = {
        username,
        password
    }

    function usenameInput(event){
        setUsername(event.target.value)
    }
    function passwordInput(event){
        setPassword(event.target.value)
    }
    function checkBox(){
        setShowPassword(prev => !prev)
    }
    function onSubmitSuccess(jwt_token){
        Cookies.set("jwt_token", jwt_token, {expires: 30})
        navigate('/home',{replace:true})

    }
    
    function onSubmitFailure(error_msg){
        setshowErrorMsg(true)
        setErrorMsg(error_msg)

    }
    function submitLogin(event){
        event.preventDefault()
        async function authenticateLogin(){
            const url = "https://apis.ccbp.in/login"
            const opt = {
                method: "POST",
                body: JSON.stringify(userDetails)
            }
            const response = await fetch(url, opt)
            const jsonResponse = await response.json()
            // console.log(typeof(jsonResponse.jwt_token))
            if (response.ok === true){
                onSubmitSuccess(jsonResponse.jwt_token)
            }
            else{
                onSubmitFailure(jsonResponse.error_msg)
            }

        }
        authenticateLogin()
    }
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined){
        return <Navigate to='/home' />
    }

    return(
        <div className="bg-[url('https://res.cloudinary.com/dpqs7ibuh/image/upload/v1752660944/Background_2_yg1fxs.png')] md:bg-[url('https://res.cloudinary.com/dpqs7ibuh/image/upload/v1752588817/Background_1_i6fazn.png')] bg-cover h-screen w-screen flex felx-col justify-center items-center">
            <div className="bg-[white] w-[74vw] md:w-[28vw] p-10 rounded-xl flex flex-col justify-center items-center">
                <img src="https://res.cloudinary.com/dpqs7ibuh/image/upload/v1752589350/Logo_2_peviun.png" className="" alt="NxtMart" />
                <form className="flex flex-col p-1" onSubmit={submitLogin}>
                    <label htmlFor="username" className="m-1 text-[gray]">Username</label>
                    <input id="username" type="text" value={username} onChange={usenameInput} className="border-2 border-[#64748B] rounded-md p-1 w-44 md:w-80 m-1" />
                    <label htmlFor="password" className="m-1 text-[gray]">Password</label>
                    <input id="password" type={showPassword ? "text":"password"} value={password} onChange={passwordInput} className="border-2 border-[#64748B] rounded-md p-1 w-44 md:w-80 m-1" />
                    <div className="m-2">
                        <input id="checkBox" type="checkbox" onChange={checkBox} className="accent-[#088C03] mr-1 size-3.5" />
                        <label htmlFor="checkBox" className="">Show Password</label>
                    </div>
                    <button type="submit" className={`m-1 p-1.5 rounded-md text-[white] ${username==="" || password==="" ? "bg-[#B3B3B3]" : "bg-[#088C03]"}`}>Login</button>
                </form>
                {showErrorMsg ? <p className="text-[#EF4444]">{errorMsg}</p>:"" }
            </div>
        </div>
    )
}

export default LoginPage