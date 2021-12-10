import React from "react";

import { Link } from "react-router-dom";

import "./style.scss";

import altLogo from "../../assets/img/alt-logo.png";
import loginIcon from "../../assets/img/login-icon.png";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";

export default function Register() {
  return (
    <div className="page-container">
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
            <h2>CADASTRE-SE</h2>
          </div>
          <div className="login-icon">
            <img className="img" src={loginIcon} alt="Icone de login" />
          </div>
        </div>
        <div className="middle-container">
          <input type="text" className="field" placeholder="Nome completo*" />
          <input type="text" className="field" placeholder="Email*" />
          <input type="text" className="field" placeholder="CPF*" />
          <input
            type="date"
            className="field"
            placeholder="Data de nascimento*"
          />
          <input type="password" className="field" placeholder="Senha*" />
          <input
            type="password"
            className="field"
            placeholder="Confirmar senha*"
          />
        </div>
        <div className="bottom-container">
          <h4>
            <input type="checkbox"></input>Li e aceito os{" "}
            <Link to="/use-terms" className="register">
              Termos de Uso.
            </Link>
          </h4>
        </div>
        <div className="bottom-container">
          <div className="button-enter">
            <button className="btn btn-enter">CADASTRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
