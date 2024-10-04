import { useEffect, useState } from "react"

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(1);
    const [userInfo, setUserInfo] = useState({
        name: "Default Name",
        location: "Default",
        avatar_url: "Default url"
    });


    useEffect(() => {
        // API Calls
        getUserInfo();
    }, []);

    async function getUserInfo () {
        const data = await fetch("https://api.github.com/users/Vansh003");
        const json = await data.json();

        setUserInfo(json);
    }


    const { name, location, avatar_url } = userInfo;

    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: quickBytes@gmail.com</h4>
        </div>
    )
}

export default User