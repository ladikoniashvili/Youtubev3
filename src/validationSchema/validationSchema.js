import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object().shape({
  userName: yup
    .string("Enter your userName")
    .min(8, "Username should be of minimum 8 character length")
    .required("userName is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .matches(passwordRegex, {
      message:
        "At Least 8 characters, must contain at least 1 Uppercase, 1 Lowecase,Can Contain Special Characters",
    })
    .required("Password is required"),
  email: yup.string("Enter your email").email("Enter a valid email"),
});

export default validationSchema;
