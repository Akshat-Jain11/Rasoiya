import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({dish}) => {

    const dispatch = useDispatch()

    const handleAddItem = function () {
        dispatch(addItem(dish))
    }

    return(
        <div className="p-2 m-2 pb-4 border-b-2 border-gray-400 flex justify-between">
            <div className="w-9/12 pr-4">
                <div className="py-3 font-semibold">
                    {/* <div>
                        {dish.itemAttribute.vegClassifier == "VEG" ? 
                            <div className="outline-offset-2 w-3 rounded-sm outline outline-1 outline-green-500">
                                <div className="bg-green-500 w-2 p-[6px] rounded-full"></div>
                            </div> :
                            <div className="outline-offset-2 w-3 rounded-sm outline outline-1 outline-red-500">
                                <div className="bg-red-500 w-2 p-[6px] rounded-full"></div>
                            </div>
                        }
                    </div> */}
                    <span>{dish.name}</span> 
                    <span> - ₹{dish.finalPrice/100 || dish.defaultPrice/100 || dish.price/100}</span>
                </div>
                <div>
                    <span className="text-sm line-clamp-2 hover:line-clamp-none">{dish.description}</span>
                </div>
            </div>
            <div className="w-3/2 max-h-36">
                <button className="font-bold bg-white text-green-900 absolute mx-9 mt-[8.1rem] px-5 border border-1 border-gray-400 rounded-md cursor-pointer" onClick={handleAddItem}>Add</button>
                <img  src={CDN_URL+ dish.imageId} className="w-36 h-36 text-xs rounded-xl border border-gray-200 shadow-md" alt={dish.name}></img>
            </div>
        </div>
    )
}

export default ItemList