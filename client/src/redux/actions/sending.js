import axios from "axios";
import {
  GET_URL,
  ADD_PRODUCT,
  ADD_CATEGORY,
  DELETE_PRODUCT,
  DELETE_CATEGORY,
  ADD_USER,
  DELETE_USER,
  LOG_IN,
  EDIT_USER_STATUS,
  MODIFY_PRODUCT,
} from "./constant";

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      await axios.post(`${GET_URL}product`, product);
      return dispatch({ type: ADD_PRODUCT });
    } catch (e) {
      console.log(e);
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    let apiRes;
    try {
      apiRes = await axios.post(`${GET_URL}users/signup`, user);
      dispatch({ type: ADD_USER, payload: apiRes.data.message });
    } catch (err) {
      apiRes = err.response.data.message;
      dispatch({ type: ADD_USER, payload: apiRes });
    }
  };
};

export const addCategory = (category) => {
  return async (dispatch) => {
    try {
      await axios.post(`${GET_URL}category`, category);
      return dispatch({ type: ADD_CATEGORY });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteProduct = (product) => {
  return async (dispatch) => {
    try {
      await axios.post(`${GET_URL}delete/product`, product);
      return dispatch({ type: DELETE_PRODUCT });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteCategory = (category) => {
  return async (dispatch) => {
    try {
      await axios.post(`${GET_URL}delete/category`, category);
      return dispatch({ type: DELETE_CATEGORY });
    } catch (e) {
      console.log(e);
    }
  };
};
export const deleteUser = (user) => {
  return async (dispatch) => {
    try {
      await axios.post(`${GET_URL}delete/users`, user);
      return dispatch({ type: DELETE_USER });
    } catch (e) {
      console.log(e);
    }
  };
};

export const logIn = (user) => {
  return async (dispatch) => {
    let apiRes;
    try {
      apiRes = await axios.post(`${GET_URL}users/login`, user);
      console.log(apiRes.data);
      window.sessionStorage.setItem("token", apiRes.data.token);
      window.sessionStorage.setItem("userLog", "on");
      if (apiRes.data.admin) window.sessionStorage.setItem("admin", "on");
      dispatch({ type: LOG_IN, payload: apiRes.data.message });
    } catch (err) {
      apiRes = err.response.data.message;
      dispatch({ type: LOG_IN, payload: "off" });
    }
  };
};

export const editUserStatus = (userEmail) => {
  return async (dispatch) => {
    try {
      const change = axios.put(
        `${GET_URL}users/upgradeuser`,
        { userEmail: userEmail },
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
      dispatch({ type: EDIT_USER_STATUS });
    } catch (e) {
      console.log(e);
    }
  };
};

export const editProduct = (data) => {
  return async (dispatch) => {
    try {
      const change = await axios.put(`${GET_URL}products/modify`, data, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      dispatch({ type: MODIFY_PRODUCT , payload: true});
    } catch (e) {
      console.log(e);
    }
  };
};
