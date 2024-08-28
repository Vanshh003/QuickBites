import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    // local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(); 
    

    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40487574339156&lng=77.33804125338793&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();     // convert that stream to json

        // updating the state variable, for it to populate the app with new data
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };
    
    

    // not using keys (not acceptable) <<<< index as key <<<< unique id (best practice)
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