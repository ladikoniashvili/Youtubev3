import React from "react";
import styles from "./YouarenotAuthenticated.module.css";
const YouarenotAuthentificated = () => {
  return (
    <div className={styles.container}>
      <h1
        style={{
          color: "#FFFFFF",
          position: "fixed",
          top: "10%",
          left: "40%",
          fontSize: "28px",
        }}
      >
        You are Not Authenticated !!! Please Sign In &rarr;
      </h1>
      <div className={styles.auth}></div>
    </div>
  );
};

export default YouarenotAuthentificated;
