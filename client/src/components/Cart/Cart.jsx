import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Cart = () => {
  const dispatch = useDispatch();
  var cartItems = useSelector((store) => store.cart);
  //funcion onclick pa' despachar la action 
  return (
    <div>
      {cartItems.length && 
        cartItems.map((e, index) => {
          return (
            <div key={index}>
            <button onClick={}>X</button>
              <h2>{e.name}</h2>
              <img src={e.image} alt="image not found" />
              <button onClick={}>-</button>
              <h2>{e.quantity}</h2>
              <button onClick={}>+</button>
              <h2>{e.price}</h2>
            </div>
          );
        })}
    </div>
  );
};
