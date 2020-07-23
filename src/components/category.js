import React from "react";
import Reviews from "./reviews";

export default function category(props) {
  return (
    <div className="product-cell box-product">
      {props.discount && <p>discount</p>}
      {props.new && <p>new</p>}
      <img src={props.src} className="product-photo" />
      <div className="on-photo">
        <p>cart</p>
        <p>like</p>
      </div>
      <h5 className="product-name">
        {props.name}
        <p>{props.description}</p>
      </h5>
      <p className="single-product-price">
        {props.price}$
        {props.discount && (
          <p className="single-product-discount-price">
            {((props.price * 100) / (100 - props.discount)).toFixed(2)}$
          </p>
        )}
      </p>
      <Reviews stars={props.stars} reviews={props.reviews} />
    </div>
  );
}
