import { useState } from "react";

import { Link } from "react-router-dom";

import "./style.scss";
import api from "../../services/api";

import loginIcon from "../../assets/img/login-icon.png";

import FacebookLogin from "../../components/FacebookLogin";

import Infos from "../../components/Infos";
import { useUserContext } from "../../context/User";
import Header from "../../components/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setID } = useUserContext();

  const handleChange = (value, field) => {
    switch (field) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    api
      .post("/users/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userID", res.data.user._id);
        setID(res.data.user._id);
        window.location.href = "/";
      })
      .catch((err) => {
        alert(err.response.data.message);
        window.location.reload();
      });
  };

  return (
    <>
      <Header />
      <div className="page-container-login">
        <Infos />
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
            <input
              onChange={(event) => handleChange(event.target.value, "email")}
              value={email}
              type="text"
              className="field"
              placeholder="Email"
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSubmit();
              }}
            />
            <input
              onChange={(event) => handleChange(event.target.value, "password")}
              value={password}
              type="password"
              className="field"
              placeholder="Senha"
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSubmit();
              }}
            />
            <p>
              <Link to="/forgot-password">ESQUECEU A SENHA?</Link>
            </p>
            <div className="button-enter">
              <button onClick={handleSubmit} className="btn btn-enter">
                ENTRAR
              </button>
              <div className="button-socialMedia">
                <FacebookLogin />
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <p>
              Ainda não tem conta?{" "}
              <Link to="/register">Faça seu cadastro.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
