import React, { useState, useEffect } from "react";
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

import api from "../../services/api";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [products, setProducts] = useState([]);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  useEffect(() => {
    api
    .get("/marcas")
    .then( (res) => {
      setProducts(res.data.marcas);
      console.log(res.data.marcas);
      console.log(products);
    })
    .catch( (err) => {
      console.log(err);
    })
  }, [])


  return (
    <div className="home-container">
      <Header />
      <div id="page-one" className="page no-one">
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
      {products.length > 0 && (
        <div id="page-two" className="page no-two">
        <div className="content">
          <h2>Conheça alguns de nossos produtos!</h2>
          <div className="product">
            { 
            products.map(product => {
              return (
              <div className="product-items">
            <img src={`${BACKEND_URL}/marcas/image/${product.images[0]}`} alt="produto"/>
              <h2 className="name-font">{product.nome}</h2>
              <h2>{product.preco}</h2>
            </div>)
            })}
          </div>
        </div>
      </div>
      )}
      
      <div id="page-three" className="page no-three">
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
