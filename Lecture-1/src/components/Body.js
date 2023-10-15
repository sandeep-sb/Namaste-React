import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

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
