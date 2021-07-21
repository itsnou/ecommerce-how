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
    editUserStatus
} from "./sending";
import { RESET } from "./constant";

export const reset = (prop) => {
    return {
        type: RESET,
        payload: prop,
    };
};

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
    addCategory,
    addProduct,
    addUser,
    deleteCategory,
    deleteProduct,
    deleteUser,
    editUserStatus
};
