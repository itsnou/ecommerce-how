import {
  ADD_CATEGORY,
  ADD_PRODUCT,
  ADD_USER,
  DELETE_CATEGORY,
  DELETE_PRODUCT,
  DELETE_USER,
  FILTRED_FOR_PRICE_HIGH_TO_LOW,
  FILTRED_FOR_PRICE_LOW_TO_HIGH,
  FILTRED_FOR_RATING_HIGH_TO_LOW,
  FILTRED_FOR_RATING_LOW_TO_HIGH,
  GET_ORDERS,
  GET_ORDER_DETAIL,
  GET_PRODUCTS_ALL,
  GET_PRODUCTS_FOR_CATEGORY,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCT_DETAIL,
  GET_USERS,
  GET_USER_DETAIL,
  LOADING,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  MODIFY_ITEM_CART,
  RESET,
  FILTER_STATE,
  GET_VARIETALS,
  FILTRED_FOR_CATEGORY,
  LOAD_PROFILE,
  LOG_IN,
  EDIT_USER_STATUS,
} from "../actions/constant";

import { addToCart } from "../../utils/addToCart";
import { modifyItemInCart } from "../../utils/modifyItemInCart";
import { filterWines, filterOnOff } from "../../utils/methods";

const initialState = {
  products: [],
  productDetail: {},
  users: [],
  userDetail:{},
  orders: [],
  cart: [],
  search: [],
  loading: false,
  productsFilter: [],
  varietals: [],
  filter: "off",
  user: [],
  created: "",
  loged: "off",
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS_ALL:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: payload,
        loading: false,
      };
    case GET_PRODUCTS_BY_NAME:
      let searching;
      if (payload.length > 0) {
        searching = payload;
      } else {
        searching = ["No hay productos"];
      }
      return {
        ...state,
        search: searching,
        loading: false,
      };
    case GET_PRODUCTS_FOR_CATEGORY:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: payload,
        loading: false,
      };
    case GET_ORDER_DETAIL:
      return {
        ...state,
        orders: [payload],
        loading: false,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case LOAD_PROFILE:
      return {
        ...state,
        user: [payload.user],
        loged: payload.log,
      };
    case LOG_IN:
      return {
        ...state,
        loged: payload,
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        userDetail:{}
      };
    case FILTRED_FOR_PRICE_LOW_TO_HIGH:
      return {
        ...state,
        products: payload,
      };
    case FILTRED_FOR_PRICE_HIGH_TO_LOW:
      return {
        ...state,
        products: payload,
      };
    case FILTRED_FOR_RATING_LOW_TO_HIGH:
      return {
        ...state,
        products: payload,
      };
    case FILTRED_FOR_RATING_HIGH_TO_LOW:
      return {
        ...state,
        products: payload,
      };
    case ADD_USER:
      return {
        ...state,
        created: payload,
      };
    case ADD_CATEGORY:
      return state;
    case ADD_PRODUCT:
      return state;
    case DELETE_USER:
      return state;
    case DELETE_CATEGORY:
      return state;
    case DELETE_PRODUCT:
      return state;
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: addToCart(payload, state.cart),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((e) => e._id !== payload),
      };
    case MODIFY_ITEM_CART:
      return {
        ...state,
        cart: modifyItemInCart(payload, state.cart),
      };
    case RESET:
      return {
        ...state,
        [payload]: [],
      };
    case FILTRED_FOR_CATEGORY:
      let filtered;
      if (state.search.length) {
        filtered = state.search;
      } else {
        filtered = state.products;
      }
      return {
        ...state,
        productsFilter: filterWines(payload, filtered),
      };
    case GET_VARIETALS:
      return {
        ...state,
        varietals: payload,
        loading: false,
      };
    case FILTER_STATE:
      return {
        ...state,
        filter: filterOnOff(payload),
      };
      case EDIT_USER_STATUS:
        return state;
    default:
      return state;
  }
};

export default reducer;
