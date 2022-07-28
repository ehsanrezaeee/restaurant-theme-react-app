import React from "react";
import { useRef } from 'react';
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css"


function MealItemForm(props) {

  const amountInputRef = useRef();


  function handleSubmit(event) {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddToCart(enteredAmountNumber);
  }

  return(
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input label="مقدار" 
      ref={amountInputRef}
      input={{
        id: 'مقدار__' + props.id,
        type: 'number',
        min: '1',
        max: '10',
        step: '1',
        defaultValue: '1'
      }} />
      <button> + اضافه کردن</button>
    </form>
  )
}

export default MealItemForm;