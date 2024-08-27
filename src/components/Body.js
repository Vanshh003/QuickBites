import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";




// not using keys (not acceptable) <<<< index as key <<<<< unique id (best practice)
const Body = () => {
    return (
        <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                {resList.map((restautant) => (   // Content Driven UI
                    <RestaurantCard key={restautant.info.id} resData={restautant}/>
                ))}
            </div>
        </div>
    )
};

export default Body;