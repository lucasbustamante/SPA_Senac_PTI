import React from 'react';
import './Header.css';
import logo from './src/assets/logo.png';

export default function Header() {
    return (
        <div>
            <a href="https://github.com/lucasbustamante/SPA_Senac_PTI" target="_blank">
                <img src={logo} className="logo foodlogo" alt="Logo" />
            </a>
        </div>
    )
}
