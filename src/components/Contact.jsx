import './Contact.css'
import Button from './Button'
import SocialMedia from './SocialMedia'

export default function Contact() {
  return (
    <div id='contacto' className='contact'>
      <h2>CONTACTO</h2>
      <div>
        <div>
          <h4>¿Cuál es tu historia? <br />Ponerse en contacto</h4>
          <label>Siempre disponible para trabajos independientes o de tiempo completo si surge el proyecto adecuado. No dudes en ponerte en contacto conmigo.</label>
          <h6><i class="fas fa-map-marker-alt"></i> Chachapoyas, Perú</h6>
          <h6><i class="fas fa-envelope"></i> jonatanml24@gmail.com</h6>
          <h6><i class="fas fa-phone"></i> +51 976 373 935</h6>
          <SocialMedia/>
        </div>

        {/* contact form  */}
        <form className='row'>
          <input className='col-12 col-md-4' type="text" placeholder='Nombre *' />
          <input className='col-12 col-md-6' type="text" placeholder='Correo electrónico *' />
          <input className='col-12 col-md-11' type="text" placeholder='Asunto *' />
          <textarea className='col-12 col-md-11' name="" placeholder='Mensaje *'></textarea>
          <div> <Button tittle='Enviar mensaje' /></div>
        </form>
      </div>


    </div>
  )
}