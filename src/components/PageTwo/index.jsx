import { useState, useEffect } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import ProductCard from "../ProductCard";
import api from "../../services/api";

export default function SimpleSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {});
    // eslint-disable-next-line
  }, []);

  const settings = {
    className: "center",
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    centerMode: true,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="page-container-page-two">
      <div className="content">
        <h2 className="mais_vendidos">Produtos mais vendidos</h2>
        <Slider
          {...settings}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItens: "center",
          }}
        >
          {products.map((product, index) => {
            return <ProductCard product={product} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
