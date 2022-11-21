import { React } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";
import "./style.scss";

export default function Footer() {
    return (
        <div className="footer-container">
            <footer className="footer-distributed">
                <div className="footer-left">
                    <LogoCdc className="logo" />

                    <p className="footer-company-name">
                        Clube da Cachaça © 2021
                    </p>
                </div>

                <div className="footer-center">
                    <div>
                        <i>
                            <FaLocationArrow />
                        </i>

                        <p>
                            <span>Universidade Federal de Itajubá</span>{" "}
                            Itajubá, Minas Gerais
                        </p>
                    </div>

                    <div>
                        <i>
                            <FaPhone />
                        </i>

                        <p>(53)999590966</p>
                    </div>

                    <div>
                        <i>
                            <FaEnvelope />
                        </i>

                        <p>
                            <a href="mailto:support@company.com">
                                suporte@clubedacachaca.com.br
                            </a>
                        </p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>© 2021 CLUBE DA CACHAÇA.</span>
                        Todos os direitos reservados. Se beber não dirija.
                        Aprecie com moderação. A venda de bebidas alcoólicas é
                        proibida para menores de 18 anos.
                    </p>
                </div>
            </footer>
        </div>
    );
}
