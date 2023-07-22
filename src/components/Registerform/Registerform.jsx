import React from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import validationSchema from "../../validationSchema/validationSchema";
import { signUpUser } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import my_pages from "../../constants/pages";

const Registerform = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUpUser(values)
        .then(() => {
          navigate(my_pages.SIGN_IN, { state: { success: true } });
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
          name="email"
          id="email"
          autoComplete="off"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""
          }
        ></TextField>
        <TextField
          fullWidth
          autoComplete="off"
          name="userName"
          style={{
            margin: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "15px 15px 15px 15px #ffffff",
          }}
          id="userName"
          label="Username"
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={
            formik.touched.userName && formik.errors.userName
              ? formik.errors.userName
              : ""
          }
        ></TextField>
        <TextField
          fullWidth
          type="password"
          name="password"
          id="password"
          label="password"
          autoComplete="off"
          onBlur={formik.handleBlur}
          value={formik.values.password}
          onChange={formik.handleChange}
          style={{
            margin: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "15px 15px 15px 15px #ffffff",
          }}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""
          }
        ></TextField>
        <Button
          type="submit"
          style={{ margin: "10px" }}
          color="primary"
          variant="outlined"
          fullWidth
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Registerform;
