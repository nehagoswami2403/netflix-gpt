import Header from "./Header";

const Login = () => {
    return (
        <div>
            <Header />
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="background-img"></img>
            </div>

            <form className="absolute w-3/12 my-40 mx-auto right-0 left-0  p-12 bg-black text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">Sign In</h1>
                <input type="text" placeholder="Email"  className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
                
                <p>New to Netflix? Sign Up Now</p>
            </form>
        </div>
    )
}

export default Login;