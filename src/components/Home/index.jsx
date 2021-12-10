import React, { useState } from "react";
import "./style.scss";

import Header from "../Header";
import { plans } from "../../constants/plans";

import iconWPP from "../../assets/img/icon-wpp.png"
import iconFB from "../../assets/img/icon-fb.png"
import iconINSTA from "../../assets/img/icon-insta.png"
import iconTEL from "../../assets/img/icon-tel.png"
import cachaca51 from "../../assets/img/cachaca-51.png"
import velhobarreiro from "../../assets/img/velho-barreiro.png"
import novofogo from "../../assets/img/novo-fogo.png"

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="home-container">
      <Header />
      <div className="page no-one">
        <div className="content">
          <div>
            <h1>O MAIOR CLUBE DE ASSINATURA DE CACHAÇA</h1>
            <h3>
              Receba todo mês no conforto de sua casa as melhores cachaças do
              Brasil. Já são mais de 5 mil assinantes por todo o país!
            </h3>
          </div>
          <div className="btn-container">
            <button className="btn btn-primary">CONHEÇA O CLUBE!</button>
          </div>
        </div>
      </div>
      '
      <div className="page no-two">
        <div className="content">
          <h2>Conheça alguns de nossos produtos!</h2>
          <div className="product">
            <div className="product-items">
              <img src={cachaca51} alt="produto"/>
              <h2 className="name-font">CACHAÇA 51</h2>
              <h2>R$10,00</h2>
            </div>
            <div className="product-items">
            <img className="velho-barreiro" src={velhobarreiro} alt="produto"/>
              <h2 className="name-font">VELHO BARREIRO</h2>
              <h2>R$12,90</h2>
            </div>
            <div className="product-items">
            <img src={novofogo} alt="produto"/>
              <h2 className="name-font">NOVO FOGO</h2>
              <h2>R$15,00</h2>
            </div>
          </div>
        </div>
      </div>
      '
      <div className="page no-three">
        <div className="content">
          <h1>Faça parte do Clube!</h1>
          <div className="plans">
            <div>
              <div className="plan">
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
                    className={`btn-plan ${selectedPlan === 0 && "selected"}`}
                    onClick={() => handleSelectPlan(0)}
                  >
                    Regular
                  </button>
                  <button
                    className={`btn-plan ${selectedPlan === 1 && "selected"}`}
                    onClick={() => handleSelectPlan(1)}
                  >
                    Gold
                  </button>
                  <button
                    className={`btn-plan ${selectedPlan === 2 && "selected"}`}
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
              Clube da Cachaça é um marketplace de bebidas de alta qualidade,
              que conecta produtores artesanais nacionais e importados e
              distribuidores com clientes que buscam uma excelente curadoria de
              produtos e uma experiência de compra fácil e intuitiva. Oferecemos
              o serviço de fullfillment para nossos Sellers e o serviço de
              entrega em até 60 minutos para nossos clientes (verifique a
              região).
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
                <img src={iconWPP} className="social-media-icon" alt="WhatsApp" />
                <img src={iconINSTA} className="social-media-icon" alt="Instagram" />
                <img src={iconFB} className="social-media-icon" alt="Facebook" />
                <img src={iconTEL} className="social-media-icon" alt="Telefone" />

              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
            <p>© 2021 CLUBE DA CACHAÇA. Todos os direitos reservados. Se beber não dirija. Aprecie com moderação. A venda de bebidas alcoólicas é proibida para menores de 18 anos.</p>
        </div>
      </div>
    </div>
  );
}
