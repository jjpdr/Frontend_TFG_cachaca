import { useState, useEffect } from "react";
import FormData from "form-data";
import { SelectProduct } from "../../components/SelectProduct";
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
  const [id, setID] = useState(null);
  const [itemDisplay, setItemDisplay] = useState(null);
  const [products, setProducts] = useState([]);

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const token = JSON.parse(localStorage.getItem("token"));

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

    api
      .put(`/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Atualização efetuada com sucesso!");
        // window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
        // window.location.reload();
      });
  };

  const findProduct = () => {
    let newList = products;

    const filtered = newList.filter((prod) => {
      return prod._id === id;
    });

    if (filtered.length > 0) {
      const position = newList
        .map((prod) => {
          return prod._id;
        })
        .indexOf(id);
      //   setItemDisplay(newList[position]);
      setName(newList[position].name);
      setBrand(newList[position].brand);
      setCategory(newList[position].category);
      setDescription(newList[position].description);
      setManufacturer(newList[position].manufacturer);
      setInfo(newList[position].info);
      setPrice(parseFloat(newList[position]));
      setImage(newList[position].image);
      setQuantity(newList[position].quantity);
    }
  };

  useEffect(() => {
    findProduct();
  }, [id]);

  return (
    <>
      <Header />
      <div className="update-container">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <p className="h1">Selecionar produto</p>
              <SelectProduct
                products={products}
                onItemChange={setID}
                value={id}
              />
            </MDBCol>
            <MDBCol>
              {products ? (
                <>
                  <p className="h1">Atualizar produto</p>
                  <MDBInput
                    label="Código Identificador"
                    id="productID"
                    type="text"
                    readonly
                    value={id || ""}
                  />
                  <MDBInput
                    style={{ marginTop: "10px" }}
                    label="Nome"
                    id="productName"
                    type="text"
                    value={name || ""}
                    onChange={(event) =>
                      handleChange(event.target.value, "name")
                    }
                  />
                  <MDBInput
                    style={{ marginTop: "10px" }}
                    label="Marca"
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
                      handleChange(event.target.value, "description")
                    }
                  />
                  <MDBInput
                    style={{ marginTop: "10px" }}
                    label="Fabricante"
                    id="productManufacturer"
                    type="text"
                    value={manufacturer || ""}
                    onChange={(event) =>
                      handleChange(event.target.value, "manufacturer")
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
                    label="Preço"
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
                    label="Quantidade"
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
              <MDBBtn style={{ marginTop: "10px" }} onClick={handleSubmit}>
                Confirmar
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
