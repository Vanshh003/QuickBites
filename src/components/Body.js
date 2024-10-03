import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    // local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]); 
    const [modifiedListOfRestaurants, setModifiedListOfRestaurants] = useState([]); 
    
    const [searchText, setSearchText] = useState("");


    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render only (just once)
    // if dependency array is not empty.. [btnNameReact] => useEffect will be called everytime btnNameReact is updated 
    useEffect(() => {
        // console.log(listOfRestaurants);
        fetchData();
    }, []);

    

    const fetchData = async () => {
        // to bypass CORS policy error without using chrome extension.. use corsproxy in front of this api call
        const data = await fetch(HOME_API);

        const json = await data.json();     // convert that stream to json
        // console.log(json);
        
        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);       // updating the state variable, for it to populate the app with new data
        setModifiedListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks Like you're Offline :/  Please Check Your Internet Connection </h1>
    
    
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
                    <Link key={restautant.info.id} to={"/restaurants/" + restautant.info.id}><RestaurantCard key={restautant.info.id} resData={restautant}/></Link>
                ))}
            </div>

        </div>
    )
};

export default Body;