import { Link } from "react-router-dom";
import "./style.scss";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";
import userIcon from "../../assets/img/user-icon.png";

import ButtonComponent from "../Buttons";

export default function Header() {
    const user = JSON.parse(localStorage.getItem("user"));
    const adm = JSON.parse(localStorage.getItem("isAdmin"));

    const handleLogout = () => {
        window.alert(`Volte sempre ${user.name}!`);
        localStorage.removeItem("user");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("picture");
        window.location.reload();
    };

    return (
        <div className="header-container">
            <div className="header">
                <Link to="/">
                    <LogoCdc className="logo" />
                </Link>
                <ButtonComponent
                    tag="a"
                    destination="#page-three"
                    type="primary"
                    text="FAÇA PARTE DO CLUBE!"
                />
                <ButtonComponent
                    tag="a"
                    destination="#page-two"
                    type="secondary"
                    text="PRODUTOS"
                />
                <ButtonComponent
                    tag="Link"
                    destination="/catalog"
                    type="secondary"
                    text="CATÁLOGO"
                />
                {!user ? (
                    <>
                        <ButtonComponent
                            tag="Link"
                            destination="/login"
                            type="secondary"
                            text="LOGIN"
                        />
                        <ButtonComponent
                            tag="Link"
                            destination="/register"
                            type="primary"
                            text="CRIAR CONTA"
                        />
                    </>
                ) : (
                    <>
                        <div className="user-data">
                            <Link
                                to={`/user/${user._id}`}
                                className="user-info"
                            >
                                <img
                                    alt="user"
                                    src={
                                        localStorage.getItem("picture") ||
                                        userIcon
                                    }
                                />
                                {user.name}
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="btn btn-primary"
                            >
                                SAIR
                            </button>
                        </div>
                    </>
                )}
                {adm && (
                    <ButtonComponent
                        tag="Link"
                        destination="/admin-panel"
                        type="primary"
                        text="PAINEL ADMINISTRADOR"
                    />
                )}
            </div>
        </div>
    );
}
