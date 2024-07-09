import {LOGO_IMG_URL} from '../utils/constants';
import { useState } from 'react';

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className="header">
            <img className="logo" src={LOGO_IMG_URL} />
            <ul className="header-options">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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