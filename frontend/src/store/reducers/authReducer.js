import { toast } from "react-toastify";

const initialState = {
  token: JSON.parse(localStorage.getItem("auth_data")),
  name: null,
  identification: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
    case "USER_LOADED":

      toast("Bienvenido...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      }); 

      const user = action.data.user;
      return {
        ...initialState,
        token: action.data,
        name: user.name,
        identification: user.identification,
        _id: user.id,
      };

    case "SIGN_OUT":
      localStorage.removeItem("auth_data");
      toast("Hasta pronto...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return {
        token: null,
        name: null,
        identification: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
