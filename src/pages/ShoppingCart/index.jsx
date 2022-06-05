import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

import "./style.scss";

import api from "../../services/api";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function ShoppingCart() {
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

  return (
    <>
      <Header />
      <div className="page-container-shopping-cart">
        <div className="title">
          <h2>Carrinho de compras</h2>
        </div>
        <div className="fields">
          <div className="description">
            <h4>Descrição</h4>
          </div>
          <div className="other">
            <h4>Quantidade</h4>
            <h4>Preço unitário</h4>
            <h4>Subtotal</h4>
          </div>
        </div>
        <div className="cart-products">
          {products.map((product, index) => {
            if (index < 3) {
              return (
                <Link
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="product-items">
                    <img
                      src={`${BACKEND_URL}/products/image/${product.image}`}
                      alt="produto"
                    />
                    <div className="product-description">
                      <span>{product.name}</span>
                      <span>R${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
