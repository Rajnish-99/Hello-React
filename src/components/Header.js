import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// functional component of the header
const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  // console.log("Header Rendered called again and again");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-item">
        <ul>
          
          <li>Online Status: {onlineStatus?"✅":"🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* <li>
          // this renders the whole page 
            <a href="/About">About Us</a>
          </li> */}
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Kitchen Essentials </Link>
          </li>
          <li>Cart</li>
          <button
            className="Login-button"
            onClick={() => {
              // btnName = "Logout";
              // toggle between login and logout
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              // setbtnNameReact("Logout");
              // alert("Button Dab gya lakin kcuh hua nahi h")
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
``;
// before import we have to first export first give than take
export default Header;
