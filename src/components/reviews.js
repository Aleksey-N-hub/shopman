import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

export default function reviews(props) {
  let star = FaRegStar;
  if (props.stars - Math.ceil(props.stars) > 0.6) {
    star = <FaStar />;
  } else if (props.stars - Math.ceil(props.stars) < 0.4) {
    star = <FaRegStar />;
  } else {
    star = <FaStarHalfAlt />;
  }
  return (
    <>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      {star}
      <p>{props.reviews}</p>
    </>
  );
}
