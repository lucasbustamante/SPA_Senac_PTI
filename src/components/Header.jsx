import React from 'react'; // Importe o React, se ainda não o fez
import './Header.css';

export default function Header() {
    return (
        <div>
            <a href="https://github.com/lucasbustamante/SPA_Senac_PTI" target="_blank">
                <img src={('src/assets/logo.png')} className="logo foodlogo" alt="Vite logo" />
            </a>
        </div>
    )
}
