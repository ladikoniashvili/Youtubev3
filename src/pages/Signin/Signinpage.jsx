import React from "react";
import Signinform from "../../components/Signinform/Signinform";
import { useLocation } from "react-router-dom";
import styles from "./Signinpage.module.css";
import { useMediaQuery } from "@mui/material";

const Signinpage = () => {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.container}>
      <div className={styles.user}></div>
      {location.state?.success && (
        <div
          style={{
            position: isMobile ? "static" : "fixed",
            top: isMobile ? "auto" : "10%",
            left: isMobile ? "auto" : "40%",
            border: "1px solid greenyellow",
            padding: "5px 10px",
            boxShadow: isMobile ? "none" : "15px 15px 15px 15px greenyellow",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              color: "greenyellow",
              fontSize: isMobile ? "20px" : "28px",
            }}
          >
            Congrats! successfully signed up{" "}
          </h1>
        </div>
      )}
      <Signinform />
    </div>
  );
};

export default Signinpage;
