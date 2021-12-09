import React from "react";

import { Link } from 'react-router-dom';

import "./style.scss";

import altLogo from "../../assets/img/alt-logo.png";
import loginIcon from "../../assets/img/login-icon.png";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";
import { ReactComponent as LogoFb } from "../../assets/img/logo-fb.svg";
import { ReactComponent as LogoGoogle } from "../../assets/img/logo-google.svg";

export default function Login() {
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
         <Link to="/" className="btn"><img src={altLogo} alt="Clube da Cachaça" /></Link>
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
            <h2>LOGIN</h2>
          </div>
          <div className="login-icon">
            <img className="img" src={loginIcon} alt="Icone de login" />
          </div>
        </div>
        <div className="middle-container">
          <input type="text" className="field" placeholder="Email" />
          <input type="password" className="field" placeholder="Senha" />
          <p>ESQUECEU A SENHA?</p>
          <div className="button-enter">
            <button className="btn btn-enter">ENTRAR</button>
            <div className="button-socialMedia">
                <button className="btn btn-google"><LogoGoogle className="icon-button google"/>ENTRAR COM GOOGLE</button>
                <button className="btn btn-facebook"><LogoFb className="icon-button"/>ENTRAR COM FACEBOOK</button>
            </div>
          </div>
        </div>
        <div className="bottom-container">
            <h4>Ainda não tem conta? <Link to="/cadastro" className="register">Faça seu cadastro.</Link></h4>
        </div>
      </div>
    </div>
  );
}
