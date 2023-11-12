import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
        navigate("/")
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-52"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo"></img>

            { user && (<div className="p-4">
                <img className="w-8 h-8" alt="userIcon" src="https://occ-0-2085-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdTez6_1OWxU1-dQuXHn7It_OQPlhXyBiTvAwhudWIbGxImPiMLgHiSQYkt0qkZmux7p-0NL226YhgY-yViFsHo_Dacrx54.png?r=d47"></img>
                <button onClick={handleSignOut} className="text-white font-bold">Sign Out</button>

            </div>)}
        </div>
    )
}

export default Header;