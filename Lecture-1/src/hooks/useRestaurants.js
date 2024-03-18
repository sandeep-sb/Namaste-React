import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constants";

// Not used yet
// to be used in Body component

const useRestaurants = () => {
  // api call
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchListOfRestaurants();
  }, []);

  async function fetchListOfRestaurants(){
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  }

  return listOfRestaurants;
};

export default useRestaurants;