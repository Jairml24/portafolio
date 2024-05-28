import './Home.css'
import Button from './Button'
import foto from './../assets/images/foto.jpg'

export default function AboutMe(){
    return(
        <div id='inicio' className='home'>
            <aside >
                <h4>Hola, soy</h4>
                <h1 className='typing-effect'>Jonatan Jair</h1>
                <h5>Desarrollador de aplicaciones <span class="blinking-cursor">|</span></h5>
                <label htmlFor="">Desarrollador apasionado con experiencia en el diseño y desarrollo de servicios digitales. Me especializo en la creación de sitios web, servicios web y tiendas en línea modernos y elegantes, ademas del desarrollo de aplicaciones moviles.</label>
            <Button tittle='Descargar CV' url='https://drive.google.com/file/d/1rww6fJDkPEZvFQVF7bICbTuz7JyL5zkg/view?usp=sharing' />
            </aside>
            <div><img src={foto} alt="" / ></div>
        </div>
    )
}