import React from "react"
import User from "./User"
import UserClass from "./UserClass"
import { render } from "react-dom";

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
                <UserClass name={"Child1 (classes"} location={"Blr (classes"} />  
                <UserClass name={"Child2 (classes"} location={"Blr (classes"} />     
            </div>
        )
    }
}


// Parent Constructor
// Parent render 
    
//     Child1 Constructor
//     Child1 render
    
//     Child2 Constructor
//     child2 render 

// (render phase ends)
// (commit phase begins)

// (DOM Manuplation -> (calculates the diff -> update the DOM))

//     Child1 componentDidMount
//     Child2 componentDidMount

// Parent componentDidMount




// equivalent functional component
const About = () => {
  return (

    <div>
        <h1>About</h1>
        <h2>This is QuickBytes using React</h2>

        <UserClass name={"Vansh (class based component)"} location={"Bangalore (class based component)"}/>
    </div>

  )
}

export default About