import React, { useState } from "react";

import { Link } from "react-router-dom";

import api from "../../services/api";
import "./style.scss";

import altLogo from "../../assets/img/alt-logo.png";
import loginIcon from "../../assets/img/login-icon.png";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (value, field) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "cpf":
        setCPF(value);
        break;
      case "date":
        setDate(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmpassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (!isChecked) {
      return alert("Por favor, concorde com os termos");
    }
    api
      .post("/users/register", {
        name,
        email,
        cpf,
        date,
        password,
        confirmpassword,
      })
      .then((res) => {
        alert('Cadastro efetuado com sucesso!');
        window.location.href = '/login';
      })
      .catch((err) => {
        alert(err.response.data.message);
        window.location.reload();
      });
  };

  return (
    <div className="page-container-register">
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
          <input
            onChange={(event) => handleChange(event.target.value, "name")}
            value={name}
            type="text"
            className="field"
            placeholder="Nome completo*"
          />
          <input
            onChange={(event) => handleChange(event.target.value, "email")}
            value={email}
            type="text"
            className="field"
            placeholder="Email*"
          />
          <input
            onChange={(event) => handleChange(event.target.value, "cpf")}
            value={cpf}
            type="text"
            className="field"
            placeholder="CPF*"
          />
          <input
            type="text"
            className="field"
            placeholder="Data de nascimento*"
            onChange={(event) => handleChange(event.target.value, "date")}
            value={date}
          />
          <input
            onChange={(event) => handleChange(event.target.value, "password")}
            value={password}
            type="password"
            className="field"
            placeholder="Senha*"
          />
          <input
            type="password"
            className="field"
            placeholder="Confirmar senha*"
            onChange={(event) =>
              handleChange(event.target.value, "confirmpassword")
            }
            value={confirmpassword}
          />
        </div>
        <div className="bottom-container">
          <h4>
            <input onClick={() => setIsChecked(!isChecked)} type="checkbox"></input>Li e aceito os{" "}
            <Link to="/use-terms" className="register">
              Termos de Uso.
            </Link>
          </h4>
        </div>
        <div className="bottom-container">
          <div className="button-enter">
            <button onClick={handleSubmit} className="btn btn-enter">
              CADASTRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
