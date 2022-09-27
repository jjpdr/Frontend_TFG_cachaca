import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import api from "../../services/api";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function PageTwo() {
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
      {products.length > 0 && (
        <div id="page-two" className="page-container-page-two">
          <div className="content">
            <h2>CONHEÇA ALGUNS DE NOSSOS PRODUTOS</h2>
            <div className="product">
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
                        <h2 className="name-font">{product.name}</h2>
                        <h2 className="price">R${product.price.toFixed(2)}</h2>
                      </div>
                    </Link>
                  );
                } else return;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
