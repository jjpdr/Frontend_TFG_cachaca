import { useState } from "react";
import FormData from "form-data";

import "./style.scss";
import api from "../../services/api";
import Header from "../../components/Header";
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBFile,
} from "mdb-react-ui-kit";

export default function RegisterProducts() {
    const [name, setName] = useState(null);
    const [brand, setBrand] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState(null);
    const [manufacturer, setManufacturer] = useState(null);
    const [info, setInfo] = useState(null);
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState([]);
    const [quantity, setQuantity] = useState(null);
    const [products, setProducts] = useState([]);

    const token = JSON.parse(localStorage.getItem("token"));

    const handleChange = (value, field) => {
        switch (field) {
            case "name":
                setName(value);
                break;
            case "brand":
                setBrand(value);
                break;
            case "category":
                setCategory(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "manufacturer":
                setManufacturer(value);
                break;
            case "info":
                setInfo(value);
                break;
            case "price":
                setPrice(value);
                break;
            case "image":
                setImage(value);
                break;
            case "quantity":
                setQuantity(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => {
        const data = new FormData();
        data.append("name", name);
        data.append("brand", brand);
        data.append("category", category);
        data.append("description", description);
        data.append("manufacturer", manufacturer);
        data.append("info", info);
        data.append("price", price);
        data.append("images", image[0]);
        data.append("quantity", quantity);

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
        <>
            <Header />
            <MDBContainer style={{ paddingTop: "7%", width: "50%" }}>
                <MDBCol>
                    {products ? (
                        <>
                            <p className="h1">Cadastrar produto</p>
                            <MDBInput
                                style={{ marginTop: "10px" }}
                                label="Nome*"
                                id="productName"
                                type="text"
                                value={name || ""}
                                onChange={(event) =>
                                    handleChange(event.target.value, "name")
                                }
                            />
                            <MDBInput
                                style={{ marginTop: "10px" }}
                                label="Marca*"
                                id="productBrand"
                                type="text"
                                value={brand || ""}
                                onChange={(event) =>
                                    handleChange(event.target.value, "brand")
                                }
                            />
                            <MDBInput
                                style={{ marginTop: "10px" }}
                                label="Categoria"
                                id="productCategory"
                                type="text"
                                value={category || ""}
                                onChange={(event) =>
                                    handleChange(event.target.value, "category")
                                }
                            />
                            <MDBInput
                                style={{ marginTop: "10px" }}
                                label="Descrição"
                                id="productDescription"
                                type="text"
                                value={description || ""}
                                onChange={(event) =>
                                    handleChange(
                                        event.target.value,
                                        "description"
                                    )
                                }
                            />
                            <MDBInput
                                style={{ marginTop: "10px" }}
                                label="Fabricante"
                                id="productManufacturer"
                                type="text"
                                value={manufacturer || ""}
                                onChange={(event) =>
                                    handleChange(
                                        event.target.value,
                                        "manufacturer"
                                    )
                                }
                            />
                            <MDBInput
                                style={{ marginTop: "10px" }}
                                label="Informações"
                                id="productInfo"
                                type="text"
                                value={info || ""}
                                onChange={(event) =>
                                    handleChange(event.target.value, "info")
                                }
                            />
                            <MDBInput
                                style={{ marginTop: "10px" }}
                                label="Preço*"
                                id="productPrice"
                                type="number"
                                value={price || ""}
                                onChange={(event) =>
                                    handleChange(event.target.value, "price")
                                }
                            />
                            <MDBFile
                                style={{ marginTop: "10px" }}
                                id="customFile"
                                onChange={(event) =>
                                    handleChange(event.target.files, "image")
                                }
                            />
                            <MDBInput
                                style={{ marginTop: "10px" }}
                                label="Quantidade*"
                                id="productQuantity"
                                type="number"
                                value={quantity || ""}
                                onChange={(event) =>
                                    handleChange(event.target.value, "quantity")
                                }
                            />
                        </>
                    ) : (
                        <p className="h1">Nenhum produto selecionado!</p>
                    )}
                    <MDBBtn
                        style={{ marginTop: "10px" }}
                        onClick={handleSubmit}
                    >
                        Confirmar
                    </MDBBtn>
                </MDBCol>
            </MDBContainer>
        </>
    );
}
