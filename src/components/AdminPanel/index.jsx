import { Link } from "react-router-dom";

import Header from "../../components/Header";

import "./style.scss";

export default function AdminPanel() {
    return (
        <div className="page-container-admin-panel">
            <Header />
            <div className="content">
                <Link to="/admin-panel/register-product">
                    <button className="btn">CADASTRAR PRODUTO</button>
                </Link>
                <button className="btn">ATUALIZAR PRODUTO</button>
                <Link to="/admin-panel/delete-product">
                    <button className="btn">REMOVER PRODUTO</button>
                </Link>
            </div>
        </div>
    );
}
