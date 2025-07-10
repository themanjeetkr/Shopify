import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.webp';
import cart from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    const [menu, setMenu] = useState('home');

    return (
        <div className="nav-bar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" height="50px" />
                <p>shopify</p>
            </div>

            <ul className="nav-menu">
                <li onClick={() => setMenu('home')}>
                    <Link style={{textDecoration:"none"}} to="/">Home</Link> {menu === 'home' && <hr />}
                </li>
                <li onClick={() => setMenu('mens')}>
                    <Link  style={{textDecoration:"none"}} to="/mens">Men</Link> {menu === 'mens'}
                </li>
                <li onClick={() => setMenu('women')}>
                    <Link style={{textDecoration:"none"}} to="/women">Women</Link> {menu === 'women' && <hr />}
                </li>
                <li onClick={() => setMenu('kids')}>
                    <Link style={{textDecoration:"none"}} to="/kids">Kids</Link> {menu === 'kids' && <hr />}
                </li>
            </ul>

            <div className="nav-login-cart">
               <Link to="/login"><button>Login</button></Link>
               <Link to="/cart"><img src={cart} alt="Cart" height="50px" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
