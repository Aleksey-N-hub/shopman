import React from "react";
import Backdrop from "./backdrop";

const modal = (props) => (
  <div>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div className={`modal-${props.show && "visible"}`}>{props.children}</div>
  </div>
);

export default modal;
