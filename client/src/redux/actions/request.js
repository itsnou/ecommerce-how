import axios from 'axios';
import {
    GET_ORDERS,
    GET_ORDER_DETAIL,
    GET_PRODUCTS_ALL,
    GET_PRODUCTS_FOR_CATEGORY,
    GET_PRODUCTS_FOR_NAME,
    GET_PRODUCT_DETAIL,
    GET_URL,
    GET_USERS,
    GET_USER_DETAIL,
    LOADING
} from './constant';

export const getProductsAll = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const products = await axios.get(`${GET_URL}`);
            return dispatch({ type: GET_PRODUCTS_ALL, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_PRODUCTS_ALL, payload: [] })
        }
    };
};

export const getProductsForName = (name) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const products = await axios.get(`${GET_URL}products?name=${name}`);
            return dispatch({ type: GET_PRODUCTS_FOR_NAME, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_PRODUCTS_FOR_NAME, payload: [] })
        }
    };
};

export const getProductsForCategory = (category) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const products = await axios.get(`${GET_URL}products?category=${category}`);
            return dispatch({ type: GET_PRODUCTS_FOR_CATEGORY, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_PRODUCTS_FOR_CATEGORY, payload: [] })
        }
    };
};

export const getProductDetail = (id) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const products = await axios.get(`${GET_URL}${id}`);
            return dispatch({ type: GET_PRODUCT_DETAIL, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_PRODUCT_DETAIL, payload: [] })
        }
    };
};

export const getUsers = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const products = await axios.get(`${GET_URL}user`);
            return dispatch({ type: GET_USERS, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_USERS, payload: [] })
        }
    };
};

export const getUserDetail = (id) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const products = await axios.get(`${GET_URL}user/${id}`);
            return dispatch({ type: GET_USER_DETAIL, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_USER_DETAIL, payload: [] })
        }
    };
};

export const getOrders = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const products = await axios.get(`${GET_URL}order`);
            return dispatch({ type: GET_ORDERS, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_ORDERS, payload: [] })
        }
    };
};

export const getOrderDetail = (id) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const products = await axios.get(`${GET_URL}order/${id}`);
            return dispatch({ type: GET_ORDER_DETAIL, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_ORDER_DETAIL, payload: [] })
        }
    };
};

