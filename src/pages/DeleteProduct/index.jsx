import { useState, useEffect } from "react";

import api from "../../services/api";
import "./style.scss";

import Header from "../../components/Header";

import { SelectProduct } from "../../components/SelectProduct";

export default function DeleteProduct() {
  const [id, setID] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));
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

  const handleDelete = () => {
    api
      .delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert("Cachaça removida com sucesso!");
        window.location.href = "/admin-panel";
      })
      .catch((err) => {});
  };
  return (
    <div className="page-container-delete-product">
      <Header />
      <div className="content">
        <SelectProduct products={products} onItemChange={setID} value={id} />
        <div>
          <button onClick={handleDelete}>DELETAR</button>
        </div>
      </div>
    </div>
  );
}
