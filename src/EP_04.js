// take is cheap show me the code
// food ordering app from the scratch
import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body_05";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestaurnantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

// lazy import 
// this takes a call back function 
// this one line code can do magical things on our app 

// grocery code has been separated 
const Grocery = lazy(()=> import ("./components/Grocery"))

// function component of the app
const AppLayout = () => {
  // console.log(<Body />);
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: <Suspense fallback={<h1>Load Ho rha h beta </h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurnantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
