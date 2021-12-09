import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { ReactComponent as LogoCdc } from '../../assets/img/logo-cdc.svg';

export default function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <LogoCdc className="logo" />
                <button className="btn btn-primary">FAÇA PARTE DO CLUBE!</button>
                <Link to="/produtos" className="btn">PRODUTOS</Link>
                <Link to="/categorias" className="btn">CATEGORIAS</Link>
                <Link to="/login" className="btn">LOGIN</Link>
                <Link to="/cadastro" className="btn btn-primary">CRIAR CONTA</Link>
            </div>
        </div>
    )
}