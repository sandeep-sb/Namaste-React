import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItemCard from "./MenuItemcard";

const Menu = ({resId}) => {
    const [menuList, setMenuList] = useState();
    const [isVeg, setIsVeg] = useState(false);

    useEffect(()=>{
        fetchMenuDetails();
    }, []);

    async function fetchMenuDetails() {
        const menuData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999
        &restaurantId=${resId}`);
        const json = await menuData.json();
        console.log(json.data.cards[2]);
        const menu = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.
            filter(x => x?.card?.card?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        console.log(menu);
        setMenuList(menu);
    }

    if(menuList === null)   return <Shimmer />

    return (
        <>
        <div className="veg-or-nonveg">
            <label htmlFor="veg">Veg</label>
            <input id="veg" type="checkbox" value={isVeg} onClick={() => setIsVeg(value => !value)}/>
        </div>
        {menuList?.map((x, index) => 
            <div className="menu-card" key={index}>
                <h2>{x?.card?.card?.title} ({x?.card?.card?.itemCards.length})</h2>
                {x?.card?.card?.itemCards?.map(item => 
                    <MenuItemCard key={item.card.info.id} menu={item.card.info} filterVeg={isVeg} ></MenuItemCard>
                )}
            </div>
        )}
        </>
    );
}

export default Menu;