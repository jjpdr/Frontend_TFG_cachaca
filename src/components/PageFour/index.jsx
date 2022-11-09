import iconWPP from "../../assets/img/icon-wpp.png";
import iconFB from "../../assets/img/icon-fb.png";
import iconINSTA from "../../assets/img/icon-insta.png";
import iconTEL from "../../assets/img/icon-tel.png";
import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";

import "./style.scss";

export default function PageFour() {
  return (
    <div className="page-container-page-four">
      <div id="page-four" className="content">
        <div className="about">
          <LogoCdc className="logo" />
          <p>
            Clube da Cachaça é um marketplace de bebidas de alta qualidade, que
            conecta produtores artesanais nacionais e importados e
            distribuidores com clientes que buscam uma excelente curadoria de
            produtos e uma experiência de compra fácil e intuitiva. Oferecemos o
            serviço de fullfillment para nossos Sellers e o serviço de entrega
            em até 60 minutos para nossos clientes (verifique a região).
          </p>
        </div>
        <div className="useful-links">
          <div className="need-help">
            <h2>Precisa de ajuda?</h2>
            <h3>suporte@clubedacachaca.com.br</h3>
          </div>
          <div className="social-media">
            <h2>Mídias sociais</h2>
            <div className="icon-container">
              <img src={iconWPP} className="social-media-icon" alt="WhatsApp" />
              <img
                src={iconINSTA}
                className="social-media-icon"
                alt="Instagram"
              />
              <img src={iconFB} className="social-media-icon" alt="Facebook" />
              <img src={iconTEL} className="social-media-icon" alt="Telefone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
