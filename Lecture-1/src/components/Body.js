import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(onlineStatus === false){
    return (
      <div>
        <h1>Oops! Looks like you are offline. Please check your internet connection!!</h1>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          className="search-box"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((restaurant) => {
              return restaurant.info.name.toLowerCase().includes(searchText);
            });
            setFilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>
      </div>
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
        {filteredRestaurant.map((restaurant) => (
          <div
            key={restaurant.info.id}
            onClick={() => navigate(`/restaurants/${restaurant.info.id}`)}
          >
            <RestaurantCard resData={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
