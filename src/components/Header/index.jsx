import React from 'react';
import './style.scss';

import { ReactComponent as LogoCdc } from '../../assets/img/logo-cdc.svg';

export default function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <LogoCdc className="logo" />
                Header
            </div>
        </div>
    )
}