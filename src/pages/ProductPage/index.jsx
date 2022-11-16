import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import listContext from "../ShoppingCart/context";
import "./style.scss";
import api from "../../services/api";
import Header from "../../components/Header";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const state = useContext(listContext);

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
    <>
      <Header />
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer style={{ paddingTop: "7%" }}>
          <MDBRow>
            <MDBCol>
              <MDBCard
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80vh",
                }}
              >
                <MDBCardImage
                  src={`${BACKEND_URL}/products/image/${product.image}`}
                  alt={product.name}
                  className="product-image-catalog"
                  fluid
                  style={{
                    width: "80%",
                    height: "80%",
                  }}
                />
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <MDBCardBody>
                  <MDBRow style={{ marginTop: "10px" }}>
                    <MDBCol sm="3">
                      <MDBCardText>Descrição</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {product.description}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow style={{ marginTop: "10px" }}>
                    <MDBCol sm="3">
                      <MDBCardText>Marca</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {product.brand}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  {product.category && product.category.length > 0 && (
                    <MDBRow style={{ marginTop: "10px" }}>
                      <MDBCol sm="3">
                        <MDBCardText>Categoria</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {product.category}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  )}
                  {product.manufacturer && product.manufacturer.length > 0 && (
                    <MDBRow style={{ marginTop: "10px" }}>
                      <MDBCol sm="3">
                        <MDBCardText>Fabricante</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {product.manufacturer}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  )}
                  {product.info && product.info.length > 0 && (
                    <MDBRow style={{ marginTop: "10px" }}>
                      <MDBCol sm="3">
                        <MDBCardText>Informações adicionais</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {product.info}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  )}
                  {product.price && (
                    <MDBRow style={{ marginTop: "27%" }}>
                      <MDBCardText>Por apenas</MDBCardText>
                      <MDBCol sm="9">
                        <MDBCardText
                          style={{ fontSize: "50px", paddingLeft: "100px" }}
                        >
                          R$ {product.price.toFixed(2)}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol
                        sm="3"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <MDBBtn onClick={() => state.addProduct(product)}>
                          + Carrinho
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
