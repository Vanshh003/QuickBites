import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

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

                </ul>
            </div>
        </div>
    )
};

export default Header