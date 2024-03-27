import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'
const NavBar = ({ cartItems }) => {
    return (
        <nav className="navbar">
            <h3>Ecommerce</h3>
            <CartWidget cartItems={cartItems} />
        </nav>
    );
};

export default NavBar;

