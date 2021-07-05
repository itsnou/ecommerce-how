import axios from 'axios';
import {
    FILTRED_FOR_PRICE_HIGH_TO_LOW,
    FILTRED_FOR_PRICE_LOW_TO_HIGH,
    FILTRED_FOR_RATING_HIGH_TO_LOW,
    FILTRED_FOR_RATING_LOW_TO_HIGH,
    GET_URL
} from "./constant";


export const filtredForRatingLowToHigh= () =>{
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const products = await axios.get(`${GET_URL}rating-low-to-high`);
            return dispatch({ type: FILTRED_FOR_RATING_LOW_TO_HIGH, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: FILTRED_FOR_RATING_LOW_TO_HIGH, payload: []});
        }
    };
};

export const filtredForRatingHightoLow= () =>{
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const products = await axios.get(`${GET_URL}rating-high-to-low`);
            return dispatch({ type: FILTRED_FOR_RATING_HIGH_TO_LOW, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: FILTRED_FOR_RATING_HIGH_TO_LOW, payload: []});
        }
    };
};

export const filtredForPriceLowToHigh= () =>{
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const products = await axios.get(`${GET_URL}price-low-to-high`);
            return dispatch({ type: FILTRED_FOR_PRICE_LOW_TO_HIGH, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: FILTRED_FOR_PRICE_LOW_TO_HIGH, payload: [] });
        }
    };
};

export const filtredForPriceHightoLow= () =>{
    return async (dispatch) => {
        dispatch({type: LOADING});
        try {
            const products = await axios.get(`${GET_URL}price-high-to-high`);
            return dispatch({ type: FILTRED_FOR_PRICE_HIGH_TO_LOW, payload: products.data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: FILTRED_FOR_PRICE_HIGH_TO_LOW, payload: [] });
        }
    };
};

