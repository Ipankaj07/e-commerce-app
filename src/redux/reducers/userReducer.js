import { SIGNUP, LOGIN_USER } from "../../constant/userActionType";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    default:
      return state;
  }
};

export default userReducer;
