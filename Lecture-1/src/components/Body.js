import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Use Effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // // Conditional Rendering
  //   if(listOfRestaurants.length === 0){
  //     return (<Shimmer />);
  //  }

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
            const filteredList = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant.info.name.toLowerCase().includes(searchText);
              }
            );
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
