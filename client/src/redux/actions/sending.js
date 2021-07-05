import {
    GET_URL,
    ADD_PRODUCT,
    ADD_CATEGORY,
    DELETE_PRODUCT,
    DELETE_CATEGORY,
    ADD_USER,
    DELETE_USER,
} from "./constant";

export const addProduct = (product) => {
    return async (dispatch) => {
        try {
            await axios.post(`${GET_URL}product`, product);
            return dispatch({ type: ADD_PRODUCT })
        } catch (e) {
            console.log(e)
        }
    };
};

export const addUser = (user) => {
    return async (dispatch) => {
        try {
            await axios.post(`${GET_URL}user`, user);
            return dispatch({ type: ADD_USER })
        } catch (e) {
            console.log(e)
        }
    };
};

export const addCategory = (category) => {
    return async (dispatch) => {
        try {
            await axios.post(`${GET_URL}category`, category);
            return dispatch({ type: ADD_CATEGORY })
        } catch (e) {
            console.log(e)
        }
    };
};

export const deleteProduct = (product) => {
    return async (dispatch) => {
        try {
            await axios.post(`${GET_URL}delete/product`, product);
            return dispatch({ type: DELETE_PRODUCT })
        } catch (e) {
            console.log(e)
        }
    };
};

export const deleteCategory = (category) => {
    return async (dispatch) => {
        try {
            await axios.post(`${GET_URL}delete/category`, category);
            return dispatch({ type: DELETE_CATEGORY })
        } catch (e) {
            console.log(e)
        }
    };
};
export const deleteUser = (user) => {
    return async (dispatch) => {
        try {
            await axios.post(`${GET_URL}delete/user`, user);
            return dispatch({ type: DELETE_USER })
        } catch (e) {
            console.log(e)
        }
    };
};