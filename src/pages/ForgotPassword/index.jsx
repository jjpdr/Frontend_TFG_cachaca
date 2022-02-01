import React from "react";

import "./style.scss";

import loginIcon from "../../assets/img/login-icon.png";

import Infos from "../../components/Infos";

export default function ForgotPassword() {
  return (
    <div className="page-container-forgot-password">
      <Infos />
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
