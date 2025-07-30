import { useState, useEffect } from "react";
import { useParams } from "react-router"; // ✅ use correct package
import { FOODFIRE_MENU_API_URL } from '../../public/constants';
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(FOODFIRE_MENU_API_URL + id);
        const json = await data.json();
        setResInfo(json);
        // Don't log resInfo here — it won't be updated yet
        console.log(json); // log the actual API response
    };

    // Wait until resInfo is loaded, then safely destructure
    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage, cloudinaryImageId} = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {/* <li>
                {
                    itemCards.map((item)=>item.card.info.name)
                }
                </li> */}

                {
                    itemCards.map((item) => (
                        <li key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;
