import User from "./User";
import UserClass from "./UserClass"; 
import React from "react";

// creating a class based component of the below component

class About extends React.Component{
  constructor(props){
    super(props);

    console.log("parent constructor called");
  }
  componentDidMount(){ console.log("Parent child is mounted ")  }
  render(){
    console.log("parent render called");
    return(
      <div>
        <h1>About Class Component</h1>
        <h2>This is React deep dive</h2>
        {/* <User name ={"Rajnish Ranjan(Function)"}/> */}
        <UserClass name={"Rajnish Ranjan (Class)"} location={"Dehradun (Class)"}/>
      </div>
    );
  }
}




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

export default About;
