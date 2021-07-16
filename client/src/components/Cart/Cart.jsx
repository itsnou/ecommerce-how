import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, modifyItemCart } from "../../redux/actions/cart";
import StyledCartItems from "./styled.js";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  let total = 0;
  //funcion onclick pa' despachar la action


  const handleOnClick = (e, product) => {
    if (e === "x") {
      dispatch(removeFromCart(product._id));
      localStorage.removeItem(`${product.name}`)
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
      window.localStorage.setItem(`${product.name}`, JSON.stringify(obj));
    }
  };

  return (
    <>
      <StyledCartItems>
        {cartItems.length ?
          cartItems.map((e, index) => {
            total = total + e.price * e.quantity;
            return (
              <div key={index} className='container-cards_products'>
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
                </div>
                <div className='product-card_price'>
                  <h2>Stock: <span>{e.stock}</span></h2>
                  <h2>$ {e.price * e.quantity}</h2>
                </div>
                <div className='btn-delete'>
                  <button
                    className="btn-item-delete"
                    onClick={() => {
                      handleOnClick("x", e);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          }):
            <h1>No hay ningún producto en el carrito</h1>
          }
          <hr/>
        <div className='cart-total'>
          <div className="total">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <h2>Total: $ {total}</h2>
              </Grid>
              <Grid item xs={6}>
              { window.sessionStorage.userLog === 'on' ? 
                <Link to='/checkout'>
                 <Button variant="contained">COMPRAR!</Button>
                </Link>
                : null
              }
              </Grid>
            </Grid>
          </div>
        </div>
      </StyledCartItems>
    </>
  );
};

export default Cart;
