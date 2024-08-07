import ShimmerMenu from "./ShimmerMenu"
import { CDN_URL } from "../utils/constants"
import RestaurantCategory from "./RestaurantCategory"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import UserContext from "../utils/UserContext"
import { useState, useContext } from "react"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {

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

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(null)

    const {loggedInUser} = useContext(UserContext)
    
    if (resInfo === null ) return <ShimmerMenu />
        
    const {name, avgRating, costForTwoMessage, cloudinaryImageId, areaName, city, cuisines} = resInfo?.data?.cards[2]?.card?.card?.info 

    // const {itemCards} = resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    const c = resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards?.filter( (c) => (c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ) 
    const c1 = resInfo?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards?.filter( (c)=> (c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") )

    let finalList=[]
    c.map( (item) => finalList.push(item?.card?.card) )
    c1.map( (itemOut) => itemOut?.card?.card?.categories.map( (itemIn)=> finalList.push(itemIn) ) )



    return (
        <div className="resturant-menu p-8 pb-12">
            <span className="font-bold text-2xl pt-2">Welcome {loggedInUser}!!</span>
            
            <div className="menu-header flex items-center justify-between bg-gray-100 rounded-3xl w-[55rem] p-2 mx-auto mb-14 mt-10 shadow-xl shadow-gray-500 hover:shadow-2xl hover:shadow-gray-900 hover:mb-16 hover:mt-8 border">
                <div>
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <h3 className="space-here pt-6"><span className="star content-center text-white bg-green-600 px-[0.3rem] rounded-full">&#9733;</span> {avgRating} </h3> 
                    <h3><span className="text-red-600 text-sm">{cuisines.join(", ")}</span></h3>
                    <h3>{costForTwoMessage}</h3>
                    <h3><span className="font-bold">Outlet:</span> {areaName}, {city}</h3>
                </div>
                <img src={ CDN_URL + cloudinaryImageId} className="menu-image h-60 rounded-3xl" />
            </div>

            {   finalList.map( (value, index) =>
                    <RestaurantCategory key={value.title} 
                        data={value} 
                        showItems={index === showIndex ? true : false} 
                        setShowIndex={ ()=> setShowIndex(index)}
                    />
                )
            }
            
        </div>
    )
}

export default RestaurantMenu