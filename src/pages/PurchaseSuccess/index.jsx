import {
  MDBCard,
  MDBCardHeader,
  MDBIcon,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import Header from "../../components/Header";

export default function PurchaseSuccess() {
  return (
    <>
      <Header />
      <MDBCard
        style={{
          height: "100vh",
          paddingTop: "7%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MDBCardHeader>
          <MDBIcon
            fas
            icon="check-circle fa-10x"
            style={{ color: "green" }}
          ></MDBIcon>
        </MDBCardHeader>
        <MDBCardBody
          style={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MDBCardTitle>Pagamento realizado com sucesso!</MDBCardTitle>
          <MDBCardText style={{ textAlign: "center" }}>
            Enviamos o recibo para o seu email{" "}
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter className="text-muted">
          No caso de dúvidas, entre em contato com o nosso suporte através do
          e-mail joaop.unifei@gmail.com
        </MDBCardFooter>
      </MDBCard>
    </>
  );
}
