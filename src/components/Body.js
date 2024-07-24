import RestrauntCard from "./RestrauntCard.js";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {

    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);
    const [searchText, setSearchText] = useState("")

    
    useEffect( ()=>{
        fetchData()
    }, [] )
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4951464&lng=77.0886317&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        
        setListOfRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    
    if (useOnlineStatus() === false){
        return (<h1>Looks like you are offline!! Please check your internet connection and try again...</h1>)
    }

    return (listOfRestraunts.length === 0) ? ( <Shimmer /> ) : (    
        <div className="body">
            <div className="filter px-20 py-8 flex items-center bg-green-100 my-2">
                
                <div className="search mr-16">
                    <input type="text" id="search-bar" className="search-box px-1 border rounded-md border-black" value={searchText} onChange={ (e)=>{setSearchText(e.target.value)} } />
                    <button  className="bg-slate-200 ml-1 px-2 border rounded-md border-black" onClick={ ()=>{
                        const searchResultList = listOfRestraunts.filter( (restraunt) =>
                            ( restraunt.info.name.toLowerCase().includes(searchText.toLowerCase()) ) || 
                            ( restraunt.info.cuisines.map( (item)=>item.toLowerCase() ).includes(searchText.toLowerCase()) ) 
                        )
                        setFilteredRestraunts(searchResultList)
                    } }>
                        Search
                    </button>
                </div>
                    
                <button className="bg-slate-200 ml-16 px-2 border rounded-md border-black" onClick={ () => {
                        const filteredList = listOfRestraunts.filter( (res) => (res.info.avgRating > 4.5) )
                        setFilteredRestraunts(filteredList)
                    } 
                }>
                    Top-Rated Restraunts
                </button>

            </div>

            <div className="restraunts flex flex-wrap justify-around px-48 py-8" >
                { 
                    filteredRestraunts.map( (resturant) => (
                        <Link key={resturant.info.id} to={"/resturant/"+resturant.info.id}>
                            <RestrauntCard restrauntData={resturant} />
                        </Link> 
                    ) ) 
                }
            </div>

        </div>
    )
}

export default Body;
