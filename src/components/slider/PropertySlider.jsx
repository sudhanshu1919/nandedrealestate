import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "./T0SBMOy.jpeg";
import styles from "./PropertySlider.module.css";

function PropertySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`slider-container ${styles.slider}`}>
      <Slider {...settings}>
        <div>
          <img src={img} alt="home" />
        </div>
        <div>
          <img src={img} alt="home" />
        </div>
        <div>
          <img src={img} alt="home" />
        </div>
        <div>
          <img src={img} alt="home" />
        </div>
        <div>
          <img src={img} alt="home" />
        </div>
        <div>
          <img src={img} alt="home" />
        </div>
      </Slider>
    </div>
  );
}

export default PropertySlider;
