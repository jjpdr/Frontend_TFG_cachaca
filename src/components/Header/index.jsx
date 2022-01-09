import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { ReactComponent as LogoCdc } from '../../assets/img/logo-cdc.svg';
import userIcon from '../../assets/img/user-icon.png'

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'));
    const adm = JSON.parse(localStorage.getItem('isAdmin'));

    const handleLogout = () => {
        window.alert(`Volte sempre ${user.name}!`)
        localStorage.removeItem('user');
        localStorage.removeItem('isAdmin');
        window.location.reload();
    }

    return (
        <div className="header-container">
            <div className="header">
                <Link to="/"><LogoCdc className="logo" /></Link>
                <a href="#page-three" className="btn btn-primary">FAÇA PARTE DO CLUBE!</a>
                <a href="#page-two" className="btn">PRODUTOS</a>
                <Link to="/categorias" className="btn">CATEGORIAS</Link>
                {!user ? (
                    <>
                        <Link to="/login" className="btn">LOGIN</Link>
                        <Link to="/register" className="btn btn-primary">CRIAR CONTA</Link>
                    </>
                ) : (<>
                    <div className="user-data">
                        {user.name}
                        <Link to={`/user/${user._id}`}>
                            <img alt="user" src={userIcon} />
                        </Link>
                        <button onClick={handleLogout} className="btn btn-primary">SAIR</button>
                    </div>
                </>
                )}
                {adm && (
                    <Link to="/admin-panel" className="btn btn-primary">PAINEL ADMINISTRADOR</Link>)}
            </div>
        </div>
    )
}