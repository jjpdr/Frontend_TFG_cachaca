import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

import "./style.scss";

import api from "../../services/api";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [sliderPrice, setSliderPrice] = useState("10");
    const [checkboxBrand, setCheckboxBrand] = useState([]);

    const handleChange = (value, field) => {
        switch (field) {
            case "price":
                setSliderPrice(value);
                console.log(sliderPrice);
                break;
        }
    };

    const sliderFilter = (product) => {
        if (product.price <= sliderPrice) return product;
    };

    useEffect(() => {
        setFilterProducts(products.filter(sliderFilter));
    }, [sliderPrice]);

    useEffect(() => {
        api.get("/products")
            .then((res) => {
                setProducts([...res.data.products, ...res.data.products]);
                setFilterProducts(products);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Header />
            <div className="page-container-catalog">
                <div className="catalog-sidebar">
                    <h2>FILTRAR POR:</h2>
                    <div className="catalog-sidebar-item">
                        <input
                            type="range"
                            min="10"
                            max="100"
                            step="1"
                            value={sliderPrice}
                            className="slider"
                            onChange={(event) =>
                                handleChange(event.target.value, "price")
                            }
                        ></input>
                    </div>
                    <div className="catalog-sidebar-item">
                        <input
                            type="checkbox"
                            value={checkboxBrand}
                            className="checkbox"
                            id="Cachaça 51"
                        ></input>
                        <label for="Cachaça 51">Cachaça 51</label>
                    </div>
                    <div className="catalog-sidebar-item">
                        <input
                            type="checkbox"
                            value={checkboxBrand}
                            className="checkbox"
                            id="Velho Barreiro"
                        ></input>
                        <label for="Velho Barreiro">Velho Barreiro</label>
                    </div>
                    <div className="catalog-sidebar-item">
                        <input
                            type="checkbox"
                            value={checkboxBrand}
                            className="checkbox"
                            id="Pinga Azul"
                        ></input>
                        <label for="Pinga Azul">Pinga Azul</label>
                    </div>
                    <div className="catalog-sidebar-item">
                        <input
                            type="checkbox"
                            value={checkboxBrand}
                            className="checkbox"
                            id="Outros"
                        ></input>
                        <label for="Outros">Outros</label>
                    </div>
                </div>
                <div className="flex-catalog-product-list">
                    <div className="catalog-product-list">
                        {filterProducts.map((product) => {
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
