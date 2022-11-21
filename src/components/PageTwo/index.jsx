import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import MovieCard from "../MovieCard";
import api from "../../services/api";

export default function SimpleSlider() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("/products")
            .then((res) => {
                setProducts(res.data.products);
                console.log(res.data.products);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, []);

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${
                    index + 1
                }, background: #222; color: #bada55`
            );
        },
    };
    return (
        <div className="page-container-page-two">
            <div id="page-two" className="content">
                <div className="content">
                    <h2 className="mais_vendidos">Produtos mais vendidos</h2>
                    <Slider {...settings}>
                        {console.log(products)}
                        {products.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
