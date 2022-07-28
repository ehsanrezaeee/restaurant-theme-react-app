import React, { useContext } from "react";
// import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css"
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CartContext from "../../store/Cart-context";

function Cartbutton(props) {

  const cartCtx = useContext(CartContext)
  const numberOfCartItem = cartCtx.item.reduce(function(curNumber, item){
    return curNumber + item.amount
  }, 0)

return <button className={classes.button} onClick={props.onActive}>
  <span>
  <ShoppingCartCheckoutIcon />
  </span>
  <span>... سبد سفارش </span>
  <span className={classes.badge}>{numberOfCartItem}</span>
</button>
}

export default Cartbutton;