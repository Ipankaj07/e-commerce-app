import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../constant/userActionType";

import axios from "axios";

const uri = `${process.env.REACT_APP_BASE_URL}`;

const signupLoading = () => {
  return {
    type: SIGNUP_LOADING,
  };
};

const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};

const signup = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: user,
  };
};

const login = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const signupUser = (user) => {
  return (dispatch) => {
    dispatch(signupLoading());
    axios
      .post(uri + "/users/signup", user)
      .then((res) => {
        let user = res.data.user;
        dispatch(signup(user));
        localStorage.setItem("userId", JSON.stringify(user._id));
        localStorage.setItem(
          "user",
          JSON.stringify(user.firstName + " " + user.lastName)
        );
      })
      .catch((err) => {
        dispatch(signupFailure(err));
      });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch(loginLoading());
    axios
      .post(uri + "/users/login", user)
      .then((res) => {
        let user = res.data.user;
        dispatch(login(user));
        localStorage.setItem("userId", JSON.stringify(user._id));
        localStorage.setItem(
          "user",
          JSON.stringify(user.firstName + " " + user.lastName)
        );
      })
      .catch((err) => {
        dispatch(loginFailure(err));
      });
  };
};
