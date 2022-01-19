import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import api from "../../services/api";
import arrow from "../../assets/img/arrow.png";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function PageTwo() {
    const [products, setProducts] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        api.get("/products")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, []);

    const handleLeftClick = (event) => {
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (event) => {
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <>
            {products.length > 0 && (
                <div id="page-two" className="page-container-page-two">
                    <div className="content">
                        <h2>CONHEÇA ALGUNS DE NOSSOS PRODUTOS</h2>
                        <div className="product" ref={carousel}>
                            {products.map((product, index) => {
                                console.log(product);
                                if (index <= 4) {
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
                                                <h2 className="name-font">
                                                    {product.name}
                                                </h2>
                                                <h2 className="price">
                                                    R${product.price.toFixed(2)}
                                                </h2>
                                            </div>
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                        <div className="buttons">
                            <button onClick={handleLeftClick}>
                                <img src={arrow} alt="Left arrow" />
                            </button>
                            <button onClick={handleRightClick}>
                                <img src={arrow} alt="Right arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
