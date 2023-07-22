import React, { useState } from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import validationSchema from "../../validationSchema/validationSchema";
import my_pages from "../../constants/pages";
import { signInUser } from "../../utils/auth";
import { UserLogIn } from "../../context/authContext/actionsCreators";
import { useAuthContext } from "../../context/authContext/AuthContextProvider";

const Signinform = () => {
  const { dispatch } = useAuthContext();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signInUser(values)
        .then((token) => {
          dispatch(UserLogIn(token));
          setShowSuccessAlert(true);
          navigate(my_pages.HOME_PAGE);
        })
        .catch((error) => {
          if (error) {
            navigate(my_pages.ERROR);
          } else {
            navigate(my_pages.HOME_PAGE);
          }
        });
    },
  });
  const handleClick = () => {
    navigate(my_pages.REGISTER);
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "5px 10px",
        width: "500px",
        height: "500px",
        color: "#ffffff",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          style={{
            margin: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "15px 15px 15px 15px #ffffff",
          }}
          id="userName"
          name="userName"
          type="text"
          label="userName"
          autoComplete="off"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={
            formik.touched.userName && formik.errors.userName
              ? formik.errors.userName
              : ""
          }
        ></TextField>
        <TextField
          fullWidth
          autoComplete="off"
          style={{
            margin: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "15px 15px 15px 15px #ffffff",
            fontSize: "14px",
          }}
          id="password"
          name="password"
          label="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""
          }
        ></TextField>
        <div style={{ display: "flex", marginLeft: "20px", padding: "10px" }}>
          <Button
            color="primary"
            variant="outlined"
            fullWidth
            type="submit"
            style={{ margin: "10px" }}
          >
            Sign In
          </Button>
          <Button
            color="primary"
            variant="outlined"
            fullWidth
            onClick={handleClick}
            style={{ margin: "10px" }}
          >
            Not Registered Yet
          </Button>
        </div>
      </form>
      {showSuccessAlert && (
        <div
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "green",
            color: "#ffffff",
          }}
        >
          User successfully signed in!
        </div>
      )}
    </div>
  );
};

export default Signinform;
