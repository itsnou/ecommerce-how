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