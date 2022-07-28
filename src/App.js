import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';

function App() {
  const [cartisShown, setCartisShown] = useState(false);

  function Showncarthandler() {
    setCartisShown(true)
  }

  function hideCartHandler() {
    setCartisShown(false)
  }



  return (
    <CartProvider>
      {cartisShown && <Cart onClose={hideCartHandler}/>}
      <Header ONAC={Showncarthandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
