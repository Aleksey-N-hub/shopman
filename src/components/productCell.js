import React from "react";
import Reviews from "./reviews";
import Discount from "./discount";
import New from "./new";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

export default function category(props) {
  return (
    <div className="product-cell box-product">
      {props.discount && <Discount discount={props.discount} />}
      {props.new && <New />}
      <img src={props.src} className="product-photo" />
      <div className="on-photo">
        <FiShoppingCart className="on-photo-icons" />
        <FiHeart className="on-photo-icons" />
      </div>
      <h5 className="product-name">
        <b>{props.name}</b>
        <p>{props.description}</p>
      </h5>
      <Reviews stars={props.stars} reviews={props.reviews} />
      <div className="single-product-price">
        <p>{props.price}$</p>
        {props.discount && (
          <p className="single-product-discount-price">
            {((props.price * 100) / (100 - props.discount)).toFixed(2)}$
          </p>
        )}
      </div>
    </div>
  );
}
