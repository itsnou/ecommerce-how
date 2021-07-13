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
    getProductDetail,
    getOrderDetail,
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

export const reset = (props) => {
    return {
        type: RESET,
        payload: props,
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
    getOrderDetail,
    getUsers,
    getOrders,
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
