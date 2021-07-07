import { ADD_TO_CART, REMOVE_FROM_CART, MODIFY_ITEM_CART } from "./constant.js";

export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const removeFromCart = (payload) => {
  return { type: REMOVE_FROM_CART, payload };
};

export const modifyItemCart = (payload) => {
  return { type: MODIFY_ITEM_CART, payload };
};
