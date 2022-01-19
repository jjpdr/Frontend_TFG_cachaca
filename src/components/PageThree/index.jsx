import React, { useState } from "react";

import { plans } from "../../constants/plans";

import "./style.scss";

export default function PageThree() {
    const [selectedPlan, setSelectedPlan] = useState(1);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div id="page-three" className="page-container-page-three">
            <div className="content">
                <h1>Faça parte do Clube!</h1>
                <div className="plans">
                    <div>
                        <div className="plan">
                            <h2>PLANO {plans[selectedPlan].name}</h2>
                            <ul>
                                {plans[selectedPlan].infos.map(
                                    (info, index) => {
                                        return <li key={index}>{info}</li>;
                                    }
                                )}
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
            ;
        </div>
    );
}
