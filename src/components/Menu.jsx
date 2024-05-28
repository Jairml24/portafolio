import './Menu.css'
import foto from '../assets/images/foto.jpg'
import SocialMedia from './SocialMedia'
import React, { useState } from 'react';

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen ? 'Menu is now closed' : 'Menu is now open');
    };
    return (
        <>
            <div className='container-hamburguer-menu' onClick={toggleMenu}>
                <div class="hamburger-menu">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
                <div className='circulo'></div>
                <img src={foto} alt="Foto perfil" /><br />
                <label>JONATAN JAIR</label>
                <div className='menu-items' onClick={toggleMenu}>
                    <ul>
                        <li><i class="fas fa-home"></i><a href="#inicio" >INICIO</a></li>
                        <li><i class="fas fa-info-circle"></i><a href="#acerca_de_mi">ACERCA DE MI</a></li>
                        <li><i class="fas fa-tools"></i><a href="#servicios">SERVICIOS</a></li>
                        <li><i class="fas fa-briefcase"></i><a href="#portafolio">PORTAFOLIO</a></li>
                        <li><i class="fas fa-envelope"></i><a href="#contacto">CONTÁCTAME</a></li>
                    </ul>
                </div>
                <SocialMedia />
            </div>
        </>
    )
}