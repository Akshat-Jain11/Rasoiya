import RestrauntCard from "./RestrauntCard.js";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer.js";

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


    return (listOfRestraunts.length === 0) ? ( <Shimmer /> ) : (    
        <div className="body">
            <div className="filter">
                
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={ (e)=>{setSearchText(e.target.value)} } />
                    <button onClick={ ()=>{
                        
                        const searchResultList = listOfRestraunts.filter( (restraunt) =>
                            ( restraunt.info.name.toLowerCase().includes(searchText.toLowerCase()) ) || 
                            ( restraunt.info.cuisines.map( (item)=>item.toLowerCase() ).includes(searchText.toLowerCase()) ) 
                        )
                        setFilteredRestraunts(searchResultList)
                    } }>
                        Search
                    </button>
                </div>
                    
                <button className="filter-btn" onClick={ () => {
                            const filteredList = listOfRestraunts.filter( (res) => (res.info.avgRating > 4.2) )
                            console.log(filteredList);
                            setFilteredRestraunts(filteredList)
                        } 
                    }>
                    Top-Rated Restraunts
                </button>

            </div>
            <div className="restraunts">
                { 
                    filteredRestraunts.map( (restraunt) => (<RestrauntCard key={restraunt.info.id} restrauntData={restraunt} />) ) 
                }
            </div>
        </div>
    )
}

export default Body;