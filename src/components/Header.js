import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { HEADER_LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const { uid, email } = user;
              dispatch(addUser({uid: uid, email: email}));
              //redirect to browse page
              navigate("/browse");

            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/")
            }
          });
          
          return () => unsubscribe();
          
    }, [])

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-52"
            src={HEADER_LOGO} alt="netflix-logo"></img>

            { user && (<div className="p-4">
                <img className="w-8 h-8" alt="userIcon" src={USER_ICON}></img>
                <button onClick={handleSignOut} className="text-white font-bold">Sign Out</button>

            </div>)}
        </div>
    )
}

export default Header;