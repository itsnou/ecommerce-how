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
  EDIT_ORDER_STATUS,
  MODIFY_PRODUCT,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./constant";

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      await axios.post(`${GET_URL}products`, product, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
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
      dispatch({
        type: ADD_USER,
        payload: { created: apiRes.data.message, confirm: true },
      });
    } catch (err) {
      apiRes = err.response.data.message;
      dispatch({
        type: ADD_USER,
        payload: { created: apiRes, confirm: false },
      });
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
      axios.put(
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

export const editOrderStatus = (id, state, clientEmail) => {
  return async (dispatch) => {
    try {
      axios.put(
        `${GET_URL}orders/modify`,
        { id, state },
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
      if (state === "Enviado") {
        const sendEmail = await axios.post(
          `${GET_URL}sendMail/orderstatus`,
          { id, clientEmail },
          {
            headers: {
              authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
      }
      dispatch({ type: EDIT_ORDER_STATUS });
    } catch (e) {
      console.log(e);
    }
  };
};

export const editProduct = (data) => {
  return async (dispatch) => {
    try {
      await axios.put(`${GET_URL}products/modify`, data, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      dispatch({ type: MODIFY_PRODUCT, payload: true });
    } catch (e) {
      console.log(e);
    }
  };
};

export const blockUser = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      await axios.put(
        `${GET_URL}users/blockuser`,
        { id: id },
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const addToWishlist = (data) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `${GET_URL}users/addwishlist`,
        { productId: data.id },
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const removeFromWishlist = (data) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `${GET_URL}users/removewishlist`,
        { productId: data.id },
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const checkOut = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${GET_URL}stripe/checkout`,
        {
          id: data.id,
          amount: Math.ceil(data.payment.totalAmount * 0.0104 * 100),
        },
        {
          headers: {
            authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
      if (response.data.message === "Sucessfull payment") {
        const newInvoice = await axios.post(
          `${GET_URL}invoices`,
          {
            items: data.payment.items,
            totalAmount: data.payment.totalAmount,
          },
          {
            headers: {
              authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        const newOrder = await axios.post(
          `${GET_URL}orders`,
          { invoice: newInvoice.data },
          {
            headers: {
              authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        await axios.put(
          `${GET_URL}users/addorder`,
          { orderId: newOrder.data },
          {
            headers: {
              authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        await axios.put(
          `${GET_URL}invoices`,
          { items: data.payment.items },
          {
            headers: {
              authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        const sendEmail = await axios.post(
          `${GET_URL}sendMail/confirmation`,
          { totalAmount: data.payment.totalAmount },
          {
            headers: {
              authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const addReview = (data) => {
  return async (dispatch) => {
    const newReview = await axios.put(
      `${GET_URL}products/addreview`,
      { content: data.content, id: data.id, calification: data.calification },
      {
        headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
      }
    );
  };
};
