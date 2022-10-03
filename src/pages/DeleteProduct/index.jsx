import { useState, useEffect } from "react";

import api from "../../services/api";
import "./style.scss";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Header from "../../components/Header";

import { SelectProduct } from "../../components/SelectProduct";

export default function DeleteProduct() {
  const [id, setID] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));
  const [products, setProducts] = useState([]);
  const [itemDisplay, setItemDisplay] = useState([]);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
        alert(`${itemDisplay.name} foi removido com sucesso!`);
        window.location.reload();
      })
      .catch((err) => {});
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
      setItemDisplay(newList[position]);
    }
  };

  useEffect(() => {
    findProduct();
  }, [id]);

  return (
    <>
      <Header />
      <div className="page-container-delete-product">
        <MDBContainer fluid>
          <MDBTypography>Selecione o produto que deseja excluir</MDBTypography>
          <MDBRow>
            <MDBCol>
              <SelectProduct
                products={products}
                onItemChange={setID}
                value={id}
              />
            </MDBCol>
            <MDBCol>
              <MDBCard style={{ maxWidth: "540px" }}>
                <MDBRow className="g-0">
                  <MDBCol md="4">
                    <MDBCardImage
                      src={`${BACKEND_URL}/products/image/${itemDisplay.image}`}
                      alt="Aguardando o produto a ser selecionado"
                      fluid
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody>
                      <MDBCardTitle>{itemDisplay.name}</MDBCardTitle>
                      <MDBCardText>{itemDisplay.description}</MDBCardText>
                    </MDBCardBody>
                    <MDBBtn onClick={handleDelete}>Remover</MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
