import React from "react";
import Reviews from "./reviews";
import { Link } from "react-router-dom";
import "./likeCell.css";

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
    add,
  } = props;

  return (
    <div className="likeCell" style={style}>
      <Link to={`/products/${slug}`}>
        <img src={src} className="likeCell__photo" />
      </Link>
      <div className="likeCell__information">
        <Link to={`/products/${slug}`}>
          <b>{name}</b>
          <p>{descr}</p>
        </Link>
        <Reviews stars={stars} reviews={reviews} />
        <div className="likeCell__price">
          <p>{price}$</p>
          {discount && (
            <p className="likeCell__discount">
              {((price * 100) / (100 - discount)).toFixed(2)}$
            </p>
          )}
        </div>
        Size:{"   "}
        <select name="product-size" className="likeCell__size">
          {size.map((el, id) => {
            return (
              <option value={el} key={id}>
                {el}
              </option>
            );
          })}
        </select>
        <br />
        <div className="likeCell__buttons">
          <button className="likeCell__addButton" onClick={() => add(slug)}>
            ADD TO CART
          </button>
          <button
            className="likeCell__removeButton"
            onClick={() => remove(slug)}
          >
            REMOVE FROM WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
}
