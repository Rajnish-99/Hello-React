import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

// functional component of the header
const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header Rendered called again and again")
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="Login-button"
            onClick={() => {
              // btnName = "Logout";
              // toggle between login and logout 
              btnNameReact ==="Login"? setbtnNameReact("Logout"): setbtnNameReact("Login");
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
