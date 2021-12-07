import React, { useState } from 'react';
import './style.scss';

import Header from '../Header';
import { plans } from '../../constants/plans';

export default function Home() {
    const [selectedPlan, setSelectedPlan] = useState(1);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    }

    return (
        <div className="home-container">
            <Header />
            <div className="page no-one">
                <div className="content">
                    <div>
                        <h1>O MAIOR CLUBE DE ASSINATURA DE CACHAÇA</h1>
                        <h3>Receba todo mês no conforto de sua casa as melhores cachaças do Brasil. Já são mais de 5 mil assinantes por todo o país!</h3>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-primary">CONHEÇA O CLUBE!</button>
                    </div>
                </div>
            </div>
            <div className="page no-two">
                <div className="content">
                    <h2>Conheça alguns de nossos produtos!</h2>
                    <div className="product">
                        
                    </div>
                </div>
            </div>
            <div className="page no-three">
                <div className="content">
                    <h1>Faça parte do Clube!</h1>
                    <div className="plans">
                        <div>
                            <div className="plan">
                                <h2>PLANO {plans[selectedPlan].name}</h2>
                                <ul>
                                    {plans[selectedPlan].infos.map((info) => {
                                        return (<li>{info}</li>);
                                    })}
                                </ul>
                                <h2>R$ {plans[selectedPlan].price.toFixed(2)}<span>/mês</span></h2>
                            </div>
                        </div>
                        <div>
                            <div className="selection">
                                <div className="plans-selection">
                                    <button className={`btn-plan ${selectedPlan === 0 && 'selected'}`} onClick={() => handleSelectPlan(0)}>Regular</button>
                                    <button className={`btn-plan ${selectedPlan === 1 && 'selected'}`} onClick={() => handleSelectPlan(1)}>Gold</button>
                                    <button className={`btn-plan ${selectedPlan === 2 && 'selected'}`} onClick={() => handleSelectPlan(2)}>Extreme</button>
                                </div>
                                <div className="btn-container">
                                    <button>Saiba mais</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}