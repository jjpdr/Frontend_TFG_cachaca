import "./style.scss";

import { Link } from "react-router-dom";
import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";
import altLogo from "../../assets/img/alt-logo.png";

export default function UseTerms() {
    return (
        <div className="page-container-terms">
            <div className="fake-header">
                <Link to="/">
                    <LogoCdc className="logo" />
                </Link>
                <Link to="/">
                    <img
                        className="alt-logo"
                        src={altLogo}
                        alt="Clube da Cachaça"
                    />
                </Link>
            </div>
            <div className="use-terms-container">
                <div className="use-terms-header">
                    <h1>TERMOS DE USO</h1>
                </div>
                <div className="use-terms-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Porta nibh venenatis cras sed felis eget
                        velit aliquet sagittis. Accumsan in nisl nisi
                        scelerisque eu. Bibendum ut tristique et egestas quis
                        ipsum suspendisse ultrices. Interdum posuere lorem ipsum
                        dolor sit. Gravida in fermentum et sollicitudin ac orci
                        phasellus egestas. Et malesuada fames ac turpis egestas.
                        Tellus rutrum tellus pellentesque eu. Id diam maecenas
                        ultricies mi eget. Diam maecenas ultricies mi eget
                        mauris. Volutpat commodo sed egestas egestas fringilla
                        phasellus faucibus. Eleifend mi in nulla posuere.
                        Faucibus vitae aliquet nec ullamcorper sit amet risus
                        nullam eget. Quis ipsum suspendisse ultrices gravida
                        dictum. Pellentesque habitant morbi tristique senectus
                        et. Id volutpat lacus laoreet non curabitur. Nec
                        sagittis aliquam malesuada bibendum arcu vitae elementum
                        curabitur. Blandit libero volutpat sed cras ornare arcu.
                        Quisque sagittis purus sit amet volutpat consequat
                        mauris nunc congue. Imperdiet sed euismod nisi porta
                        lorem mollis. Fermentum posuere urna nec tincidunt
                        praesent semper feugiat. Semper feugiat nibh sed
                        pulvinar proin gravida hendrerit. Nulla facilisi nullam
                        vehicula ipsum a arcu cursus vitae. Arcu non odio
                        euismod lacinia. Dolor purus non enim praesent elementum
                        facilisis leo. Egestas sed tempus urna et pharetra
                        pharetra massa massa. Lectus sit amet est placerat in
                        egestas erat imperdiet. Ac turpis egestas integer eget
                        aliquet nibh praesent tristique magna. Vel turpis nunc
                        eget lorem dolor sed viverra ipsum nunc. Nec feugiat
                        nisl pretium fusce id velit ut. Adipiscing elit
                        pellentesque habitant morbi tristique senectus et. Porta
                        nibh venenatis cras sed felis eget. Amet aliquam id diam
                        maecenas ultricies mi eget. Volutpat ac tincidunt vitae
                        semper quis lectus nulla. Sagittis vitae et leo duis ut
                        diam quam nulla porttitor. Felis eget velit aliquet
                        sagittis id. Semper auctor neque vitae tempus quam
                        pellentesque. Odio ut enim blandit volutpat maecenas
                        volutpat blandit aliquam etiam. Nisi scelerisque eu
                        ultrices vitae auctor eu augue ut. Est lorem ipsum dolor
                        sit amet consectetur adipiscing elit pellentesque. Hac
                        habitasse platea dictumst quisque sagittis purus. Nisl
                        nunc mi ipsum faucibus vitae. Ac feugiat sed lectus
                        vestibulum mattis ullamcorper velit sed ullamcorper.
                        Cursus euismod quis viverra nibh cras pulvinar mattis
                        nunc sed. Lacus luctus accumsan tortor posuere ac.
                        Pharetra magna ac placerat vestibulum lectus mauris
                        ultrices eros. Diam vulputate ut pharetra sit amet.
                        Sagittis purus sit amet volutpat consequat. Sit amet
                        nisl purus in mollis nunc sed id. Ac auctor augue mauris
                        augue neque gravida. Lorem sed risus ultricies tristique
                        nulla aliquet. Velit scelerisque in dictum non
                        consectetur. Libero enim sed faucibus turpis in eu.
                        Egestas maecenas pharetra convallis posuere morbi leo
                        urna molestie. Lobortis feugiat vivamus at augue eget
                        arcu dictum. Eleifend mi in nulla posuere sollicitudin
                        aliquam ultrices sagittis. A cras semper auctor neque
                        vitae tempus quam pellentesque nec. Aliquet eget sit
                        amet tellus cras adipiscing. Natoque penatibus et magnis
                        dis parturient. Congue eu consequat ac felis donec et
                        odio pellentesque diam. Lacus vel facilisis volutpat est
                        velit egestas dui id. Bibendum ut tristique et egestas.
                        Varius sit amet mattis vulputate enim. Netus et
                        malesuada fames ac turpis egestas. Ac placerat
                        vestibulum lectus mauris ultrices eros. Id diam maecenas
                        ultricies mi eget mauris pharetra et ultrices.
                    </p>
                </div>
            </div>
            <div className="use-terms-footer">
                <p>
                    © 2021 CLUBE DA CACHAÇA. Todos os direitos reservados. Se
                    beber não dirija. Aprecie com moderação. A venda de bebidas
                    alcoólicas é proibida para menores de 18 anos.
                </p>
            </div>
        </div>
    );
}
