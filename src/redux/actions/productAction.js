import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_CART,
  DELETE_CART,
} from "../../constant/productActionType";

import axios from "axios";

const uri = "https://firstcry-dbs.herokuapp.com/";

const getProductLoading = () => {
  return {
    type: GET_PRODUCT_LOADING,
  };
};

const getProductSuccess = (product) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: product,
  };
};

const getProductFailure = (error) => {
  return {
    type: GET_PRODUCT_FAILURE,
    payload: error,
  };
};

const addCart = (productId, userId) => {
  return {
    type: ADD_CART,
    payload: { productId, userId },
  };
};

const deleteCart = (productId, userId) => {
  return {
    type: DELETE_CART,
    payload: { productId, userId },
  };
};

export const getProduct = () => {
  return (dispatch) => {
    dispatch(getProductLoading());
    axios
      .get(uri)
      .then((res) => {
        dispatch(getProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProductFailure(err));
      });
  };
};

/* 
POST /user/cart/add
productId,
userId
*/
export const addCartProduct = (productId, userId) => {
  return (dispatch) => {
    axios
      .post(uri + "user/cart/add", { productId, userId })
      .then((res) => {
        dispatch(addCart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

/* 
PATCH /user/cart/remove
productId,
userId
*/

export const deleteCartProduct = (productId, userId) => {
  return (dispatch) => {
    axios
      .patch(uri + "users/cart/remove", { productId, userId })
      .then((res) => {
        dispatch(deleteCart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
