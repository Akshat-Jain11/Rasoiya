import {LOGO_IMG_URL} from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className="header">
            <img className="logo" src={LOGO_IMG_URL} />
            <ul className="header-options">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About Us</Link> </li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <button className='loginButton' onClick={ () => {
                        (loginBtn === 'Login') ? (setLoginBtn("Logout")) : (setLoginBtn("Login"))
                    } }
                > {loginBtn}
                </button>
            </ul>
        </div>
    )
}

export default Header;
