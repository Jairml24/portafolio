import './Portfolio.css'
import Information from './Information'
export default function Portfolio() {
  return (
    <div id='portafolio' className='portfolio'>
      <h2>MI PORTAFOLIO</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        <Information tittle='prestamos' description='Aplicación movil' url='https://drive.google.com/file/d/1op1qHeJck935HfczFq2Xlyc9W0TKDtDA/view?usp=sharing' />
        <Information tittle='superheroes' description='Pagina web' url='https://jonatandev-superheroes.netlify.app/' />
        <Information tittle='maestro_abad' description='Pagina web' url='http://elgranmaestroabad.com/' />
        <Information tittle='maestro_amarres' description='Pagina web' url='http://maestroamarres.com/' />
        <Information tittle='peliculas' description='Pagina web' url='https://jonatanpelis.netlify.app/' />
        <Information tittle='tic' description='Pagina web' url='https://jonatangame.netlify.app/' />
      </div>
    </div>
  )
}