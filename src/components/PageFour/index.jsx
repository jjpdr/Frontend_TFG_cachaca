import iconWPP from "../../assets/img/wpp.png";
import iconFB from "../../assets/img/face.png";
import iconINSTA from "../../assets/img/insta.png";
import iconTEL from "../../assets/img/phone.png";
import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";

import "./style.scss";

export default function PageFour() {
    return (
        <div className="page-container-page-four">
            <div id="page-four" className="content">
                <div className="about">
                    <div className="content">
                        <LogoCdc className="logo" />
                        <div className="text">
                            <h1> Quem Somos </h1>
                            <h5>Clube da Cachaça</h5>
                            <p>
                                Clube da Cachaça é um marketplace de bebidas de
                                alta qualidade, que conecta produtores
                                artesanais nacionais e importados e
                                distribuidores com clientes que buscam uma
                                excelente curadoria de produtos e uma
                                experiência de compra fácil e intuitiva.
                                Oferecemos o serviço de fullfillment para nossos
                                Sellers e o serviço de entrega em até 60 minutos
                                para nossos clientes (verifique a região).
                            </p>
                            <div className="icon-container">
                                <img
                                    src={iconWPP}
                                    className="social-media-iconwpp"
                                    alt="WhatsApp"
                                />
                                <img
                                    src={iconINSTA}
                                    className="social-media-icon"
                                    alt="Instagram"
                                />
                                <img
                                    src={iconFB}
                                    className="social-media-icon"
                                    alt="Facebook"
                                />
                                <img
                                    src={iconTEL}
                                    className="social-media-icontel"
                                    alt="Telefone"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
