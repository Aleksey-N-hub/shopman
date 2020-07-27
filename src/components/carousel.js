import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GlassMagnifier } from "react-image-magnifiers";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 0 },
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
          />
        ))}
      </Carousel>
    </div>
  );
}
