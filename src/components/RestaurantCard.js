import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {restaurantData} = props
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRatingString, sla} = restaurantData?.info
    return (
        <div className="restraunt-card bg-gray-200 hover:bg-gray-300 active:bg-gray-200 p-2 w-60 my-3 mx-auto rounded-lg">
            <img src={CDN_URL+ cloudinaryImageId} alt="food image" className="h-44 min-w-full border rounded-md border-black"/>
            <h3 className="text-lg pt-1 pl-1 font-semibold">{name}</h3><br></br>
            <h5 className="text-sm">{cuisines.join(", ")}</h5><br></br>
            <h5 className="text-sm">{costForTwo}</h5><br></br>
            <h5 className="text-sm"><span className="star content-center text-white bg-green-600 px-1 rounded-full">&#9733;</span> <span className="font-bold text-green-700">{avgRatingString}</span> • {sla?.deliveryTime} min</h5>
        </div>
    )
}

export const hasLabel = (RestaurantCard) => {
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-gray-950 text-white px-2 my-3 rounded-r-md">Top Rated</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;