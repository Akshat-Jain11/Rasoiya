import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return(
        <div className="p-4 m-4 text-center">
            <h1 className="text-3xl font-bold">Cart</h1>
            <button className="p-2 m-2 bg-black text-white hover:bg-white hover:text-black border hover:border-black rounded-xl" onClick={handleClearCart}>Clear Cart</button>
            <div className="flex justify-center pt-4">
                <div className="bg-gray-100 hover:bg-grey-200 w-6/12 text-left ">
                    {cartItems.map ( (itemData) => <ItemList dish={itemData} /> )}
                </div>
            </div>
            {cartItems.length === 0 && <h1 className="text-lg">Cart is empty!! Please add items</h1>}
        </div>
    )
}

export default Cart