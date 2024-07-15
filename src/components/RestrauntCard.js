import { CDN_URL } from "../utils/constants"

const RestrauntCard = (props) => {
    const {restrauntData} = props
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRatingString, sla, id} = restrauntData?.info
    return (
        <div className="restraunt-card">
            <img src={CDN_URL+ cloudinaryImageId} alt="food image" />
            <h3>{name}</h3><br></br>
            <h5>{cuisines.join(", ")}</h5><br></br>
            <h5>{costForTwo}</h5><br></br>
            <h5><span className="star">&#9733;</span>{avgRatingString} • {sla?.deliveryTime} min</h5>
        </div>
    )
}

export default RestrauntCard;