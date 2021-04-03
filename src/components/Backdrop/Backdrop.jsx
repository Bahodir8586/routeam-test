import React from "react";

import styles from "./Backdrop.module.css";

const Backdrop = ({ show, clicked }) => {
  return show && <div className={styles.backdrop} onClick={clicked}></div>;
};

export default Backdrop;
