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
    GET_PRODUCTS_FOR_NAME,
    GET_PRODUCT_DETAIL,
    GET_USERS,
    GET_USER_DETAIL,
    LOADING
} from '../actions/constant'
const initialState = {
    products: [],
    users: [],
    orders: [],
    loading: false
}

const reducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case GET_PRODUCTS_ALL:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                // como voy a recibir solo un porducto (que seguramente sea un objeto) lo encierro en un array
                products: [payload],
                loading: false
            }
        case GET_PRODUCTS_FOR_NAME:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case GET_PRODUCTS_FOR_CATEGORY:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case GET_ORDERS:
            return {
                ...state,
                orders: payload,
                loading: false
            };
        case GET_ORDER_DETAIL:
            return {
                ...state,
                orders: [payload],
                loading: false
            };
        case GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            };
        case GET_USER_DETAIL:
            return {
                ...state,
                orders: [payload],
                loading: false
            };
        case FILTRED_FOR_PRICE_LOW_TO_HIGH:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case FILTRED_FOR_PRICE_HIGH_TO_LOW:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case FILTRED_FOR_RATING_LOW_TO_HIGH:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case FILTRED_FOR_RATING_HIGH_TO_LOW:
            return {
                ...state,
                products: payload,
                loading: false
            };
        case ADD_USER:
            return state;
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
                loading: true
            };
        default:
            return state;
    };
};

export default reducer;