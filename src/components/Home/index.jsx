import React from 'react';
import './style.scss';

import Header from '../Header';

export default function Home() {
    return (
        <div className="home-container">
            <Header />
            <div className="page no-one">
                <div className="content">
                    <h1>O MAIOR CLUBE DE ASSINATURA DE CACHAÇA</h1>
                    <h3>Receba todo mês no conforto de sua casa as melhores cachaças do Brasil. Já são mais de 5 mil assinantes por todo o país!</h3>
                    <div className="btn-container">
                        <button className="btn btn-primary">CONHEÇA O CLUBE!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}