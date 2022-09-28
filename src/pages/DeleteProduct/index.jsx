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

  const handleChange = (value, field) => {
    switch (field) {
      case "id":
        setID(value);
        break;
      default:
        break;
    }
  };

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
        {/* <input
          onChange={(event) => handleChange(event.target.value, "id")}
          value={id}
          type="text"
          placeholder="ID do produto"
        /> */}
        <SelectProduct products={products} onItemChange={setID} value={id} />
        <button onClick={handleDelete}>DELETAR</button>
      </div>
    </div>
  );
}
