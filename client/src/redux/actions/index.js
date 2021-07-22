import {
    filtredForPriceHightoLow,
    filtredForPriceLowToHigh,
    filtredForRatingHightoLow,
    filtredForRatingLowToHigh,
    filtredByAtoZ,
    filtredByZtoA,
    userFiltered
} from "./filtrer";
import {
    getProductsAll,
    getProductsForCategory,
    getProductsByName,
    getProductsByBarcode,
    getUsers,
    getUserDetail,
    getOrders,
    getOrderDetail,
    getProductDetail,
    getOrderForStatus,
    getOrderForUser
} from "./request";
import {
    addCategory,
    addProduct,
    addUser,
    deleteCategory,
    deleteProduct,
    deleteUser,
    editUserStatus,
    forceReset
} from "./sending";

import { RESET, LOG_OFF } from "./constant";

export const reset = (prop) => {
    return {
        type: RESET,
        payload: prop,
    };
};
export const logOff = (payload)=>{
    return {
        type:LOG_OFF,
        payload:payload
    }
}
export {
    filtredForPriceHightoLow,
    filtredForPriceLowToHigh,
    filtredForRatingHightoLow,
    filtredForRatingLowToHigh,
    filtredByAtoZ,
    filtredByZtoA,
    userFiltered,
    getUsers,
    getOrders,
    getOrderDetail,
    getOrderForStatus,
    getOrderForUser,
    getUserDetail,
    getProductsAll,
    getProductDetail,
    getProductsForCategory,
    getProductsByName,
    getProductsByBarcode,
    addCategory,
    addProduct,
    addUser,
    deleteCategory,
    deleteProduct,
    deleteUser,
    editUserStatus,
    forceReset
};
