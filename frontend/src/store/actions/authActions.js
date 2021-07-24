import axios from "axios";
import { setHeaders, url } from "../../api";
import { toast } from "react-toastify";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/register`, user)
      .then((payload) => {
        localStorage.setItem("auth_data", JSON.stringify(payload.data));

        dispatch({
          type: "SIGN_UP",
          data: payload.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (identification, password) => {
  return (dispatch) => {
    axios
      .post(`${url}/login`, { identification, password })
      .then((payload) => {
        localStorage.setItem("auth_data", JSON.stringify(payload.data));
        dispatch({
          type: "SIGN_IN",
          data: payload.data,
        });

      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    axios
      .post(`${url}/logout`, {}, setHeaders())
      .then(() => {
        dispatch({
          type: "CLEAR_TODOS",
        });
        
        dispatch({
          type: "SIGN_OUT",
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        data: token,
      });
    }
  };
};
