import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-img"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{[cuisines[0], cuisines[1]].join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
