import { useState } from "react";
import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";
import { plans } from "../../constants/plans";

import card_image1 from "../../assets/img/header_tfg2.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./style.scss";

<script src="https://kit.fontawesome.com/95a02bd20d.js"></script>;

export default function PageThree() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div id="page-three" className="page-container-page-three">
      <div class="container">
        <h1>Adquira já seu plano </h1>
        <div class="container_card">
          <div class="card1">
            <div class="face face1">
              <div class="content">
                <LogoCdc className="logo" />
                <h3>PLANO {plans[selectedPlan].name}</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  <ul>
                    {plans[selectedPlan].infos.map((info, index) => {
                      return <li key={index}>{info}</li>;
                    })}
                  </ul>
                </p>
                <a href="#" type="button">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="card1">
            <div class="face face1">
              <div class="content">
                <LogoCdc className="logo" />
                <h3>PLANO {plans[selectedPlan].name}</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  <ul>
                    {plans[selectedPlan].infos.map((info, index) => {
                      return <li key={index}>{info}</li>;
                    })}
                  </ul>
                </p>
                <a href="#" type="button">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="card1">
            <div class="face face1">
              <div class="content">
                <LogoCdc className="logo" />
                <h3>PLANO {plans[selectedPlan].name}</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  <ul>
                    {plans[selectedPlan].infos.map((info, index) => {
                      return <li key={index}>{info}</li>;
                    })}
                  </ul>
                </p>
                <a href="#" type="button">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
