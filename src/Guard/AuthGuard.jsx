import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authContext/AuthContextProvider";
import my_routes from "../constants/pages";
import YouarenotAuthentificated from "../components/YouarenotAuthentificated/YouarenotAuthentificated";
const AuthGuard = ({ children }) => {
  const {
    state: { isUserLoggedIn },
  } = useAuthContext();
  return (
    <>
      {isUserLoggedIn ? (
        children
      ) : (
        <div>
          <YouarenotAuthentificated />
          <Link to={my_routes.SIGN_IN}> Sign in </Link>
        </div>
      )}
    </>
  );
};

export default AuthGuard;
