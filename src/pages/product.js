import React, { Component } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";
import Reviews from "../components/reviews";
import SliderCarousel from "../containers/sliderCarousel";
import Carousel from "../components/carousel";
import ControlledTabs from "../components/controlledTabs";
import { FiHeart } from "react-icons/fi";

export default class Product extends Component {
  state = {
    slug: this.props.match.params.slug,
  };

  static contextType = Context;

  render() {
    const {
      getProduct,
      getAlsoBought,
      getAlsoLiked,
      likeProductHandler,
      addToCartHandler,
    } = this.context;
    const product = getProduct(this.state.slug);

    if (!product) {
      return (
        <div className="product">
          <h2>no such product could be found...</h2>
          <Link to="/">Back to main page...</Link>
        </div>
      );
    }
    const {
      alsoBought,
      alsoLike,
      descr,
      description,
      discount,
      materials,
      pictures,
      price,
      reviews,
      size,
      stars,
    } = product;

    const like = getAlsoLiked(alsoLike, this.state.slug);
    const bought = getAlsoBought(alsoBought, this.state.slug);
    let d = new Date();
    d.setDate(14);

    // const handleClick = (event) => {
    //   console.log(event);
    //   console.log(event.src);
    // };
    // const changeIt = (img) => {
    //   var name = img.src;
    //   console.log(name);
    // };
    return (
      <div>
        <div className="product">
          <div className="images">
            <Carousel pictures={pictures} />
          </div>
          <div className="single-product-details-info">
            <h2 className="single-product-title">{descr}</h2>
            <br />
            <Reviews stars={stars} reviews={reviews} />
            <br />
            <div className="single-product-price-2 ">
              {price}$
              {discount && (
                <p className="single-product-discount-price">
                  {((price * 100) / (100 - discount)).toFixed(2)}$
                </p>
              )}
            </div>
            <br />
            <br />
            <p className="single-product-delivery">
              With free Worldwide delivery and FREE Returns
            </p>
            <br />
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
            <br />
            <button
              className="product-button"
              onClick={() => addToCartHandler(this.state.slug)}
            >
              ADD TO BAG
            </button>
            <FiHeart
              className="on-photo-icons"
              onClick={() => likeProductHandler(this.state.slug)}
            />
          </div>
        </div>
        <ControlledTabs description={description} materials={materials} />
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          You may also like
        </h2>

        <SliderCarousel products={like} />
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <br />
          <br />
          Customers who bought this product also bought
        </h2>
        <SliderCarousel products={bought} />
      </div>
    );
  }
}
