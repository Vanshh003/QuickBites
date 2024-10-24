import { useEffect, useState, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    // local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]); 
    const [modifiedListOfRestaurants, setModifiedListOfRestaurants] = useState([]); 
    
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


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
    

    const {loggedInuser, setUserName} = useContext(UserContext);

    
    // Contitional Rendering
    return (listOfRestaurants.length === 0) ? <Shimmer /> : (
        <div className='body'>
            <div className='filter flex'>

                {/* <div className="search"> */}
                <div className="search m-4 p-4">
                    <input 
                        type="text" 
                        // className="search-box"
                        className="border border-solid border-black" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
            
                    <button 
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                        onClick={() => {
                            // Filter the restaurant cards and update the UI
                            const filteredRestaurant = listOfRestaurants.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            // Update the state variable
                            setModifiedListOfRestaurants(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>

                </div>

                <div className="search m-4 p-4 flex items-center">
                    <button 
                        // className="filter-btn" 
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            // filter logic here
                            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                            
                            // update state variable
                            setModifiedListOfRestaurants(filteredList);  
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>

                <div className="search m-4 p-4 items-center hidden">
                    <label className="p-2">Username: </label>
                    <input 
                        className="border border-black p-2" 
                        value={loggedInuser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                
                

            </div>

            {/* <div className='res-container'> */}
            <div className='flex flex-wrap'>
                {modifiedListOfRestaurants.map((restautant) => (   // Content Driven UI
                    <Link key={restautant.info.id} to={"/restaurants/" + restautant.info.id}>
                    
                        {/* if the restaurant is promoted then add a promoted label to it */}
                        {restautant.info.isBestseller ? <RestaurantCardPromoted key={restautant.info.id} resData={restautant}/> : <RestaurantCard key={restautant.info.id} resData={restautant}/>}
                        
                    </Link>
                ))}
            </div>

        </div>
    )
};

export default Body;