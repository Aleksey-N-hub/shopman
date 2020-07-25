import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/1.jpeg";
import Image2 from "../assets/2.jpeg";
import Image3 from "../assets/3.jpeg";
import Image4 from "../assets/4.jpeg";
import Image5 from "../assets/5.jpeg";
import Image6 from "../assets/6.jpeg";
import React from "react";

export default function images() {
  return (
    <Carousel showArrows={true} onChange onClickItem onClickThumb>
      <div>
        <img src={Image1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={Image2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={Image3} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src={Image4} />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src={Image5} />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src={Image6} />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
}
