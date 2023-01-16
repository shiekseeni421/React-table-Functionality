import React from "react";
import "./Button.scss";

function NormalButton(props) {
  const {
    className = "",
    buttonType = "commonButton",
    label = "",
    onClick,
    id,
    type = "submit",
    disabled = false,
    rightIcon = "",
  } = props;

  return (
    <div
      id={id}
      type={type}
      className={`${buttonType} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <img src={rightIcon} alt={rightIcon} />
      <p> {label}</p>
    </div>
  );
}

export default NormalButton;
