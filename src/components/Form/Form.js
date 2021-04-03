import React, { useState, useEffect } from "react";

import styles from "./Form.module.css";
import strings from "../../constants/strings";

const Form = ({ inputType, label, onSubmit }) => {
  const [inputValue, setinputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (inputValue) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [inputValue]);

  let classNames = [
    {
      label: styles.labelForText,
      input: styles.inputForText,
    },
    {
      label: styles.labelForFile,
      input: styles.inputForFile,
    },
  ];
  let classes = classNames[0];
  if (inputType === "file") {
    classes = classNames[1];
  }

  const inputHandler = (e) => {
    if (inputType === "file") {
      setinputValue(e.target.files[0]);
      return;
    }
    setinputValue(e.target.value);
  };
  const submitHandler = () => {
    if (!inputValue) {
      return;
    }
    onSubmit(inputValue);
  };
  return (
    <div className={styles.form}>
      <div>
        <label htmlFor="input" className={classes.label}>
          {label}
        </label>
      </div>
      {inputType === "file" && (
        <div>
          <span>{inputValue.name}</span>
        </div>
      )}

      <div>
        <input
          type={inputType}
          id="input"
          onChange={inputHandler}
          className={classes.input}
          autoComplete="off"
        />
      </div>
      <div>
        <button
          className={disabled ? styles.disabled : " "}
          onClick={submitHandler}
        >
          {strings.submit}
        </button>
      </div>
    </div>
  );
};

export default Form;
