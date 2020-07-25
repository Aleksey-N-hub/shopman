import React from "react";
import { Link } from "react-router-dom";
import ProductCell from "../components/productCell";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function sliderCarousel(props) {
  const { products } = props;
  return (
    <>
      <div>
        <Carousel responsive={responsive} showDots={true}>
          {products.map((el, id) => {
            return (
              <Link to={`/products/${el.slug}`}>
                <ProductCell
                  style={{ width: "75%" }}
                  key={id}
                  discount={el.discount}
                  new={el.new}
                  src={el.pictures[0].fields.file.url}
                  name={el.name}
                  description={el.descr}
                  price={el.price}
                  stars={el.stars}
                  reviews={el.reviews}
                />
              </Link>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
