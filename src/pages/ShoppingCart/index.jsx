import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

import "./style.scss";

import api from "../../services/api";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function ShoppingCart() {
    const [productsCart, setProductsCart] = useState([]);

    useEffect(() => {
        api.get("/products")
            .then((res) => {
                setProductsCart(res.data.products);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, []);

    const handleQuantityChange = (index, option) => {
        const auxProducts = productsCart;
        switch (option) {
            case "add":
                auxProducts[index].quantity += 1;
                setProductsCart(auxProducts);
                console.log(productsCart[index].quantity);
                break;
            case "remove":
                auxProducts[index].quantity -= 1;
                setProductsCart(auxProducts);
                console.log(productsCart[index].quantity);
                break;
            default:
                break;
        }
    };

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
                    {productsCart.map((product, index) => {
                        if (index < 5) {
                            return (
                                <div className="product-items">
                                    <div className="description">
                                        <Link to={`/product/${product._id}`}>
                                            <img
                                                src={`${BACKEND_URL}/products/image/${product.image}`}
                                                alt="produto"
                                            />
                                        </Link>
                                        <h4>{product.name}</h4>
                                    </div>
                                    <div className="other">
                                        <button
                                            onClick={() =>
                                                handleQuantityChange(
                                                    index,
                                                    "remove"
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <h4>{product.quantity}</h4>
                                        <button
                                            onClick={() =>
                                                handleQuantityChange(
                                                    index,
                                                    "add"
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                        <h4>R${product.price.toFixed(2)}</h4>
                                        <h4>
                                            R$
                                            {(
                                                product.quantity * product.price
                                            ).toFixed(2)}
                                        </h4>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}
