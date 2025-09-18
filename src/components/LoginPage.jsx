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
        <div className="bg-[url('https://res.cloudinary.com/dpqs7ibuh/image/upload/v1752660944/Background_2_yg1fxs.png')] md:bg-[url('https://res.cloudinary.com/dpqs7ibuh/image/upload/v1758103391/Background_1_xw4rpk.png')] bg-cover h-screen w-screen flex felx-col justify-center items-center">
            <div className="bg-[white] w-80 md:w-120 p-8 rounded-xl flex flex-col justify-center items-center">
                <img src="https://res.cloudinary.com/dpqs7ibuh/image/upload/v1758103176/Logo_2_exiyhq.png" className="" alt="NxtMart" />
                <form className="flex flex-col p-1" onSubmit={submitLogin}>
                    <label htmlFor="username" className="m-1 text-[gray]">Username</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <input id="username" type="text" value={username} onChange={usenameInput} className="border-2 border-[#64748B] rounded-md p-1 w-50 md:w-80 pl-8 m-1" />
                    </div>
                    <label htmlFor="password" className="m-1 text-[gray]">Password</label>
                    <div className="relative">
                        {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>}
                        <input id="password" type={showPassword ? "text":"password"} value={password} onChange={passwordInput} className="border-2 border-[#64748B] rounded-md p-1 w-50 md:w-80 m-1 pl-8" />
                    </div>
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