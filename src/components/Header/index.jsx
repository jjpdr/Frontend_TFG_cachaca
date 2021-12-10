import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import api from '../../services/api';

import { ReactComponent as LogoCdc } from '../../assets/img/logo-cdc.svg';

export default function Header() {
    const getUser = async () => {
        const response = await api.get('/users', {});
        console.log(response);
    }

    return (
        <div className="header-container">
            <div className="header">
                <LogoCdc className="logo" />
                <button onClick={getUser} className="btn btn-primary">FAÇA PARTE DO CLUBE!</button>
                <Link to="/produtos" className="btn">PRODUTOS</Link>
                <Link to="/categorias" className="btn">CATEGORIAS</Link>
                <Link to="/login" className="btn">LOGIN</Link>
                <Link to="/register" className="btn btn-primary">CRIAR CONTA</Link>
            </div>
        </div>
    )
}