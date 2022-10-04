import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import PaymentMethod from "../PaymentMethod";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function ModalCreditCard(props) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { id } = useParams();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = async () => {
    const data = {
      name,
      number,
      cvc,
      expiry,
    };

    api
      .post(`/users/payment-method/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert("Cadastro efetuado com sucesso!");
        props.onHide();
        // window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
        // window.location.reload();
      });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adicionar novo método de pagamento
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <PaymentMethod
            cvc={cvc}
            setCvc={setCvc}
            expiry={expiry}
            setExpiry={setExpiry}
            name={name}
            setName={setName}
            number={number}
            setNumber={setNumber}
          />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleSubmit}>
          Aceitar
        </Button>
        <Button variant="ligth" onClick={props.onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
