import React, { useContext } from "react";

import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  
  const total = `هزار تومان ${cartCtx.totalamount.toFixed(2)}`;
  const hasItem = cartCtx.item.length > 0;

  const cartItemremoveHandler = (id) => {
    cartCtx.remove(id)
  };
  const cartitemAddHandler = (item) => {
    cartCtx.add({...item, amount: 1})
  };

    const CartItems = <ul className={classes['cart-items']}>{cartCtx.item.map(function(item){
      return <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemremoveHandler.bind(null, item.id)}
      onAdd={cartitemAddHandler.bind(null, item)}

      />
    })}</ul>


  return(
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>کل هزینه</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>بستن</button>
        {hasItem && <button className={classes.button}>سفارش</button>}
      </div>
    </Modal>

  )

}

export default Cart;