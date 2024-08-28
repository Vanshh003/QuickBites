import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {
    // local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    
    // as use state returns an array.. the above line can also be written as
    // const arr = useState(resList);
    // const [listOfRestaurants, setListOfRestaurants] = arr;
    
    // it can also be written as
    // const arr = useState(resList);
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];
    
    


    
    
    // not using keys (not acceptable) <<<< index as key <<<<< unique id (best practice)
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    // filter logic here
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    
                    // update state variable
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map((restautant) => (   // Content Driven UI
                    <RestaurantCard key={restautant.info.id} resData={restautant}/>
                ))}
            </div>
        </div>
    )
};

export default Body;