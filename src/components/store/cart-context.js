import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (item) => {}
})

export default CartContext;