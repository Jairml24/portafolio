import './Menu.css'
import foto from '../assets/images/foto.jpg'
export default function Menu(){
    return(
        <div className='menu'>
            <img src={foto} alt="Foto perfil" / >
            <div className='menu-items'>
                <ul>
                    <li><a href="">INICIO</a></li>
                    <li><a href="">ACERCA DE MI</a></li>
                    <li><a href="">SERVICIOS</a></li>
                    <li><a href="">PORTAFOLIO</a></li>
                    <li><a href="">CONTÁCTAME</a></li>
                </ul>
            </div>
        </div>
    )
}