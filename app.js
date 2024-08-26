import React from 'react';
import ReactDOM from 'react-dom/client';

// header
//     logo 
//     nav items 
// body 
//     search 
//     restaurant container 
//         restaurant card 
//             image 
//             name of restaurant 
//             star rating
//             cuisine
//             delivery time
// footer 
//     copyright 
//     links 
//     address 
//     contact

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo" 
                    src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018" 
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = () => {
    return (
        // <div className='res-card' style={styleCard}>         or
        <div className='res-card' style={{ backgroundColor: "#f0f0f0" }}>
            <img 
                className='res-logo'
                alt='res-logo'
                src='https://images.venuebookingz.com/18104-1515154374-wm-meghana-foods-5.JPG'
            />
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian, Italian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4> 
        </div>
    );
};

const Body = () => {
    return (
        <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);