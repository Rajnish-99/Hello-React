import RestaurnantCards from "./RestaurantCards";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  // state variable for filtered restaurnant 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  const [searchText, setsearchText] = useState("");
  // first body will render than the useEffect will be callled
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4941463&lng=77.0809093&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

    setFilteredRestaurants(
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
          <input
            type="text"
            className="searh-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-button"
            onClick={() => {
              // filter the restaurnant cards and update the UI accordingly

              console.log(searchText);
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(res);
              // res.info.name.includes(searchText);

              //console.log(res.info.name);

              // console.log(filteredRes);
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {console.log(listOfRestaurants)}
        {filteredRestaurants.map((info, index) => (
          <RestaurnantCards key={index} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
