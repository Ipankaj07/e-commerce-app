import { SIGNUP, LOGIN_USER } from "../../constant/userActionType";

import axios from "axios";

let uri = "https://firstcry-dbs.herokuapp.com";

const signup = (user) => {
  return {
    type: SIGNUP,
    payload: user,
  };
};

const login = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const signupUser = (user) => {
  return (dispatch) => {
    axios
      .post(uri + "/users/signup", user)
      .then((res) => {
        let user = res.data.user;
        dispatch(signup(user));
        localStorage.setItem("userId", JSON.stringify(user._id));
        localStorage.setItem(
          "userName",
          JSON.stringify(user.firstName + " " + user.lastName)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
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
        console.log(err);
      });
  };
};
