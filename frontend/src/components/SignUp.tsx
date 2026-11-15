import axios from "axios";
import { useState } from "react";


const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(name)
    console.log(email)
    console.log(password)

    interface signupdetials {
        userName: string,
        password: string,
        email: string
    }

    const signUpData: signupdetials = {
        userName: name,
        email: email,
        password: password
    }

    let signup = async () => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, signUpData)
        console.log("User Created Successfully", response)
    }

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="h-[450px] w-[350px] bg-white shadow-2xl flex justify-center items-center flex-col gap-5">
                <h1 className="text-2xl mb-6">
                    SignUp Page
                </h1>
                <input
                    type="text" 
                    placeholder="Enter Your userName..." 
                    className="border-1 px-4 py-1 rounded-[10px]"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="Enter Your Password..." 
                    className="border-1 px-4 py-1 rounded-[10px]" 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <input
                    type="text" 
                    placeholder="Enter Your email..." 
                    className="border-1 px-4 py-1 rounded-[10px]" 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                {/* <input type="button" value="Sign Up" className="border-1 mt-6 px-4 py-1 rounded-[10px]"/> */}
                <button
                    className="border px-5 py-1 cursor-pointer hover:bg-blue-500 hover:text-blue-50 transition-all" 
                    onClick={signup}>
                            Sign Up
                </button>
                <h6
                    className="text-[12px]">
                            Already Have an account 
                    <a href="" className="text-blue-700">
                            Sign in
                    </a>
                </h6>
            </div>
        </div>
    )
}

export default SignUp;