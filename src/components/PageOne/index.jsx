import React from "react";

import "./style.scss";

export default function PageOne() {
    return (
        <div id="page-one" className="page-container-page-one">
            <div className="content">
                <div>
                    <h1>O MAIOR CLUBE DE ASSINATURA DE CACHAÇA</h1>
                    <h3>
                        Receba todo mês no conforto de sua casa as melhores
                        cachaças do Brasil. Já são mais de 5 mil assinantes por
                        todo o país!
                    </h3>
                </div>
                <div className="btn-container">
                    <a href="#page-four" className="btn btn-primary">
                        CONHEÇA O CLUBE!
                    </a>
                </div>
            </div>
        </div>
    );
}
