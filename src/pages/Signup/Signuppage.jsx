import React from "react";
import Registerform from "../../components/Registerform/Registerform";
import styles from "./Signuppage.module.css";

const Signuppage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}></div>
      <Registerform />
    </div>
  );
};

export default Signuppage;
