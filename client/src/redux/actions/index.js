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
} from "./sending";
import { RESET } from "./constant";

export const reset = (props) => {
    return {
        type: RESET,
        payload: props,
    };
};

export {
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
};
