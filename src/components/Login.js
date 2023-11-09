import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage, setValidationMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
   
    const handleButtonClick = () => {
        // validate the form data 
        const validationMessage = checkValidData(email.current.value, password.current.value);
        setValidationMessage(validationMessage);

    }

    const toggleSignInForm= () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="background-img"></img>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 my-40 mx-auto right-0 left-0  p-12 bg-black text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                { !isSignInForm && 
                (<input type="text" placeholder="Full Name"  className="p-4 my-4 w-full bg-gray-800 rounded-lg" />)
                }
                
                <input type="text" placeholder="Email" ref={email} className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
                <input type="password" placeholder="Password" ref={password} className="p-4 my-4 w-full bg-gray-800 rounded-lg" />

                <p className="text-red-500 font-bold">{errorMessage}</p>

                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                
                <p className="cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}

                    
                    </p>
            </form>
        </div>
    )
}

export default Login;