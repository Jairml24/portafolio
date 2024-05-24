import './Home.css'
import Button from './Button'
import foto from './../assets/images/foto.jpg'

export default function AboutMe(){
    return(
        <div id='inicio' className='home'>
            <aside >
                <h4>Hola, soy</h4>
                <h1 className='typing-effect'>Jonatan Jair</h1>
                <h5>Soy un desarrollador apasionado <span class="blinking-cursor">|</span></h5>
                <label htmlFor="">Diseño y desarrollo servicios para clientes de todos los tamaños, especializándome en la creación de sitios web, servicios web y tiendas en línea modernos y elegantes.</label>
            <Button tittle='Descargar CV' />
            </aside>
            <img src={foto} alt="" / >
        </div>
    )
}