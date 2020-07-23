import React, { Component } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";
import Reviews from "../components/reviews";

export default class Product extends Component {
  state = {
    slug: this.props.match.params.slug,
  };

  static contextType = Context;

  render() {
    const { getProduct } = this.context;
    const product = getProduct(this.state.slug);
    // const category = product;
    if (!product) {
      return (
        <div>
          <h2>no such product could be found...</h2>
          <Link>Back to</Link>
        </div>
      );
    }
    const {
      alsoBought,
      alsoLike,
      categories,
      color,
      descr,
      description,
      discount,
      materials,
      name,
      pictures,
      price,
      reviews,
      size,
      stars,
    } = product;
    const [mainImg, ...defaultImg] = pictures;
    console.log(defaultImg);
    return (
      <div className="row">
        <div className="single-product-image-gallery">
          <ul className="single-product-image-gallery">
            {defaultImg.map((el, id) => {
              return (
                <img
                  className="single-product-image"
                  key={id}
                  src={el.fields.file.url}
                  alt={name}
                />
              );
            })}
          </ul>
        </div>
        <div>
          <img
            className="single-image"
            src={mainImg.fields.file.url}
            alt={name}
          />
        </div>
        <div className="single-product-details-info">
          <h2 className="single-product-title">{descr}</h2>
          <Reviews stars={stars} reviews={reviews} />
          <p className="single-product-price-2 ">
            {price}$
            {discount && (
              <p className="single-product-discount-price">
                {((price * 100) / (100 - discount)).toFixed(2)}$
              </p>
            )}
          </p>
          <p className="single-product-delivery">
            With free Worldwide delivery and FREE Returns
          </p>
          <div className="single-product-size">
            Size:{"   "}
            <select
              id="product-size"
              name="product-size"
              className="single-product-select"
            >
              {size.map((el, id) => {
                return (
                  <option value={el} key={id}>
                    {el}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="single-product-description">
            <h3>Materials:</h3>
            {materials.map((el, id) => {
              if (id % 2 == 0) {
                return (
                  <p key={id} className="material">
                    {el} ------------------ {materials[id + 1]}%
                  </p>
                );
              }
            })}
            <h3>Description:</h3>
            <p>{description}</p>
          </div>
        </div>
        <div style={{ display: "flex-block" }}>
          <h2 style={{ display: "block" }}>You may also like</h2>
          <h2 style={{ display: "block" }}>
            Customers who bought this product also bought
          </h2>
        </div>
      </div>
    );
  }
}
