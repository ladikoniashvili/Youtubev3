import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import my_pages from "../../constants/pages";
import { useAuthContext } from "../../context/authContext/AuthContextProvider";
import actions from "../../context/authContext/actions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Dropdownmenu = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAuthContext();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const handleClick = () => {
    if (state.isUserLoggedIn) {
      dispatch({ type: actions.userLogOut });
      navigate(my_pages.HOME_PAGE);
    } else {
      navigate(my_pages.SIGN_IN);
    }
  };

  return isMobile ? (
    <Button
      className="flex items-center cursor-pointer"
      onClick={handleClick}
      style={{
        width: "40px",
        height: "40px",
        position: "fixed",
        top: "10px",
        right: "40px",
      }}
    >
      <MoreVertIcon sx={{ fontSize: "28px" }} />
    </Button>
  ) : (
    <Button
      onClick={handleClick}
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        border: "1px solid #ffffff",
        width: "90px",
      }}
    >
      {state.isUserLoggedIn ? "Log Out" : "Sign In"}
    </Button>
  );
};

export default Dropdownmenu;
