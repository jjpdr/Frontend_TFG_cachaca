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
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardTitle,
  MDBTypography,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import userIcon from "../../assets/img/user-icon.png";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {});
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <section style={{ backgroundColor: "#eee", paddingTop: "2%" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={localStorage.getItem("picture") || userIcon}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <MDBIcon far icon="edit mb-5" />
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardHeader>Informações de pagamento</MDBCardHeader>
                <MDBCardBody className="p-0">
                  <MDBListGroup className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="cc-visa fa-2x"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText>VISA</MDBCardText>
                      <MDBCardText className="text-muted">
                        2511-****-****-1998
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="cc-mastercard fa-2x"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText>Master Card</MDBCardText>
                      <MDBCardText className="text-muted">
                        2511-****-****-1998
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="cc-paypal fa-2x"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText>Paypal</MDBCardText>
                      <MDBCardText className="text-muted">
                        2511-****-****-1998
                      </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="cc-apple-pay fa-2x"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText>Apple Pay</MDBCardText>
                      <MDBCardText className="text-muted">
                        2511-****-****-1998
                      </MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Nome completo</MDBCardText>
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
                      <MDBCardText>Data de nascimento</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {moment(user.birthday).format("DD/MM/yyyy")}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Plano atual</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {user.plan}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCardHeader tag="h4" style={{ paddingLeft: "10px" }}>
                      Informações de contato
                    </MDBCardHeader>
                    <MDBCol sm="3">
                      <MDBCardText>Endereço</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Rua Dr Sebastião Pereira Machado, 136 - Pinheirinho
                      </MDBCardText>
                    </MDBCol>
                    <MDBCol sm="3">
                      <MDBCardText>Cidade</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Itajubá</MDBCardText>
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
