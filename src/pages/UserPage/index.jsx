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

export default function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        api.get(`/users/${id}`)
            .then((res) => {
                setUser(res.data.user);
                console.log(user);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, [user.paymentMethod]);

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
                                        onClick={() => setModalShow(true)}
                                    ></MDBIcon>
                                    <ModalCreditCard
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        centered={true}
                                    />
                                </MDBCardHeader>
                                <MDBCardBody className="p-0">
                                    <MDBListGroup className="rounded-3">
                                        {user.paymentMethod &&
                                            user.paymentMethod.map((method) => (
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
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
                                                </MDBListGroupItem>
                                            ))}
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
                                            style={{ paddingLeft: "10px" }}
                                        >
                                            Informações de contato
                                        </MDBCardHeader>
                                        <MDBCol sm="3">
                                            <MDBCardText>Endereço</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                Rua Dr Sebastião Pereira
                                                Machado, 136 - Pinheirinho
                                            </MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="3">
                                            <MDBCardText>Cidade</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                Itajubá
                                            </MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="3">
                                            <MDBCardText>Estado</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                Minas Gerais
                                            </MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="3">
                                            <MDBCardText>CEP</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                37500-175
                                            </MDBCardText>
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
