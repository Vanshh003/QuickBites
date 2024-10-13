import { useState, useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    // const data = useContext(UserContext);
    // console.log(data);
    const {loggedInuser} = useContext(UserContext);


    // Read Items from the store
    // subscribing to the store using selector (this hook will give us access to the store)
    // this selector helps us identify, what portion of the store we need to read and subscribe to
    const cartItems = useSelector((store) => store.cart.items); // now this cartItems will get the data of the store items and whenever the items will modify, this cardItems will also modify

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
                    <li className="px-4 font-bold">Cart - ({cartItems.length} items)</li>

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