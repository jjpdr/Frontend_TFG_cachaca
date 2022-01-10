import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./style.scss";
import api from "../../services/api";

import loginIcon from "../../assets/img/login-icon.png";

import FacebookLogin from "../FacebookLogin";

import { ReactComponent as LogoFb } from "../../assets/img/logo-fb.svg";
import { ReactComponent as LogoGoogle } from "../../assets/img/logo-google.svg";
import Infos from "../Infos";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        api.post("/users/login", {
            email,
            password,
        })
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data.user));
                localStorage.setItem("token", JSON.stringify(res.data.token));
                localStorage.setItem(
                    "isAdmin",
                    JSON.stringify(res.data.user.isAdmin)
                );
                window.location.href = "/";
            })
            .catch((err) => {
                alert(err.response.data.message);
                window.location.reload();
            });
    };

    return (
        <div className="page-container-login">
            <Infos />
            <div className="login-container">
                <div className="top-container">
                    <div className="login-text">
                        <h2>LOGIN</h2>
                    </div>
                    <div className="login-icon">
                        <img
                            className="img"
                            src={loginIcon}
                            alt="Icone de login"
                        />
                    </div>
                </div>
                <div className="middle-container">
                    <input
                        onChange={(event) =>
                            handleChange(event.target.value, "email")
                        }
                        value={email}
                        type="text"
                        className="field"
                        placeholder="Email"
                    />
                    <input
                        onChange={(event) =>
                            handleChange(event.target.value, "password")
                        }
                        value={password}
                        type="password"
                        className="field"
                        placeholder="Senha"
                    />
                    <p>
                        <Link to="/forgot-password">ESQUECEU A SENHA?</Link>
                    </p>
                    <div className="button-enter">
                        <button
                            onClick={handleSubmit}
                            className="btn btn-enter"
                        >
                            ENTRAR
                        </button>
                        <div className="button-socialMedia">
                            <button className="btn btn-google">
                                <LogoGoogle className="icon-button google" />
                                ENTRAR COM GOOGLE
                            </button>
                            <FacebookLogin />
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <h4>
                        Ainda não tem conta?{" "}
                        <Link to="/register" className="register">
                            Faça seu cadastro.
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}
