import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, modifyItemCart } from "../../redux/actions/cart";
import StyledCartItems from "./styled.js";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  let total = 0;
  //funcion onclick pa' despachar la action
  const handleOnClick = (e, product) => {
    if (e === "x") {
      dispatch(removeFromCart(product));
    } else {
      let newQuantity = product.quantity;
      if (e === "+" && newQuantity < product.stock) {
        newQuantity++;
      } else {
        if (newQuantity === 1) return;
        newQuantity--;
      }
      let obj = {
        ...product,
        quantity: newQuantity,
      };
      dispatch(modifyItemCart(obj));
    }
  };
  return (
    <>
      <div>
        {console.log(cartItems)}
        {cartItems.length &&
          cartItems.map((e, index) => {
            total = total + e.price * e.quantity;
            return (
              <StyledCartItems key={index}>
                <button
                  className="btn-item-cart"
                  onClick={() => {
                    handleOnClick("x", e._id);
                  }}
                >
                  X
                </button>
                <img
                  className="img-card"
                  src={e.imageUrl}
                  alt="image not found"
                />
                <h2>{e.name}</h2>
                <div className="container-btn">
                  <button
                    className="btn-item-cart"
                    onClick={() => {
                      handleOnClick("-", e);
                    }}
                  >
                    -
                  </button>
                  <h2>{e.quantity}</h2>
                  <button
                    className="btn-item-cart"
                    name="+"
                    onClick={() => {
                      handleOnClick("+", e);
                    }}
                  >
                    +
                  </button>
                  <h2>Stock: {e.stock}</h2>
                </div>
                <h2>$ {e.price}</h2>
                <h2>$ {e.price * e.quantity}</h2>
              </StyledCartItems>
            );
          })}
        {!cartItems.length && <h1>No hay ningún producto en el carrito</h1>}
        <StyledCartItems>
          <div className="total">
            <h2>Total: $ {total}</h2>
          </div>
        </StyledCartItems>
      </div>
    </>
  );
};

export default Cart;
