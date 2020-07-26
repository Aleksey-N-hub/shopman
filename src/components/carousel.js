import React from "react";
import { Link } from "react-router-dom";
// import ProductCell from "../components/productCell";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactImageMagnify from "react-image-magnify";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function sliderCarousel(props) {
  const { pictures } = props;
  return (
    <div>
      <Carousel responsive={responsive} showDots={true}>
        {pictures.map((el, id) => (
          <GlassMagnifier
            square
            magnifierSize="40%"
            imageSrc={el.fields.file.url}
            imageAlt="Product photo"
            magnifierBorderSize={1}
            // largeImageSrc="./large-image.jpg" // Optional?
          />
        ))}
        {/* {pictures.map((el, id) => (
          <ReactImageMagnify
            className="image-magnify"
            key={id}
            {...{
              smallImage: {
                alt: "Wr",
                isFluidWidth: true,
                src: el.fields.file.url,
              },
              largeImage: {
                src: el.fields.file.url,
                width: 1700,
                height: 1800,
              },
            }}
          />
        ))} */}
      </Carousel>
    </div>
  );
}
