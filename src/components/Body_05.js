import RestaurnantCards from "./RestaurantCards";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  // first body will render than the useEffect will be callled
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listOfRestaurants);
  };

  // Normal Js variable

  let listOfRestaurants2 = [];

  return (
    <div className="body">
      <div className="filter"></div>
      <button
        className="filter-btn"
        onClick={() => {
          const filterList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.4
          );
          setlistOfRestaurants(filterList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {listOfRestaurants.map((info, index) => (
          <RestaurnantCards key={index} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
