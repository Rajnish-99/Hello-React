import React from "react";

import ReactDOM from "react-dom/client";

//react elements

// react element is an object
// when we render this element on dom than this becomes a html element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
// jsx is separate html like syntax 
// it is js and html kind of fix 
// in html we use class but in jsx we use classheading
//jsx uses the camelcase and bit different attributes as compared to the html
const jsxHeading = <h1  className="heading"> Namaste React using JSX ⭐️</h1>

// 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
