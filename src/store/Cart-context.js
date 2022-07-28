import React from "react";

const CartContext = React.createContext({
    item: [],
    totalamount: 0,
    add: (item) => {},
    remove: (id) => {}
  }
)

export default CartContext;