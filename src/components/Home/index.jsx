import React from 'react';
import './style.scss';

import Header from '../Header';

export default function Home() {
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
                                <h2>PLANO GOLD</h2>
                                <ul>
                                    <li>infos infos infos i</li>
                                    <li>infos infos infos i</li>
                                    <li>infos infos infos i</li>
                                    <li>infos infos infos i</li>
                                    <li>infos infos infos i</li>
                                    <li>infos infos infos i</li>
                                </ul>
                                <h2>R$ 75,90<span>/mês</span></h2>
                            </div>
                        </div>
                        <div>
                            <div className="selection">
                                <div className="plans-selection">
                                    <button className="btn-plan">Regular</button>
                                    <button className="btn-plan selected">Gold</button>
                                    <button className="btn-plan">Extreme</button>
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