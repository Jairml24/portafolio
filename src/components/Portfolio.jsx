import './Portfolio.css'
import Information from './Information'
export default function Portfolio() {
  return (
    <div id='portafolio' className='portfolio'>
      <h2>MI PORTAFOLIO</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        <Information tittle='maestro_abad' description='Pagina web' url='http://elgranmaestroabad.com/'/>
        <Information tittle='maestro_amarres' description='Pagina web' url='http://maestroamarres.com/'/>
        <Information tittle='prestamos' description='Aplicación movil' url='https://drive.google.com/file/d/1U4Enlgi1XY5x4SK6hizGFCYdnSYkk4oZ/view?usp=sharing'/>
      </div>
    </div>
  )
}