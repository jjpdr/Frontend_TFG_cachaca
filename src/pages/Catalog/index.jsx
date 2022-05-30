import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

import "./style.scss";

import api from "../../services/api";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts([...res.data.products, ...res.data.products]);
      })
      .catch((err) => {});
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className="page-container-catalog">
        <div className="catalog-sidebar"></div>
        <div className="flex-catalog-product-list">
          <div className="catalog-product-list">
            {products.map((product) => {
              console.log(product);
              return (
                <Link
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none" }}
                  className="product-items"
                >
                  <img
                    src={`${BACKEND_URL}/products/image/${product.image}`}
                    alt="produto"
                  />
                  <h2>{product.name}</h2>
                  <h2>R${product.price.toFixed(2)}</h2>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
