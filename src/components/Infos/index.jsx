import "./style.scss";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";

import Footer from "../Footer";

export default function Infos() {
  return (
    <>
      <div className="info-container">
        <div className="logo-container">
          <LogoCdc className="logo" />
        </div>
        <div className="welcome-back">
          <h2>BEM VINDO</h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            Realize o seu login para continuar comprando nossos produtos e
            também ver as ofertas disponíveis com os pacotes de assinatura!
          </p>
        </div>
      </div>
    </>
  );
}
