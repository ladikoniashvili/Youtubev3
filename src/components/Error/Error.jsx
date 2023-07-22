import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";
import my_pages from "../../constants/pages";
import HomeIcon from "@mui/icons-material/Home";
const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>404 Not Found</h1>
      <p className={styles.p}>Sorry we are Unable to find that page</p>
      <Link to={my_pages.HOME_PAGE} style={{ color: "white" }}>
        Go Home Page Maybe <HomeIcon />
      </Link>
    </div>
  );
};

export default Error;
