import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  ADD_CART,
  DELETE_CART,
} from "../../constant/productActionType";

const initialState = {
  product: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default productReducer;
