import { useState } from "react";

import api from "../../services/api";
import "./style.scss";

import Header from "../../components/Header";

export default function DeleteProduct() {
    const [id, setID] = useState("");
    const token = JSON.parse(localStorage.getItem("token"));

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
        api.delete(`/products/${id}`, {
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
                <input
                    onChange={(event) => handleChange(event.target.value, "id")}
                    value={id}
                    type="text"
                    placeholder="ID do produto"
                />
                <button onClick={handleDelete} type="submit">
                    DELETAR
                </button>
            </div>
        </div>
    );
}
