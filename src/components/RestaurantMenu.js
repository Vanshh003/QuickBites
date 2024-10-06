// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
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
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);



    // return (
    //     <div className="menu">
    //         <div className="menu-header">
    //             <h1 className="menu-restaurant-name">{name}</h1>
    //             <h2 className="menu-rating">{avgRating}</h2>
    //         </div>
    //         {/* <h3>{cuisines.join(", ")}</h3> */}
    //         {Array.isArray(cuisines) && cuisines.length > 0 && <h3>{cuisines.join(", ")}</h3>}

    //         <h3>{costForTwoMessage}</h3>
    //         <h2>Menu</h2>

    //         {Array.isArray(itemCards) && itemCards.length > 0 ? (
    //             <ul>
    //                 {itemCards.map((item) => (
    //                     <li key={item.card.info.id}>
    //                         {item.card.info.name} - {" Rs. "}
    //                         {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
    //                     </li>
    //                 ))}
    //             </ul>
    //         ) : (
    //             <p>No menu items available.</p>
    //         )}
    //     </div>

    // )







    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>

            {/* categories accordions - each accordion will have a header and collapsable body */}
            {categories.map((category) => <RestaurantCategory key={category?.card?.card.title} data = {category?.card?.card} />)}
        </div>
    );









    // return (
    //     <div className="menu max-w-2xl mx-auto my-5 p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200">
    //         <div className="menu-header flex justify-between items-center mb-3">
    //             <h1 className="menu-restaurant-name text-2xl font-bold text-gray-800 m-0">{name}</h1>
    //             <h2 className="menu-rating text-lg text-green-600 bg-gray-200 px-2 py-1 rounded ml-5">
    //                 {avgRating}
    //             </h2>
    //         </div>

    //         <div className="menu-header flex justify-between items-center mb-3">
    //             {Array.isArray(cuisines) && cuisines.length > 0 && (
    //                 <h3 className="text-sm text-gray-600 mb-2">{cuisines.join(", ")}</h3>
    //             )}
        
    //             <h3 className="text-sm text-gray-600 mb-2">{costForTwoMessage}</h3>
    //         </div>
    //         {/* {Array.isArray(cuisines) && cuisines.length > 0 && (
    //             <h3 className="text-sm text-gray-600 mb-2">{cuisines.join(", ")}</h3>
    //         )}
    
    //         <h3 className="text-sm text-gray-600 mb-2">{costForTwoMessage}</h3> */}
    //         <h2 className="text-lg mb-2 font-bold">Menu</h2>
    
    //         {Array.isArray(itemCards) && itemCards.length > 0 ? (
    //             <ul className="">
    //                 {itemCards.map((item) => (
    //                     <li key={item.card.info.id} className="flex justify-between text-gray-800 mb-2">
    //                         <span className="">{item.card.info.name}</span>
    //                         <span className="ml-5">
    //                             {" Rs. "}
    //                             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
    //                         </span>
    //                     </li>
    //                 ))}
    //             </ul>
    //         ) : (
    //             <p className="text-gray-600">No menu items available.</p>
    //         )}
    //     </div>
    // );
    













    






};

export default RestaurantMenu;