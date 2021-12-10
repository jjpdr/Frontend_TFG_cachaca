import React from "react";

import { Link } from "react-router-dom";

import "./style.scss";

import altLogo from "../../assets/img/alt-logo.png";
import loginIcon from "../../assets/img/login-icon.png";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";

export default function ForgotPassword() {
  return (
    <div className="page-container-forgot-password">
      <div className="info-container">
        <div className="logo-container">
          <LogoCdc className="logo" />
        </div>
        <div className="welcome-back">
          <h2>BEM VINDO DE VOLTA</h2>
          <br />
          <p>
            Ficamos felizes que tenha gostado de fazer parte do nosso Clube!
            Fique ligado que sempre temos novidades!
          </p>
          <br />
          <p>Reposições de estoque e novos produtos toda semana!</p>
        </div>
        <div className="alternative-logo">
          <Link to="/" className="btn">
            <img src={altLogo} alt="Clube da Cachaça" />
          </Link>
        </div>
        <div className="footer-container">
          <p>
            © 2021 CLUBE DA CACHAÇA. Todos os direitos reservados. Se beber não
            dirija. Aprecie com moderação. A venda de bebidas alcoólicas é
            proibida para menores de 18 anos.
          </p>
        </div>
      </div>
      <div className="login-container">
        <div className="top-container">
          <div className="login-text">
            <h2>RECUPERAR SENHA</h2>
          </div>
          <div className="login-icon">
            <img className="img" src={loginIcon} alt="Icone de login" />
          </div>
        </div>
        <div className="middle-container">
          <input type="text" className="field" placeholder="Email" />
          <div className="help-text">
              <p>Será enviado um link de recuperação da senha para a sua caixa de entrada, caso não encontre, verifique a caixa de SPAM.</p>
          </div>
          <div className="button-enter">
            <button className="btn btn-send">ENVIAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
