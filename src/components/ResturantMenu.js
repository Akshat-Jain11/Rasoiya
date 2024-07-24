import ShimmerMenu from "./ShimmerMenu"
import { useParams } from "react-router-dom"
import { CDN_URL } from "../utils/constants"

import useResturantMenu from "../utils/useResturantMenu"

const RestrauntMenu = () => {

    const {resId} = useParams()
    
    // const [resInfo, setResInfo] = useState(null)

    // useEffect(()=>{
    //     fetchData()
    // },[])

    // const fetchData = async () => {
    //     const data = await fetch( MENU_API + resId )
    //     const json = await data.json()
    //     setResInfo(json)
    // }

    const resInfo = useResturantMenu(resId)

    if (resInfo === null )
        return <ShimmerMenu />

    const {name, avgRating, costForTwoMessage, cloudinaryImageId, areaName, city, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info 

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    return (
        <div className="resturant-menu p-8 pb-12">
            <div className="menu-header flex items-center justify-between bg-gray-300 rounded-3xl w-[55rem] p-2 m-auto">
                <div>
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <h3 className="space-here pt-6"><span className="star content-center text-white bg-green-600 px-1 rounded-full">&#9733;</span> {avgRating} </h3> 
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{costForTwoMessage}</h3>
                    <h3>{areaName}, {city}</h3>
                </div>
            <img src={ CDN_URL + cloudinaryImageId} className="menu-image h-60 rounded-3xl"/>
            </div>
            <h2 className="text-2xl">Menu:</h2>
            <ul className="px-8 list-disc">
                { itemCards.map( (item) => (
                    <li className="" key={item.card.info.id}>
                        {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestrauntMenu
