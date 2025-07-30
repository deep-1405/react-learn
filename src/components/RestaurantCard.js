import { CDN_URL } from "../../public/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData.info)
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = resData.info;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={
                    CDN_URL + cloudinaryImageId
                }
            />
            <div className="res-card-content">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <div className="res-card-rating">
                    <span className="rating-badge">
                        ⭐ {avgRating}
                    </span>
                    <span className="rating-text">• {sla.deliveryTime} min</span>
                </div>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;  