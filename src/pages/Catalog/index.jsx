import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
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
  MDBCardFooter,
  MDBRange,
  MDBCheckbox,
  MDBBtnGroup,
} from "mdb-react-ui-kit";

import Header from "../../components/Header";

import "./style.scss";

import api from "../../services/api";

import listContext from "../ShoppingCart/context";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sliderPrice, setSliderPrice] = useState(100);
  const [checkbox51, setCheckbox51] = useState(false);
  const [checkboxVB, setCheckboxVB] = useState(false);
  const [checkboxPA, setCheckboxPA] = useState(false);

  const handleChange = (value) => {
    setSliderPrice(value);
  };

  const handleCheckBoxChange = (checkbox) => {
    switch (checkbox) {
      case "51":
        setCheckbox51(!checkbox51);
        break;
      case "VB":
        setCheckboxVB(!checkboxVB);
        break;
      case "PA":
        setCheckboxPA(!checkboxPA);
        break;
      default:
        break;
    }
  };

  const sliderFilter = (product) => {
    if (
      product.price <= sliderPrice &&
      ((!checkbox51 && !checkboxVB && !checkboxPA) ||
        (checkbox51 && product.brand === "51") ||
        (checkboxVB && product.brand.toLowerCase() === "velho barreiro") ||
        (checkboxPA && product.brand.toLowerCase() === "pinga azul"))
    )
      return product;
  };

  const state = useContext(listContext);

  useEffect(() => {
    setFilterProducts(products.filter(sliderFilter));
  }, [sliderPrice, checkbox51, checkboxPA, checkboxVB]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data.products);
        setFilterProducts(res.data.products);
      })
      .catch((err) => {});
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className="div-container">
        <div className="filter">
          <MDBRange
            defaultValue={100}
            min="0"
            max="100"
            step="1"
            id="customRange3"
            label={`Mostrando produtos até R$ ${sliderPrice}`}
            onChange={(event) => handleChange(event.target.value)}
          />
          <MDBCheckbox
            name="btnCheck"
            btn
            id="btn-check"
            wrapperTag="span"
            label="Cachaça 51"
            checked={checkbox51}
            onChange={() => handleCheckBoxChange("51")}
          />
          <MDBCheckbox
            name="btnCheck"
            btn
            id="btn-check2"
            wrapperClass="mx-2"
            wrapperTag="span"
            label="Velho Barreiro"
            checked={checkboxVB}
            onChange={() => handleCheckBoxChange("VB")}
          />
          <MDBCheckbox
            name="btnCheck"
            btn
            id="btn-check3"
            wrapperTag="span"
            label="Pinga Azul"
            checked={checkboxPA}
            onChange={() => handleCheckBoxChange("PA")}
            className="btn btn-secondary btn-lg btn-block"
          />
        </div>
        <div className="grid">
          {filterProducts.length > 0 &&
            filterProducts.map((product) => (
              <div className="g-col-6">
                <MDBCard
                  style={{
                    maxWidth: "540px",
                    height: "250px",
                  }}
                >
                  <MDBRow className="g-0">
                    <MDBCol
                      md="4"
                      style={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Link
                        to={`/product/${product._id}`}
                        style={{ textDecoration: "none", color: "#395B64" }}
                      >
                        <MDBCardImage
                          src={`${BACKEND_URL}/products/image/${product.image}`}
                          alt={product.name}
                          className="product-image-catalog"
                          fluid
                        />
                      </Link>
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody>
                        <Link
                          to={`/product/${product._id}`}
                          style={{ textDecoration: "none", color: "#395B64" }}
                        >
                          <MDBCardTitle
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {product.name}
                          </MDBCardTitle>
                        </Link>
                        <MDBCardText
                          style={{ height: "70px", overflowY: "auto" }}
                        >
                          {product.description}
                        </MDBCardText>
                        <MDBCardText>R$ {product.price.toFixed(2)}</MDBCardText>
                      </MDBCardBody>
                      <MDBBtn onClick={() => state.addProduct(product)}>
                        + CARRINHO
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
