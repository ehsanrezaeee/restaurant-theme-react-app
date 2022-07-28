import React, { useReducer } from "react";
import CartContext from "./Cart-context";


const defaultCartState = {
  item: [],
  totalamount: 0
}

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEMS') {
    const updatedTotalamount = state.totalamount + action.item.price * action.item.amount;


    const existingcartitemindex = state.item.findIndex(item => item.id === action.item.id);

    const existingcartitem = state.item[existingcartitemindex];
    let updatedItem;
    let updatedItems;
    

    if (existingcartitem) {
      updatedItem = {
        ...existingcartitem,
        amount: existingcartitem.amount + action.item.amount
      };
      updatedItems = [...state.item];
      updatedItems[existingcartitemindex] = updatedItem
    } else {
      updatedItem = { ...action.item }
      updatedItems = state.item.concat(updatedItem);
    }
    
    return {
      item: updatedItems,
      totalamount: updatedTotalamount
    }
  }
  if (action.type === 'REMOVE_ITEMS') {
    const existingcartitemindex = state.item.findIndex(item => item.id === action.id);
    const existingitem = state.item[existingcartitemindex];
    const updatedTotalamount = state.totalamount - existingitem.price;
    let updatedItems;

    if (existingitem.amount === 1) {
      updatedItems = state.item.filter(item => item.id !== action.id)
    } else {
      const updatedItem = { ...existingitem, amount: existingitem.amount -1};
      updatedItems = [...state.item];
      updatedItems[existingcartitemindex] = updatedItem
    }

    return {
      item: updatedItems,
      totalamount: updatedTotalamount
    }

  }
  return defaultCartState
}




function CartProvider(props) {

  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  function addItemtoCartHandler(item) {
    dispatchAction({type: 'ADD_ITEMS', item: item })
  };

  function removeItemFromCartHandler(id) {
    dispatchAction({type: 'REMOVE_ITEMS', id: id})
  };

  const cartcontext = {
    item: cartState.item,
    totalamount: cartState.totalamount,
    add: addItemtoCartHandler,
    remove: removeItemFromCartHandler
  };



  return(
    <CartContext.Provider value={cartcontext}>
    {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;