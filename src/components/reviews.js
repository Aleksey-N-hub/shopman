import React from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

export default function reviews(props) {
  let star = FaRegStar;

  if (props.stars - Math.floor(props.stars) > 0.6) {
    star = <FaStar className="stars" />;
  } else if (props.stars - Math.floor(props.stars) < 0.4) {
    star = <FaRegStar className="stars" />;
  } else {
    star = <FaStarHalfAlt className="stars" />;
  }
  let output = [];
  for (let i = 1; i <= Math.floor(props.stars); i++) {
    output.push(<FaStar className="stars" />);
  }

  return (
    <div className="reviews">
      <div>
        {output}
        {star}
        {Math.floor(props.stars) < 4 && <FaRegStar className="stars" />}
        {props.reviews}
      </div>
    </div>
  );
}
