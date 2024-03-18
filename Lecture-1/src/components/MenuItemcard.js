import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const MenuItemCard = ({ menu, filterVeg }) => {
  const {
    isVeg,
    imageId,
    name,
    price,
    description,
    itemAttribute,
    defaultPrice,
  } = menu;

  return (
    <div
      className={`menu-item-container ${
        filterVeg === true && itemAttribute.vegClassifier === "NONVEG"
          ? "hidden"
          : ""
      }`}
    >
      <div className="menu-item-name-price-description">
        <div className="menu-item-name-price">
          <p className="veg-nonveg">{!isVeg ? "Non-veg" : "Veg"}</p>
          <h3 className="item-name">{name}</h3>
          <h5 className="item-price">
            Rs. {price / 100 || defaultPrice / 100}
          </h5>
        </div>
        <div>
          <p className="item-desciption">{description}</p>
        </div>
      </div>
      <div className="menu-item-image">
        <img src={CDN_URL + imageId} className="item-image" />
        {/* <button className="add-btn">Add</button> */}
      </div>
    </div>
  );
};

export default MenuItemCard;
