import { useState, useEffect } from "react";

import api from "../../services/api";

import "./style.scss";

export default function PageThree() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [plans, setPlans] = useState([]);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubscribe = () => {
    api
      .post("/checkout/plan-checkout-session", {
        lookup_keys: plans[selectedPlan].lookup_key,
        price: plans[selectedPlan].priceID,
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
    <div id="page-three" className="page-container-page-three">
      <div className="content">
        <h1>Faça parte do Clube!</h1>
        <div className="plans">
          <div>
            <div className="plan">
              {plans.length > 0 && (
                <>
                  <h2>{plans[selectedPlan].name}</h2>
                  <p>{plans[selectedPlan].description}</p>
                  <h2>
                    R$ {plans[selectedPlan].price.toFixed(2)}
                    <span>/mês</span>
                  </h2>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="selection">
              <div className="plans-selection">
                {plans.map((plan, index) => (
                  <button
                    className={`btn-plan ${
                      selectedPlan === index && "selected"
                    }`}
                    onClick={() => handleSelectPlan(index)}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
              <div className="btn-container">
                <button onClick={handleSubscribe}>Assine agora!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
