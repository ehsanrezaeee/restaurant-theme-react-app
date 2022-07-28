import React from "react";

import meal from "../../assets/meals.jpg"
import classes from "../Layout/Header.module.css"
import Cartbutton from "./HeaderCartButton";
import RestaurantIcon from '@mui/icons-material/Restaurant';

function Header(props) {


  return <React.Fragment>
  <header className={classes.header}>
    <h1><RestaurantIcon />   رستوران رضایی</h1>
    <Cartbutton onActive={props.ONAC}/>
  </header>
  <div className={classes['main-image']}>
    <img src={meal} alt="شیشلیک رضایی"/>
  </div>

  </React.Fragment>
}

export default Header;