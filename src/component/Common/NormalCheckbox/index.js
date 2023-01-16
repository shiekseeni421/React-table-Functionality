import React from "react";
import classes from "./styles.module.scss";

const NormalCheckbox = (props) => {
  const { name, checked, onChange, label } = props;
  return (
    <>
      <input
        name={name}
        checked={checked}
        onChange={onChange}
        className={classes.checkbox}
        type="checkbox"
      />
      {label && <label className={classes.label}>{label}</label>}
    </>
  );
};

export default NormalCheckbox;
