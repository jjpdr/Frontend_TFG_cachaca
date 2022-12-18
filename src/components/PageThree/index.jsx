import { useState, useEffect } from "react";
import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";
import { MDBBtn } from "mdb-react-ui-kit";

import "./style.scss";
import api from "../../services/api";
<script src="https://kit.fontawesome.com/95a02bd20d.js"></script>;

export default function PageThree() {
  const [plans, setPlans] = useState([]);

  const handleSubscribe = (e, index) => {
    api
      .post("/checkout/plan-checkout-session", {
        lookup_keys: plans[index].lookup_key,
        price: plans[index].priceID,
        userID: localStorage.getItem("userID"),
      })
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .get("/plans")
      .then((res) => {
        setPlans(res.data.plans);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div id="page-three" className="page-container-page-three">
        <div>
          <h1>Planos disponíveis </h1>
        </div>
        <div className="container">
          <div className="container_card">
            {plans.length > 0 &&
              plans.map((plan, index) => (
                <div className="card1">
                  <div className="face face1">
                    <div className="content">
                      <LogoCdc className="logo" />
                      <h3>{plan.name}</h3>
                    </div>
                  </div>
                  <div className="face face2">
                    {plan.description}
                    <MDBBtn onClick={(e) => handleSubscribe(e, index)}>
                      Assine agora!
                    </MDBBtn>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
