// take is cheap show me the code
// food ordering app from the scratch
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 *
 * Body
 * - Search
 * - RestaurantConatiner
 *   - RestaurnantCard
 *      - Img
 *      - Name of res, star rating , cusisines, delivery time
 *
 * Footer
 * - Cpoyright
 * - Links
 * - Address
 */

// functional component of the header

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.logojoy.com/wp-content/uploads/20200506163712/32-1-600x314.png"
        />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// fucntional component of the restaurnant card

const RestaurnantCards = () => {
  return (
    <div className="res-card" style={{background: "#f0f0f0"}}>
        <img className="meghna-img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/fa/13/d3/paneer-biryani.jpg?w=1200&h=-1&s=1" />
      <h3>Meghna foods</h3>
      <h4>Biryani, North Indian , Asians</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

// function component of the body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurnantCards />
        <RestaurnantCards />
        <RestaurnantCards />
        <RestaurnantCards />
        <RestaurnantCards />
        <RestaurnantCards />
      </div>
    </div>
  );
};

// function component of the app
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
