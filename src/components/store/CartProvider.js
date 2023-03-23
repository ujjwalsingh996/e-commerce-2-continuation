import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemtoCartHandler = (arr) => {
    setItems((prevItem) => [...prevItem, arr]);
  };
  const removeItemFromCartHandler = (prod) => {
    let updatedItems;

    const newArr = items.filter((item) => item.title !== prod);
    updatedItems = [...newArr];
    setItems(updatedItems);
  };
  const cartContext = {
    items: items,
    addItem: addItemtoCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
