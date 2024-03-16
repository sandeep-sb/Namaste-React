import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import Menu from "./MenuCard";
import { useParams } from "react-router-dom";
import { FaMotorcycle } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

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
            {/* <img
                className="restaurant-image"
                src={CDN_URL + resInfo.cloudinaryImageId}
            /> */}
            <div className="restaurant-details">
                <div>
                    <h2 className="res-name">{resInfo.name}</h2>

                    <div className="dish-type">
                        <p className="dish-item">{resInfo.cuisines[0]},</p>
                        <p className="dish-item"> {resInfo.cuisines[1]}</p>
                    </div>

                    <p className="res-area">{resInfo.areaName}</p>
                    
                    <p>
                        <FaMotorcycle/>
                        {resInfo.sla.lastMileTravel} kms
                    </p>
                    
                </div>
                <div className="res-rating">
                    <p><FaStar /> {resInfo.avgRating}</p>
                    <p>{resInfo.totalRatingsString} ratings</p>

                </div>
                
                {/* <p>isOpen: {resInfo.isOpen ? "true" : "false"}</p>
                    <p>{resInfo.aggregatedDiscountInfoV3.header} | {resInfo.aggregatedDiscountInfoV3.subHeader}</p>
                 */}
            </div>
            <div className="delivery-details">
                
                <p><MdAccessTimeFilled className="delivery-icon"/>{resInfo.sla.slaString}</p>
                
                <p><HiOutlineCurrencyRupee className="delivery-icon"/>{resInfo.costForTwo}</p>
            </div>
            <Menu resId={resId} />
        </div>
    );
}

export default RestaurantMenu;