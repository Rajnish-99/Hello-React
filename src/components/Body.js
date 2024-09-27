import RestaurnantCards from "./RestaurantCards";
import resList from "../utils/mockData";
//useState is imported like a named import
import { useState } from "react";

//data from the api
// data come from the backend in form of json

// function component of the body
const Body = () => {
  // state variable in js - super powerful variable for that we use hooks

  // it maintains the state of the component
  // const [listOfRestaurants, setlistOfRestaurants] = useState([
  //   {
  //     info: {
  //       id: "360507",
  //       name: "Burger Farmely",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_360507.JPG",
  //       locality: "Sardarpura",
  //       areaName: "Sardarpura",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Burgers", "Ice Cream"],
  //       avgRating: 4.9,
  //       parentId: "4660",
  //       avgRatingString: "4.5",
  //       totalRatingsString: "9.3K+",
  //       sla: {
  //         deliveryTime: 23,
  //         lastMileTravel: 2.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "20-25 mins",
  //         lastMileTravelString: "2.3 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "89938",
  //       name: "The Belgian Waffle CO.",
  //       cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
  //       locality: "Sardarpura",
  //       areaName: "Sardarpura",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
  //       avgRating: 4.6,
  //       veg: true,
  //       parentId: "2233",
  //       avgRatingString: "4.6",
  //       totalRatingsString: "3.5K+",
  //       sla: {
  //         deliveryTime: 27,
  //         lastMileTravel: 2.3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "2.3 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "798555",
  //       name: "Burger King",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_798555.JPG",
  //       locality: "Sardarpura",
  //       areaName: "Jodhpur",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.3,
  //       parentId: "166",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "2.4K+",
  //       sla: {
  //         deliveryTime: 21,
  //         lastMileTravel: 3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "20-25 mins",
  //         lastMileTravelString: "3.0 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "90004",
  //       name: "Subway",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/f661a2a9-6133-417f-b195-d5dffa4d5ead_90004.JPG",
  //       locality: "Ratanada",
  //       areaName: "Ratanada",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Healthy Food", "Salads", "Snacks"],
  //       avgRating: 4.1,
  //       parentId: "2",
  //       avgRatingString: "4.1",
  //       totalRatingsString: "4.5K+",
  //       sla: {
  //         deliveryTime: 24,
  //         lastMileTravel: 3,
  //         serviceability: "SERVICEABLE",
  //         slaString: "20-25 mins",
  //         lastMileTravelString: "3.0 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "408499",
  //       name: "KFC",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_408499.JPG",
  //       locality: "Sardarpura",
  //       areaName: "Sardarpura",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 4.3,
  //       parentId: "547",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "3.8K+",
  //       sla: {
  //         deliveryTime: 17,
  //         lastMileTravel: 2.5,
  //         serviceability: "SERVICEABLE",
  //         slaString: "15-20 mins",
  //         lastMileTravelString: "2.5 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  // ]);

  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  // Normal Js variable

  let listOfRestaurants2 = [];

  return (
    <div className="body">
      <div className="filter"></div>
      <button
        className="filter-btn"
        onClick={() => {
          // alert("Kya tu tyar h magic dekhne k lie");
          // write a filter logic here
          // listOfRestaurants = listOfRestaurants.filter(
          //   (res) => res.info.avgRating > 4.5
          // );

          //using the useState
          const filterList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.4
          );
          setlistOfRestaurants(filterList);
          console.log(listOfRestaurants);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {listOfRestaurants.map((info, index) => (
          <RestaurnantCards key={index} resData={info} />
        ))}
        {/* <RestaurnantCards />
          <RestaurnantCards /> */}
      </div>
    </div>
  );
};

export default Body;
