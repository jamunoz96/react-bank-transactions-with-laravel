import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getPersonalAccounts = () => {
  return (dispatch) => {
    axios
      .get(`${url}/user/personal/accounts`, setHeaders())
      .then((payload) => {
        const data = payload.data;
        dispatch({
          type: "SET_DATA",
          data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getThirAccounts = () => {
  return (dispatch) => {
    axios
      .get(`${url}/user/third/accounts`, setHeaders())
      .then((payload) => {
        const data = payload.data;
        dispatch({
          type: "SET_DATA",
          data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const getAllTransactionsAccount = () => {
  return (dispatch) => {
    axios
      .get(`${url}/user/get/transaction/account`, setHeaders())
      .then((payload) => {
        const data = payload.data;
        dispatch({
          type: "SET_DATA",
          data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const saveTransaction = (origin, destine, value) => {
    return axios
      .post(`${url}/user/save/transaction`, { origin, destine, value }, setHeaders())
      .then((payload) => {
        return payload.data;
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
};

