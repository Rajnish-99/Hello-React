import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// creating a class based component of the below functional  component

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor called is first");
  }
  componentDidMount() {
    console.log("Parent component mount is called ");
  }
  render() {
    console.log("parent render called");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is React deep dive</h2>
        {/* <User name ={"Rajnish Ranjan(Function)"}/> */}
        <UserClass
          // two different instances of same class
          name={"Rajnish Ranjan (Class 1)"}
          location={"Dehradun (Class 1)"}
        />
        <UserClass name={"Elon Musk (Class 2)"} location={"USA(Class 2)"} />
      </div>
    );
  }
}

// functional Based Component

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is React deep dive</h2>
//       {/* <User name ={"Rajnish Ranjan(Function)"}/> */}
//       <UserClass name={"Rajnish Ranjan (Class)"} location={"Dehradun (Class)"}/>
//     </div>
//   );
// };

/*
Parent Constructor 
 - Parent Render
   - Rajnish constructor
*/

export default About;
