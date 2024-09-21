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
const jsxHeading = (
  <h1 className="heading" tabIndex="1">
    Namaste React using JSX with superpowers here and there⭐️
  </h1>
);

// react component

const Title = () => (
  <h1 className="head" tabhead="5">
    Namaste react from the title in jsx way
  </h1>
);

const HeadingComponent1 = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste react from first functional component</h1>
  </div>
);

// HeadingComponent 1 and 2 are same thing one with curky brackets and return statement other is without it that it
// it we want to write multiples line in jsx we have to use paranthesis inside
const HeadingComponent2 = () => (
  <h1 className="heding">Namaste React from second functional component</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
