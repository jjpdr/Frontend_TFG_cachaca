import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import data from "../../mock.json";
import MovieCard from "../MovieCard";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
        );
      },
    };
    return (
      <div className="page-container-page-two">
        <div id="page-two" className="content">
          <div class="content">
            <h2 className="mais_vendidos">Produtos mais vendidos</h2>
            <Slider {...settings}>
              {data.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
