import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    console.log("Use Effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json?.data);
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

  console.log("Body rendered");

  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4.2
            );

            setListOfRestaurants(filterRestaurants);
          }}
        >
          Filter Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
