import React, { createContext, useContext, useEffect, useReducer } from "react";
import { decodeToken, isTokenValid } from "../../utils/jwt";
import { authReducer, initialState } from "./authReducer";
import { UserAuthenticate } from "./actionsCreators";

const authContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token && isTokenValid(token)) {
      const user = decodeToken(token);
      dispatch(UserAuthenticate(user));
    }
  }, [dispatch]);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (context) {
    return context;
  }
  throw new Error("Auth Context error");
};

export default AuthContextProvider;
