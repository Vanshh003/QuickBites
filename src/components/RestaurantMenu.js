// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const obj = useParams();
    const resInfo = useRestaurantMenu(obj.resID);


    // useEffect(() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + obj.resID);
        
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // };

    if(resInfo === null) {
        return <Shimmer />
    }

    // Optional Chaining
    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || [];


    return (
        <div className="menu">
            <div className="menu-header">
                <h1 className="menu-restaurant-name">{name}</h1>
                <h2 className="menu-rating">{avgRating}</h2>
            </div>
            {/* <h3>{cuisines.join(", ")}</h3> */}
            {Array.isArray(cuisines) && cuisines.length > 0 && <h3>{cuisines.join(", ")}</h3>}

            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>

            {Array.isArray(itemCards) && itemCards.length > 0 ? (
                <ul>
                    {itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {" Rs. "}
                            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No menu items available.</p>
            )}
        </div>

    )
};

export default RestaurantMenu;