import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import Menu from "./MenuCard";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menuData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await menuData.json();
        const menu = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(x => x?.info?.["id"] === resId);
        setResInfo(menu[0].info);
        console.log(menu[0].info);
    }

    return resInfo === null ? <Shimmer /> :(
        <div className="menu">
            <img
                className="restaurant-image"
                src={CDN_URL + resInfo.cloudinaryImageId}
            />
            <div className="restaurant-details">
                <p className="res-name">{resInfo.name}</p>
                <ul>
                    {resInfo.cuisines.map((dishName, index) => 
                        <li key={index}>{dishName}</li>
                        )}
                </ul>
                <h2>{resInfo.aggregatedDiscountInfoV3.header} | {resInfo.aggregatedDiscountInfoV3.subHeader}</h2>
                <h2>{resInfo.areaName}</h2>
                <h2>Ratings: {resInfo.avgRating}</h2>
                <h2>isOpen: {resInfo.isOpen ? "true" : "false"}</h2>
                <h2>{resInfo.costForTwo}</h2>
                <h2>Delivery Time: {resInfo.sla.slaString}</h2>
                <h2>Total Ratings: {resInfo.totalRatingsString}</h2>
            </div>
            <Menu resId={resId} />
        </div>
    );
}

export default RestaurantMenu;