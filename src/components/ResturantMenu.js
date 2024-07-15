import Shimmer from "./Shimmer"
import { useState, useEffect } from "react"
import { MENU_API } from "../utils/constants"
import { useParams } from "react-router-dom"

const RestrauntMenu = () => {

    const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams()

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch( MENU_API + resId )
        const json = await data.json()
        setResInfo(json)
    }

    if (resInfo === null )
        return <Shimmer />

    const {name, avgRating, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info 

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    return (
        <div className="resturant-menu">
            <h1>{name}</h1>
            <h3>{avgRating}  •  {costForTwoMessage}</h3>
            <h2>Menu:</h2>
            {console.log(itemCards)}
            <ul>
                { itemCards.map( (item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestrauntMenu
