import {
    filtredForPriceHightoLow,
    filtredForPriceLowToHigh,
    filtredForRatingHightoLow,
    filtredForRatingLowToHigh
} from './filtrer';
import {
    getProductsAll,
    getProductsForCategory,
    getProductsForName,
    getUsers,
    getUserDetail,
    getOrders,
    getProductDetail,
    getOrderDetail
} from './request';
import {
    addCategory,
    addProduct,
    addUser,
    deleteCategory,
    deleteProduct,
    deleteUser
} from './sending'

export {
    filtredForPriceHightoLow,
    filtredForPriceLowToHigh,
    filtredForRatingHightoLow,
    filtredForRatingLowToHigh,
    getOrderDetail,
    getUsers,
    getOrders,
    getUserDetail,
    getProductsAll,
    getProductDetail,
    getProductsForCategory,
    getProductsForName,
    addCategory,
    addProduct,
    addUser,
    deleteCategory,
    deleteProduct,
    deleteUser
};