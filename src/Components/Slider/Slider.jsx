import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";
import data from "../../data";
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center ",
      dots: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 2000,
      autoplay: true,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <div className="food">
              <img src="../../img/photo-1-15520438700571233711429.jpg" />
              <span className="namefood"></span>
              
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
