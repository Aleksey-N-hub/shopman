import React from "react";
import Reviews from "./reviews";
import { Link } from "react-router-dom";
import "./basketCell.css";

export default function basketCell(props) {
  const {
    slug,
    name,
    descr,
    price,
    size,
    reviews,
    stars,
    discount,
    style,
    src,
    remove,
    id,
  } = props;

  return (
    <div className="basketCell" style={style}>
      <Link to={`/products/${slug}`}>
        <img src={src} className="basketCell__photo" />
      </Link>
      <div className="basketCell__information">
        <Link to={`/products/${slug}`}>
          <b>{name}</b>
          <p>{descr}</p>
        </Link>
        <Reviews stars={stars} reviews={reviews} />
        <div className="basketCell__price">
          <p>{price}$</p>
          {discount && (
            <p className="basketCell__discount">
              {((price * 100) / (100 - discount)).toFixed(2)}$
            </p>
          )}
        </div>
        Size:{"   "}
        <select name="product-size" className="basketCell__size">
          {size.map((el, id) => {
            return (
              <option value={el} key={id}>
                {el}
              </option>
            );
          })}
        </select>
        <br />
        <button className="basketCell__button" onClick={() => remove(id)}>
          REMOVE FROM BASKET
        </button>
      </div>
    </div>
  );
}
