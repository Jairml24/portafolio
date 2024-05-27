import './Menu.css'
import foto from '../assets/images/foto.jpg'
import SocialMedia from './SocialMedia'

export default function Menu(){
    return(
        <div className='menu'>
            <div class>Hambur</div>
            <div className='circulo'></div>
            <img src={foto} alt="Foto perfil" / ><br />
            <label>JONATAN JAIR</label>
            <div className='menu-items'>
                <ul>
                    <li><i class="fas fa-home"></i><a href="#inicio">INICIO</a></li>
                    <li><i class="fas fa-info-circle"></i><a href="#acerca_de_mi">ACERCA DE MI</a></li>
                    <li><i class="fas fa-tools"></i><a href="#servicios">SERVICIOS</a></li>
                    <li><i class="fas fa-briefcase"></i><a href="#portafolio">PORTAFOLIO</a></li>
                    <li><i class="fas fa-envelope"></i><a href="#contacto">CONTÁCTAME</a></li>
                </ul>
            </div>
            <SocialMedia/>
        </div>
    )
}