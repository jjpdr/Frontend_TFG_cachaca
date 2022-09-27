import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./style.scss";
import api from "../../services/api";
import Header from "../../components/Header";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    api
      .get(`/products/${id}`)
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
        <p>Nome: {product.name}</p>
        <p>Marca: {product.brand}</p>
        <p>Categoria: {product.category}</p>
        <p>Descrição: {product.description}</p>
        <p>Fabricante: {product.manufacturer}</p>
        <p>Característica: {product.info}</p>
        <p>Preço: R${product.price}</p>
        <p>Quantidade:{product.quantity}</p>
      </div>
    </div>
  );
}
