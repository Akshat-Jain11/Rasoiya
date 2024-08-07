import RestaurantCard, {hasLabel} from "./RestaurantCard.js";
import { useState , useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js"

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("")

    const PromotedRes = hasLabel(RestaurantCard)
    
    useEffect( ()=>{
        fetchData()
    }, [] )
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4951464&lng=77.0886317&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const {loggedInUser, setUserName} = useContext(UserContext)

    if (useOnlineStatus() === false){
        return (<h1 className="m-2 text-xl">Looks like you are offline!! Please check your internet connection and try again...</h1>)
    }

    return (listOfRestaurants.length === 0) ? ( <Shimmer /> ) : (    
        <div className="body">
            <div className="filter px-20 py-8 flex items-center bg-green-100 my-2">
                
                <div className="search mr-16">
                    <input type="text" id="search-bar" className="search-box px-1 border rounded-md border-black" value={searchText} onChange={ (e)=>{setSearchText(e.target.value)} } />
                    <button  className="bg-slate-200 hover:bg-slate-300 active:bg-slate-200 ml-1 px-2 border rounded-md border-black" onClick={ ()=>{
                        const searchResultList = listOfRestaurants.filter( (restaurant) =>
                            ( restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ) || 
                            ( restaurant.info.cuisines.map( (item)=>item.toLowerCase() ).includes(searchText.toLowerCase()) ) 
                        )
                        setFilteredRestaurants(searchResultList)
                    } }>
                        Search
                    </button>
                </div>
                    
                <button className="bg-slate-200 hover:bg-slate-300 active:bg-slate-200 ml-16 px-2 border rounded-md border-black" onClick={ () => {
                        const filteredList = listOfRestaurants.filter( (res) => (res.info.avgRating > 4.3) )
                        setFilteredRestaurants(filteredList)
                    } 
                }>
                    Top-Rated Restaurants
                </button>

                <div className="ml-32">
                    <label>Name: </label>
                    <input type="text" className="p-1 border border-black rounded-md" value={loggedInUser} onChange={ (e)=>setUserName(e.target.value) }></input>
                </div>

            </div>

            <div className="restraunts flex flex-wrap justify-around px-48 py-8" >
                { 
                    filteredRestaurants.map( (restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                            {restaurant.info.avgRating > 4.3 ? <PromotedRes restaurantData={restaurant} /> : <RestaurantCard restaurantData={restaurant} />}
                        </Link> 
                    ) ) 
                }
            </div>

        </div>
    )
}

export default Body;
