import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/lib/styles.scss";
import ReactInputDateMask from "react-input-date-mask";
import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBFile,
} from "mdb-react-ui-kit";

export default function PaymentForm({
    cvc,
    setCvc,
    expiry,
    setExpiry,
    name,
    setName,
    number,
    setNumber,
}) {
    const [focus, setFocus] = useState(false);

    const handleInputFocus = (e) => {
        setFocus(e.target.name);
    };

    const handleInputChange = (e, name) => {
        switch (name) {
            case "cvc":
                setCvc(e.target.value);
                break;
            case "expiry":
                setExpiry(e.target.value);
                break;
            case "name":
                setName(e.target.value.toUpperCase());
                break;
            case "number":
                setNumber(e.target.value);
                break;
        }
    };

    return (
        <div id="PaymentForm">
            <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={name}
                number={number}
            />
            <MDBContainer>
                <MDBRow style={{ marginTop: "10px" }}>
                    <MDBInput
                        type="tel"
                        name="number"
                        onChange={(e) => handleInputChange(e, "number")}
                        onFocus={handleInputFocus}
                        label="Número do cartão"
                        maxLength={16}
                    />
                </MDBRow>
                <MDBRow style={{ marginTop: "10px" }}>
                    <MDBInput
                        type="text"
                        name="name"
                        label="Nome"
                        onChange={(e) => handleInputChange(e, "name")}
                        onFocus={handleInputFocus}
                        maxLength={30}
                        data-mdb-toggle="tooltip"
                        data-mdb-placement="bottom"
                        title="Igual ao nome no cartão"
                    />
                </MDBRow>
                <MDBRow
                    style={{
                        marginTop: "10px",
                    }}
                >
                    <MDBCol style={{ padding: "0px" }}>
                        <MDBInput
                            type="tel"
                            name="expiry"
                            label="Validade"
                            onChange={(e) => handleInputChange(e, "expiry")}
                            onFocus={handleInputFocus}
                            maxLength={7}
                            data-mdb-toggle="tooltip"
                            data-mdb-placement="top"
                            title="Formato MM/AAAA"
                        />
                    </MDBCol>
                    <MDBCol style={{ paddingRight: "0px" }}>
                        <MDBInput
                            type="tel"
                            name="cvc"
                            label="CVC"
                            onChange={(e) => handleInputChange(e, "cvc")}
                            onFocus={handleInputFocus}
                            maxLength={3}
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}
