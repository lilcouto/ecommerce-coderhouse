import React, { useState } from "react";
import ItemCount from "./ItemCount";

const CartWidget = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (count) => {
    setCartItems((prevItems) => prevItems + count); 
  };

  return (
    <div className="cart-widget">
      <span>Carrinho: {cartItems}</span>
      <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
    </div>
  );
};

export default CartWidget;
