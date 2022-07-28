import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/Cart-context";






function MealItem(props) {
  const cartCtx = useContext(CartContext)

  const price = `هزار تومان ${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.add({
      id: props.id,
      name: props.ItemName,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div><img src={props.img1} className={classes.img} alt='غذاها'/></div>
      <div>
      <h3>{props.ItemName}</h3>
      <div className={classes.description}>{props.ItemDescription}</div>
      <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}

export default MealItem;