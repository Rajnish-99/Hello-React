import User from "./User";
import UserClass from "./UserClass"; 

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is React deep dive</h2>
      <User name ={"Rajnish Ranjan(Function)"}/>
      <UserClass name={"Rajnish Ranjan (Class)"} location={"Dehradun (Class)"}/>
    </div>
  );
};

export default About;
