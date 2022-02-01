import { React, useState } from "react";
import FormData from "form-data";

import "./style.scss";
import api from "../../services/api";
import Header from "../Header";

export default function RegisterProducts() {
    const [nome, setNome] = useState("");
    const [marca_produto, setMarca] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [fabricante, setFabricante] = useState("");
    const [caracteristica, setCaracteristica] = useState("");
    const [preco, setPreco] = useState("");
    const [images, setImages] = useState([]);

    const token = JSON.parse(localStorage.getItem("token"));
    const handleChange = (value, field) => {
        switch (field) {
            case "nome":
                setNome(value);
                break;
            case "marca_produto":
                setMarca(value);
                break;
            case "categoria":
                setCategoria(value);
                break;
            case "descricao":
                setDescricao(value);
                break;
            case "fabricante":
                setFabricante(value);
                break;
            case "caracteristica":
                setCaracteristica(value);
                break;
            case "preco":
                setPreco(value);
                break;
            case "images":
                setImages(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => {
        const data = new FormData();
        data.append("name", nome);
        data.append("brand", marca_produto);
        data.append("category", categoria);
        data.append("description", descricao);
        data.append("manufacturer", fabricante);
        data.append("info", caracteristica);
        data.append("price", preco);
        data.append("images", images[0]);

        api.post("/products/create", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "multipart/form-data",
            },
        })
            .then((res) => {
                alert("Cadastro efetuado com sucesso!");
                // window.location.reload();
            })
            .catch((err) => {
                alert(err.response.data.message);
                // window.location.reload();
            });
    };

    return (
        <div className="page-container-register-products">
            <Header />
            <div className="login-container">
                <div className="top-container">
                    <div className="login-text">
                        <h2>REGISTRAR UM PRODUTO</h2>
                    </div>
                </div>
                <div className="middle-container">
                    <input
                        onChange={(event) =>
                            handleChange(event.target.value, "nome")
                        }
                        value={nome}
                        type="text"
                        className="field"
                        placeholder="Nome do produto*"
                    />
                    <input
                        onChange={(event) =>
                            handleChange(event.target.value, "marca_produto")
                        }
                        value={marca_produto}
                        type="text"
                        className="field"
                        placeholder="Marca do produto*"
                    />
                    <input
                        onChange={(event) =>
                            handleChange(event.target.value, "categoria")
                        }
                        value={categoria}
                        type="text"
                        className="field"
                        placeholder="Categoria"
                    />
                    <input
                        onChange={(event) =>
                            handleChange(event.target.value, "descricao")
                        }
                        value={descricao}
                        type="text"
                        className="field"
                        placeholder="Descrição"
                    />
                    <input
                        onChange={(event) =>
                            handleChange(event.target.value, "fabricante")
                        }
                        value={fabricante}
                        type="text"
                        className="field"
                        placeholder="Fabricante"
                    />
                    <input
                        onChange={(event) =>
                            handleChange(event.target.value, "caracteristica")
                        }
                        type="text"
                        value={caracteristica}
                        className="field"
                        placeholder="Característica"
                    />
                    <input
                        onChange={(event) =>
                            handleChange(event.target.value, "preco")
                        }
                        value={preco}
                        type="text"
                        className="field"
                        placeholder="Preço*"
                    />
                    <input
                        onChange={(event) =>
                            handleChange(event.target.files, "images")
                        }
                        type="file"
                        accept="image/png, image/jpeg"
                        className="field"
                        placeholder="Imagem*"
                    />
                </div>
                <div className="bottom-container">
                    <div className="button-enter">
                        <button
                            onClick={handleSubmit}
                            className="btn btn-enter"
                        >
                            CADASTRAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
