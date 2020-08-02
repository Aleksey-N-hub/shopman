import React from "react";

const button = (props) => (
  <button
    style={{ textAlign: "center" }}
    disabled={props.disabled}
    className={["button", props.btnType].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
