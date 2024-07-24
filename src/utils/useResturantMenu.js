import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useResturantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect( ()=>{
        fetchInfo()
    },[])

    const fetchInfo = async () =>{
        const data = await fetch(MENU_API + resId)
        const json = await data.json()
        setResInfo(json)
    }
    
    return resInfo
}

export default useResturantMenu