import { decodeToken, toggleLocalStorage } from "../../utils/jwt";
import my_actions from "./actions";

export const initialState = {
  isUserLoggedIn: false,
  user: null,
};

export const authReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case my_actions.userLogIn: {
      toggleLocalStorage(payload.token);
      const user = decodeToken(payload.token);

      return { ...state, isUserLoggedIn: true, user };
    }
    case my_actions.userLogOut: {
      toggleLocalStorage();
      return { ...state, isUserLoggedIn: false, user: null };
    }
    case my_actions.userAuthenticate: {
      return { ...state, isUserLoggedIn: true, user: payload };
    }
    default:
      break;
  }
};
