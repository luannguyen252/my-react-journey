import React from "react";
import "./styles.css";

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? "button--primary" : "button--secondary";

  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
