import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useMenu = (resId) => {
  const [resInfo, setResInfo] = useState();

  useEffect(() => {
    fetchMenuDetails();
  }, []);

  async function fetchMenuDetails() {
    const menuData = await fetch(MENU_API + resId);

    const json = await menuData.json();

    console.log(json);
    const menu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (x) => x?.card?.card?.["title"] === "Recommended"
      );

    setResInfo(menu);
  }

  return resInfo;
};

export default useMenu;
