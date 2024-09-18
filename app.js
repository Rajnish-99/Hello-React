import React from "react";

import ReactDOM from "react-dom";


const heading = React.createElement("h1", {id: "headingggg"}, "Hello World From React inside the JS ");

console.log(heading)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
 