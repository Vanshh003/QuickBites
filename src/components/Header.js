import { useState, useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // const data = useContext(UserContext);
    // console.log(data);
    const {loggedInuser} = useContext(UserContext);

    return (
        // <div className="header">
        <div className="flex justify-between bg-orange-100 shadow-lg">
            <div className="logo-container">
                <img
                    // className="logo"
                    className="w-56"  
                    src={LOGO_URL}
                />
            </div>

            {/* <div className="nav-items"> */}
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about"> About Us </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact"> Contact Us </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery"> Grocery </Link>
                    </li>
                    <li className="px-4">Cart</li>

                    <button 
                        className="login px-4" 
                        onClick={() => {
                            (btnNameReact === "Login") ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                        }}
                    >
                        {btnNameReact}
                    </button>

                    <li className="px-4 font-bold">
                        {loggedInuser}
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Header