import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../constant/userActionType";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default userReducer;
