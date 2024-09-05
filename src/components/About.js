import React from "react"
import User from "./User"
import UserClass from "./UserClass"

// class based component
class About extends React.Component {       // parent class component      
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is QuickBytes</h2>

                {/* child class component */}
                {/* <User /> */}
                <UserClass name={"Child1 (classes)"} location={"Blr (classes)"} />  
            </div>
        )
    }
}




// equivalent functional component
// const About = () => {
//   return (

//     <div>
//         <h1>About</h1>
//         <h2>This is QuickBytes using React</h2>

//         <UserClass name={"Vansh (class based component)"} location={"Bangalore (class based component)"}/>
//     </div>

//   )
// }

export default About