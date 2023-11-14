import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidEmail, checkValidPassword } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { BACKGROUND_IMAGE, SIGNIN_ERROR_MSG, SIGNIN_MSG, SIGNUP_MSG } from "../utils/constants";

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [emailValidationMessage, setEmailValidationMessage] = useState(null);
    const [passValidationMessage, setPassValidationMessage] = useState(null);
    const [signInErrorMessage, setSignInErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
   
    const handleButtonClick = () => {
        // validate the form data 
        const validationEmailMessage = checkValidEmail(email.current.value);
        const validationPassMessage = checkValidPassword(password.current.value);

        setEmailValidationMessage(validationEmailMessage);
        setPassValidationMessage(validationPassMessage);

        if (validationEmailMessage || validationPassMessage) return;
        
        
        if (isSignInForm) {
        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage + errorCode);
        setSignInErrorMessage(SIGNIN_ERROR_MSG)
        });
        
        } else {
        //sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
             // Signed up 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage + errorCode);
        });
        }
        

    }

    const toggleSignInForm= () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
            <img src={BACKGROUND_IMAGE}
             alt="background-img" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 my-40 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                { !isSignInForm && 
                (<input type="text" placeholder="Full Name"  className="p-4 my-4 w-full bg-gray-800 rounded-lg" />)
                }

                { signInErrorMessage && (<div className="block p-4 max-w-sm bg-orange-500 rounded-lg ">
                    <p className="font-normal text-white text-xs">{signInErrorMessage}</p>
                </div>)}

                <input type="text" placeholder="Email" ref={email} className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
                <p className="text-orange-500 text-xs">{emailValidationMessage}</p>

                <input type="password" placeholder="Password" ref={password} className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
                <p className="text-orange-500 text-xs">{passValidationMessage}</p>

                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                
                <p className="cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? SIGNUP_MSG : SIGNIN_MSG}
                </p>
            </form>
        </div>
    )
}

export default Login;