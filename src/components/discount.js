import React from "react";

export default function discount({ discount }) {
  return (
    <div className="discount-main">
      <div className="label-content">{discount}% OFF</div>
    </div>
  );
}
