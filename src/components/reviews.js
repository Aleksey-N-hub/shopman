import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

export default function reviews(props) {
  let star = FaRegStar;
  if (props.stars - Math.ceil(props.stars) > 0.6) {
    star = <FaStar className="stars" />;
  } else if (props.stars - Math.ceil(props.stars) < 0.4) {
    star = <FaRegStar className="stars" />;
  } else {
    star = <FaStarHalfAlt className="stars" />;
  }
  return (
    <div className="reviews">
      <div>
        <FaStar className="stars" />
        <FaStar className="stars" />
        <FaStar className="stars" />
        <FaStar className="stars" />
        {star} {props.reviews}
      </div>
    </div>
  );
}
