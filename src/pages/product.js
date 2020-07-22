import React, { Component } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";

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
          <h2>no such room could be found...</h2>
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
      <>
        <div className="single-product-image-gallery">
          <ul>
            {defaultImg.map((el, id) => {
              return <img key={id} src={el.fields.file.url} alt={name} />;
            })}
          </ul>
        </div>
        <div className="single-product-image">
          <img src={mainImg.fields.file.url} alt={name} />;
        </div>
        <div className="single-product-details-info">
          <h2 className="single-product-title">{descr}</h2>
          <p>stars: {stars}</p>
          <p>reviews: {reviews}</p>
          <p className="single-product-price">
            {price}${" "}
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
            <h3>Size:</h3>
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
        <h2>You may also like</h2>
        <h2>Customers who bought this product also bought</h2>
      </>
    );
  }
}
