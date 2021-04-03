import React from "react";

import styles from "./Modal.module.css";
import Backdrop from "../Backdrop";

const Modal = ({ show, modalClosed, children }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={styles.modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
