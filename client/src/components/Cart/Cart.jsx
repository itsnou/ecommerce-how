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
        {cartItems.length ?
          cartItems.map((e, index) => {
            total = total + e.price * e.quantity;
            return (
              <StyledCartItems key={index}>
                <div className='container-img_card'>
                  <img className="img-card" src={e.imageUrl} alt="image not found"/>
                </div>
                <div className='container-title'>
                  <h2>{e.name}</h2>
                </div>
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
                  <h2>Stock <span>{e.stock}</span></h2>
                </div>
                <div className='product-card_price'>
                  <h2>$ {e.price * e.quantity}</h2>
                </div>
                <button
                  className="btn-item-cart"
                  onClick={() => {
                    handleOnClick("x", e._id);
                  }}
                >
                  X
                </button>
              </StyledCartItems>
            );
          }):
            <h1>No hay ningún producto en el carrito</h1>
          }
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
