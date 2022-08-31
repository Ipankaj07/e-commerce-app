import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_CART,
  DELETE_CART,
} from "../../constant/productActionType";

import axios from "axios";

const uri = `${process.env.REACT_APP_BASE_URL}`;

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

const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

const deleteCart = (product) => {
  return {
    type: DELETE_CART,
    payload: product,
  };
};

export const getProduct = () => {
  return (dispatch) => {
    dispatch(getProductLoading());
    axios
      .get(uri + "/products")
      .then((res) => {
        dispatch(getProductSuccess(res.data.product));
      })
      .catch((err) => {
        dispatch(getProductFailure(err));
      });
  };
};

export const addCartProduct = (productId) => {
  return (dispatch) => {
    dispatch(addCart(productId));
  };
};

export const deleteCartProduct = (productId) => {
  return (dispatch) => {
    dispatch(deleteCart(productId));
  };
};
