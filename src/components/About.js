import React from "react"
import User from "./User"
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";


// const About = () => {
//   return (

//     <div>
//         <h1>About</h1>
//         <h2>This is QuickBytes using React</h2>

//         <User />
//     </div>

//   )
// }

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {};

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          Loggedin User
          <UserContext.Consumer>
            {/* {(data) => console.log(data)} */}
            {({ loggedInuser }) => (
              <h1 classname="text-xl font-bold">{loggedInuser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <h2>This is QuickBytes using React</h2>
        <UserClass name={"First"} location={"Dehradun Class"} />
      </div>
    )
  }
}

export default About;