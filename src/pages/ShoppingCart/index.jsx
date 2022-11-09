import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import listContext from "../ShoppingCart/context";
import "./style.scss";
import api from "../../services/api";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ShoppingCart() {
  const state = useContext(listContext);
  const [shippings, setShippings] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState({});
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    api.get("/checkout/shippings").then((res) => {
      setShippings(res.data.shippingRates);
      setSelectedShipping(res.data.shippingRates[0]);
    });
  }, []);

  const handleShippingChange = (shipping) => {
    setSelectedShipping(JSON.parse(shipping));
  };

  const handleCheckout = () => {
    const line_items = state.cart.map((product) => {
      return {
        quantity: product.count,
        price: product.object.stripePriceID,
      };
    });

    api
      .post(
        "/checkout/product-checkout-session",
        { line_items, shipping_cost: selectedShipping.id },
        {
          headers: {},
        }
      )
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => {
        alert(err.response.data.message);
        // window.location.reload();
      });
  };

  const handleProductChange = (product, event) => {
    state.setProductCount(product.object._id, event.target.value);
  };

  return (
    <>
      <Header />
      <section
        style={{
          backgroundColor: "#E7F6F2",
          minHeight: "100vh",
          paddingTop: "3%",
        }}
      >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Carrinho
                          </MDBTypography>
                        </div>
                        <hr className="my-4" />
                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                          {/*eslint-disable-next-line*/}
                          {state.cart.map((product) => {
                            if (product.count > 0) {
                              return (
                                <>
                                  <MDBCol
                                    md="2"
                                    lg="2"
                                    xl="2"
                                    style={{
                                      alignItems: "center",
                                      justifyContent: "center",
                                      display: "flex",
                                      marginBottom: "10px",
                                    }}
                                  >
                                    <MDBCardImage
                                      src={`${BACKEND_URL}/products/image/${product.object.image}`}
                                      fluid
                                      alt={product.object.name}
                                      style={{
                                        height: "100px",
                                      }}
                                    />
                                  </MDBCol>
                                  <MDBCol md="3" lg="3" xl="3">
                                    <MDBTypography
                                      tag="h6"
                                      className="text-muted"
                                    >
                                      {product.object.category}
                                    </MDBTypography>
                                    <MDBTypography
                                      tag="h6"
                                      className="text-black mb-0"
                                    >
                                      {product.object.name}
                                    </MDBTypography>
                                  </MDBCol>
                                  <MDBCol
                                    md="3"
                                    lg="3"
                                    xl="3"
                                    className="d-flex align-items-center"
                                  >
                                    <MDBInput
                                      type="number"
                                      min="0"
                                      defaultValue={product.count}
                                      size="sm"
                                      onChange={(event) =>
                                        handleProductChange(product, event)
                                      }
                                    />
                                  </MDBCol>
                                  <MDBCol
                                    md="3"
                                    lg="2"
                                    xl="2"
                                    className="text-end"
                                  >
                                    <MDBTypography tag="h6" className="mb-0">
                                      R$
                                      {product.object.price.toFixed(2)}
                                    </MDBTypography>
                                  </MDBCol>
                                  <MDBCol
                                    md="1"
                                    lg="1"
                                    xl="1"
                                    className="text-end"
                                  ></MDBCol>
                                </>
                              );
                            }
                          })}
                        </MDBRow>

                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText
                              tag="a"
                              href="/catalog"
                              className="text-body"
                            >
                              <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                              Voltar ao catálogo
                            </MDBCardText>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Sub-total
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Itens ({state.cartCount})
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            R$ {state.cartValue.toFixed(2)}
                          </MDBTypography>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Tipo de entrega
                        </MDBTypography>

                        <div className="mb-4 pb-2">
                          <select
                            className="select p-2 rounded bg-grey"
                            style={{
                              width: "100%",
                            }}
                            onChange={(event) => {
                              handleShippingChange(event.target.value);
                            }}
                          >
                            {shippings.map((opt, index) => {
                              return (
                                <option key={index} value={JSON.stringify(opt)}>
                                  {opt.display_name} - R$
                                  {(
                                    parseFloat(opt.fixed_amount.amount) / 100
                                  ).toFixed(2)}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Cupom de desconto
                        </MDBTypography>

                        <div className="mb-5">
                          <MDBInput size="lg" label="Enter your code" />
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Preço total
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            R$
                            {(
                              parseFloat(state.cartValue) +
                              parseFloat(
                                selectedShipping?.fixed_amount?.amount || 0
                              ) /
                                100
                            ).toFixed(2)}
                          </MDBTypography>
                        </div>

                        <MDBBtn
                          color="dark"
                          block
                          size="lg"
                          onClick={handleCheckout}
                        >
                          Finalizar compra
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
