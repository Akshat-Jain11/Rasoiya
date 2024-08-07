import { useState } from 'react';
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    }

    return(
        <div className="w-6/12 self-center p-4 mx-auto my-4 bg-gray-50 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
                <span className="text-lg">ᐯ</span>
            </div>
            { showItems && data.itemCards.map( (item)=> <ItemList dish={item.card.info} key={item.card.info.id}/> ) }
        </div>
    )
}

export default RestaurantCategory