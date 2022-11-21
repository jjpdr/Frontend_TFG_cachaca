import { useState } from "react";
import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";
import { plans } from "../../constants/plans";

import "./style.scss";

<script src="https://kit.fontawesome.com/95a02bd20d.js"></script>;

export default function PageThree() {
    const [selectedPlan, setSelectedPlan] = useState(1);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div id="page-three" className="page-container-page-three">
            <div className="container">
                <h1>Adquira já seu plano </h1>
                <div className="container_card">
                    <div className="card1">
                        <div className="face face1">
                            <div className="content">
                                <LogoCdc className="logo" />
                                <h3>PLANO {plans[selectedPlan].name}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <ul>
                                    {plans[selectedPlan].infos.map(
                                        (info, index) => {
                                            return <li key={index}>{info}</li>;
                                        }
                                    )}
                                </ul>
                                <a href="#" type="button">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="face face1">
                            <div className="content">
                                <LogoCdc className="logo" />
                                <h3>PLANO {plans[selectedPlan].name}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <ul>
                                    {plans[selectedPlan].infos.map(
                                        (info, index) => {
                                            return <li key={index}>{info}</li>;
                                        }
                                    )}
                                </ul>
                                <a href="#" type="button">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="face face1">
                            <div className="content">
                                <LogoCdc className="logo" />
                                <h3>PLANO {plans[selectedPlan].name}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <ul>
                                    {plans[selectedPlan].infos.map(
                                        (info, index) => {
                                            return <li key={index}>{info}</li>;
                                        }
                                    )}
                                </ul>
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
