import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./style.scss";
import api from "../../services/api";
import Header from "../../components/Header";
import maskCPF from "../../services/maskCPF";

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardHeader,
} from "mdb-react-ui-kit";
import userIcon from "../../assets/img/user-icon.png";
import ModalCreditCard from "../../components/ModalCreditCard";
import ModalAddress from "../../components/ModalAddress";

export default function UserPage() {
    const token = JSON.parse(localStorage.getItem("token"));
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [modalCCShow, setModalCCShow] = useState(false);
    const [modalAddressShow, setModalAddressShow] = useState(false);

    const handleRemoveCC = (index) => {
        let paymentID = "";

        if (user && (paymentID = user.paymentMethod[index]._id));

        const data = {
            paymentID: user.paymentMethod[index]._id,
        };

        console.log(user);

        api.put(`/users/payment-method/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                alert(res.data.message);
                window.location.reload();
            })
            .catch((err) => {
                alert(err.response.data.message);
                window.location.reload();
            });
    };

    useEffect(() => {
        api.get(`/users/${id}`)
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Header />
            <section
                style={{
                    backgroundColor: "#eee",
                    paddingTop: "2%",
                    height: "100vh",
                }}
            >
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <MDBCardImage
                                        src={
                                            localStorage.getItem("picture") ||
                                            userIcon
                                        }
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: "150px" }}
                                        fluid
                                    />
                                    <MDBIcon far icon="edit mb-5" />
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                                <MDBCardHeader
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    Informações de pagamento
                                    <MDBIcon
                                        fas
                                        icon="plus fa-lg"
                                        style={{ color: "#333333" }}
                                        onClick={() => setModalCCShow(true)}
                                    ></MDBIcon>
                                    <ModalCreditCard
                                        show={modalCCShow}
                                        onHide={() => setModalCCShow(false)}
                                        centered={true}
                                    />
                                </MDBCardHeader>
                                <MDBCardBody className="p-0">
                                    <MDBListGroup className="rounded-3">
                                        {user.paymentMethod &&
                                            user.paymentMethod.map(
                                                (method, index) => (
                                                    <MDBListGroupItem
                                                        key={index}
                                                        className="d-flex justify-content-around align-items-center p-2"
                                                    >
                                                        <MDBIcon
                                                            fab
                                                            icon="cc-visa fa-2x"
                                                            style={{
                                                                color: "#333333",
                                                            }}
                                                        />
                                                        <MDBCardText>
                                                            VISA
                                                        </MDBCardText>
                                                        <MDBCardText className="text-muted">
                                                            {method.number.replace(
                                                                /.(?=.{4})/g,
                                                                "*"
                                                            )}
                                                        </MDBCardText>
                                                        <MDBIcon
                                                            fas
                                                            icon="times fa-md"
                                                            style={{
                                                                color: "#333333",
                                                            }}
                                                            onClick={() =>
                                                                handleRemoveCC(
                                                                    index
                                                                )
                                                            }
                                                        />
                                                    </MDBListGroupItem>
                                                )
                                            )}
                                    </MDBListGroup>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="8">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>
                                                Nome completo
                                            </MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                {user.name}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Email</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                {user.email}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>CPF</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                {maskCPF(user.cpf)}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>
                                                Data de nascimento
                                            </MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                {moment(user.birthday).format(
                                                    "DD/MM/yyyy"
                                                )}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Telefone</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                {user.address &&
                                                    user.address.phone}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>
                                                Plano atual
                                            </MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                {user.plan}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCardHeader
                                            tag="h4"
                                            style={{
                                                paddingLeft: "10px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            Informações de contato
                                            <MDBIcon
                                                fas
                                                icon="plus fa-sm"
                                                style={{ color: "#333333" }}
                                                onClick={() =>
                                                    setModalAddressShow(true)
                                                }
                                            ></MDBIcon>
                                            <ModalAddress
                                                show={modalAddressShow}
                                                onHide={() =>
                                                    setModalAddressShow(false)
                                                }
                                                centered={true}
                                            />
                                        </MDBCardHeader>

                                        {user.address && (
                                            <>
                                                <MDBCol sm="3">
                                                    <MDBCardText>
                                                        Endereço
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">
                                                        {`${user.address.street}, ${user.address.number} - ${user.address.borough}`}
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="3">
                                                    <MDBCardText>
                                                        Cidade
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">
                                                        {user.address.city}
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="3">
                                                    <MDBCardText>
                                                        Estado
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">
                                                        {user.address.state}
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="3">
                                                    <MDBCardText>
                                                        CEP
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">
                                                        {user.address.zipCode}
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="3">
                                                    <MDBCardText>
                                                        País
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">
                                                        {user.address.country}
                                                    </MDBCardText>
                                                </MDBCol>
                                            </>
                                        )}
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
