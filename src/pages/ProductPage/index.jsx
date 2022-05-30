import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./style.scss";
import api from "../../services/api";
import Header from "../../components/Header";

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        api.get(`/products/${id}`)
            .then((res) => {
                setProduct(res.data.product);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, []);

    return (
        <div className="page-container-product-page">
            <Header />
            <div className="content">
                <h1>Nome: {product.name}</h1>
                <h1>Marca: {product.brand}</h1>
                <h1>Categoria: {product.category}</h1>
                <h1>Descrição: {product.description}</h1>
                <h1>Fabricante: {product.manufacturer}</h1>
                <h1>Característica: {product.info}</h1>
                <h1>Preço: R${product.price}</h1>
            </div>
        </div>
    );
}
