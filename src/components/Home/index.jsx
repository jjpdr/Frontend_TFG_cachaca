import React, { useState } from "react";

import "./style.scss";

import Header from "../Header";
import { plans } from "../../constants/plans";

import iconWPP from "../../assets/img/icon-wpp.png";
import iconFB from "../../assets/img/icon-fb.png";
import iconINSTA from "../../assets/img/icon-insta.png";
import iconTEL from "../../assets/img/icon-tel.png";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";
import Footer from "../Footer";
import PageOne from "../PageOne";
import PageTwo from "../PageTwo";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Home() {
    const [selectedPlan, setSelectedPlan] = useState(1);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className="home-container">
            <Header />
            <PageOne />
            <PageTwo />
            <div id="page-three" className="page no-three">
                <div className="content">
                    <h1>Faça parte do Clube!</h1>
                    <div className="plans">
                        <div>
                            <div className="plan" key={selectedPlan.id}>
                                <h2>PLANO {plans[selectedPlan].name}</h2>
                                <ul>
                                    {plans[selectedPlan].infos.map((info) => {
                                        return <li>{info}</li>;
                                    })}
                                </ul>
                                <h2>
                                    R$ {plans[selectedPlan].price.toFixed(2)}
                                    <span>/mês</span>
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div className="selection">
                                <div className="plans-selection">
                                    <button
                                        className={`btn-plan ${
                                            selectedPlan === 0 && "selected"
                                        }`}
                                        onClick={() => handleSelectPlan(0)}
                                    >
                                        Regular
                                    </button>
                                    <button
                                        className={`btn-plan ${
                                            selectedPlan === 1 && "selected"
                                        }`}
                                        onClick={() => handleSelectPlan(1)}
                                    >
                                        Gold
                                    </button>
                                    <button
                                        className={`btn-plan ${
                                            selectedPlan === 2 && "selected"
                                        }`}
                                        onClick={() => handleSelectPlan(2)}
                                    >
                                        Extreme
                                    </button>
                                </div>
                                <div className="btn-container">
                                    <button>Saiba mais</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page no-four">
                <div className="content">
                    <div className="about">
                        <LogoCdc className="logo" />
                        <p>
                            Clube da Cachaça é um marketplace de bebidas de alta
                            qualidade, que conecta produtores artesanais
                            nacionais e importados e distribuidores com clientes
                            que buscam uma excelente curadoria de produtos e uma
                            experiência de compra fácil e intuitiva. Oferecemos
                            o serviço de fullfillment para nossos Sellers e o
                            serviço de entrega em até 60 minutos para nossos
                            clientes (verifique a região).
                        </p>
                    </div>
                    <div className="useful-links">
                        <div className="need-help">
                            <h2>Precisa de ajuda?</h2>
                            <h3>suporte@clubedacachaca.com.br</h3>
                        </div>
                        <div className="social-media">
                            <h2>Mídias sociais</h2>
                            <div className="icon-container">
                                <img
                                    src={iconWPP}
                                    className="social-media-icon"
                                    alt="WhatsApp"
                                />
                                <img
                                    src={iconINSTA}
                                    className="social-media-icon"
                                    alt="Instagram"
                                />
                                <img
                                    src={iconFB}
                                    className="social-media-icon"
                                    alt="Facebook"
                                />
                                <img
                                    src={iconTEL}
                                    className="social-media-icon"
                                    alt="Telefone"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
