import RestaurnantCards from "./RestaurantCards";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText,setsearchText] = useState("")
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
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    // this is optional chaining which will prevent the code from error and breakage
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(listOfRestaurants);
  };

  // conditional rendering
  // we use shimmer UI

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="searh-box"></input>
          <button
            className="search-button" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}
            onClick={() => {
              // filter the restaurnant cards and update the UI accordingly
              alert("Ranu beta masti nahi");
              console.log(searchText)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setlistOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {console.log(listOfRestaurants)}
        {listOfRestaurants.map((info, index) => (
          <RestaurnantCards key={index} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
