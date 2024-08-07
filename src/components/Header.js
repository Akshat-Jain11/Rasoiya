import {LOGO_IMG_URL} from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login")
    const onlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)

    const cardItems = useSelector((store)=>store.cart.items)

    return (
        <div className="flex flex-row justify-between bg-pink-100 shadow-md">
            <img className="w-40" src={LOGO_IMG_URL} />
            <ul className="flex items-center font-normal">
                <button className="bg-green-200 mr-3 px-2 text-green-900 font-semibold border rounded-md border-black">
                    <Link to="/grocery" >Grocery</Link>
                </button>
                <li className="px-3">Status{onlineStatus? "🟢":"🔴"}</li>
                <li className="px-3"><Link className='text-blue-800 underline' to="/">Home</Link></li>
                <li className="px-3"><Link className='text-blue-800 underline' to="/about">About Us</Link> </li>
                <li className="px-3"><Link className='text-blue-800 underline' to="/contact">Contact</Link></li>
                <li className="px-3 font-bold"><Link to="/cart">Cart({cardItems.length})</Link></li>

                {console.log(cardItems)}

                <button className="bg-slate-200 mr-3 ml-1 px-2 border rounded-md border-black" onClick={ () => {
                        (loginBtn === 'Login') ? (setLoginBtn("Logout")) : (setLoginBtn("Login"))
                    } }
                > {loginBtn}
                </button>
                <li className=" px-3 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    )
}

export default Header;
