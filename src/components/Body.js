import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
    // local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]); 
    const [modifiedListOfRestaurants, setModifiedListOfRestaurants] = useState([]); 
    
    const [searchText, setSearchText] = useState("");

    
    useEffect(() => {
        // console.log(listOfRestaurants);
        fetchData();
    }, []);

    const fetchData = async () => {
        // to bypass CORS policy error without using chrome extension.. use corsproxy in front of this api call
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.40487574339156&lng=77.33804125338793&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();     // convert that stream to json
        console.log(json);
        
        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);       // updating the state variable, for it to populate the app with new data
        setModifiedListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    
    // Contitional Rendering
    return (listOfRestaurants.length === 0) ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>

                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
            
                    <button onClick={() => {
                        // Filter the restaurant cards and update the UI
                        const filteredRestaurant = listOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        // Update the state variable
                        setModifiedListOfRestaurants(filteredRestaurant);
                    }}>
                        Search
                    </button>

                </div>
                
                <button className="filter-btn" onClick={() => {
                    // filter logic here
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    
                    // update state variable
                    setModifiedListOfRestaurants(filteredList);  
                }}>
                    Top Rated Restaurants
                </button>

            </div>

            <div className='res-container'>
                {modifiedListOfRestaurants.map((restautant) => (   // Content Driven UI
                    <RestaurantCard key={restautant.info.id} resData={restautant}/>
                ))}
            </div>

        </div>
    )
};

export default Body;