import { useState } from "react";
import useMenu from "../hooks/useMenu";
import Shimmer from "./Shimmer";
import MenuItemCard from "./MenuItemcard";

const Menu = ({ resId }) => {
  const [isVeg, setIsVeg] = useState(false);
  const menuList = useMenu(resId);

  if (menuList === null) return <Shimmer />;

  return (
    <>
      <div className="veg-or-nonveg">
        <label htmlFor="veg">Veg only</label>
        <input
          id="veg"
          type="checkbox"
          value={isVeg}
          onClick={() => setIsVeg((value) => !value)}
        />
      </div>
      {menuList?.map((x, index) => (
        <div className="menu-card" key={index}>
          <h2>{x?.card?.card?.title}</h2>
          {x?.card?.card?.itemCards?.map((item) => (
            <MenuItemCard
              key={item.card.info.id}
              menu={item.card.info}
              filterVeg={isVeg}
            ></MenuItemCard>
          ))}
        </div>
      ))}
    </>
  );
};

export default Menu;
