import "./style.scss";

import { Link } from "react-router-dom";
import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";

import altLogo from "../../assets/img/alt-logo.png";
import Footer from "../Footer";

export default function Infos() {
  return (
    <div className="info-container">
      <div className="logo-container">
        <LogoCdc className="logo" />
      </div>
      <div className="welcome-back">
        <h2>BEM VINDO DE VOLTA</h2>
        <br />
        <p>
          Ficamos felizes que tenha gostado de fazer parte do nosso Clube! Fique
          ligado que sempre temos novidades!
        </p>
        <br />
        <p>Reposições de estoque e novos produtos toda semana!</p>
      </div>
      <div className="alternative-logo">
        <Link to="/" className="btn">
          <img src={altLogo} alt="Clube da Cachaça" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
