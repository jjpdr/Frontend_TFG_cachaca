import { MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import IntlTelInput from "react-bootstrap-intl-tel-input";

export default function ModalAddress(props) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { id } = useParams();
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [borough, setBorough] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (event, name) => {
    switch (name) {
      case "street":
        setStreet(event.target.value);
        break;
      case "number":
        setNumber(event.target.value);
        break;
      case "borough":
        setBorough(event.target.value);
        break;
      case "city":
        setCity(event.target.value);
        break;
      case "zipCode":
        setZipCode(event.target.value);
        break;
      case "state":
        setState(event.target.value);
        break;
      case "country":
        setCountry(event.target.value);
        break;
      case "phone":
        setPhone(event.intlPhoneNumber);
        break;
      default:
        break;
    }
  };

  const resetStates = () => {
    setStreet("");
    setNumber("");
    setBorough("");
    setCity("");
    setZipCode("");
    setState("");
    setCountry("");
    setPhone("");
    props.onHide();
  };

  const handleSubmit = async () => {
    const data = {
      street,
      number,
      borough,
      city,
      zipCode,
      state,
      country,
      phone,
    };

    api
      .post(`/users/address/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert(res.data.message);
        props.onHide();
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
        window.location.reload();
      });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adicionar informações de contato
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <MDBRow
            style={{
              marginTop: "10px",
            }}
          >
            <MDBCol sm="9">
              <MDBInput
                type="text"
                name="street"
                label="Endereço"
                onChange={(e) => handleInputChange(e, "street")}
                maxLength={100}
              />
            </MDBCol>
            <MDBCol sm="3">
              <MDBInput
                type="text"
                name="number"
                label="Número"
                onChange={(e) => handleInputChange(e, "number")}
                maxLength={6}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow
            style={{
              marginTop: "10px",
            }}
          >
            <MDBCol>
              <MDBInput
                type="text"
                name="borough"
                label="Bairro"
                onChange={(e) => handleInputChange(e, "borough")}
                maxLength={20}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                type="text"
                name="city"
                label="Cidade"
                onChange={(e) => handleInputChange(e, "city")}
                maxLength={20}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                type="text"
                name="zipCode"
                label="CEP"
                onChange={(e) => handleInputChange(e, "zipCode")}
                maxLength={8}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow
            style={{
              marginTop: "10px",
            }}
          >
            <MDBCol>
              <MDBInput
                type="text"
                name="state"
                label="Estado"
                onChange={(e) => handleInputChange(e, "state")}
                maxLength={20}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                type="text"
                name="country"
                label="País"
                onChange={(e) => handleInputChange(e, "country")}
                maxLength={20}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow
            style={{
              marginTop: "10px",
            }}
          >
            <MDBCol>
              <IntlTelInput
                preferredCountries={["BR", "US"]}
                defaultCountry={"BR"}
                onChange={(data) => handleInputChange(data, "phone")}
              />
            </MDBCol>
          </MDBRow>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleSubmit}>
          Aceitar
        </Button>
        <Button variant="ligth" onClick={resetStates}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
