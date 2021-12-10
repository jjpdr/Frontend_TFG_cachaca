import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { ReactComponent as LogoCdc } from '../../assets/img/logo-cdc.svg';
import userIcon from '../../assets/img/user-icon.png'

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="header-container">
            <div className="header">
                <LogoCdc className="logo" />
                <button className="btn btn-primary">FAÇA PARTE DO CLUBE!</button>
                <Link to="/produtos" className="btn">PRODUTOS</Link>
                <Link to="/categorias" className="btn">CATEGORIAS</Link>
                {!user ? (
                    <>
                        <Link to="/login" className="btn">LOGIN</Link>
                        <Link to="/register" className="btn btn-primary">CRIAR CONTA</Link>
                    </>
                ) : (
                    <div className="user-data">{user.name}<img alt="user" src={userIcon} /></div>
                )}
            </div>
        </div>
    )
}