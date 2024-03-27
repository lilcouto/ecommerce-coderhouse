import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cartItems }) => {
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-widget">
            <FaShoppingCart />
            <span>{cartItemCount}</span>
        </div>
    );
};

export default CartWidget;

