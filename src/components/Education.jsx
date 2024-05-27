import Card from './Card'
import Information from './Information'
import './Education.css'


const data = [{
  tittle: 'Ingeniera de Sistemas',
  description: 'Universidad Nacional Toribio Rodriguez de Mendoza',
  time: '2014-2019'
},
{
  tittle: 'Curso de JavaScript',
  description: 'Telefonica Movistar',
  time: '2022'
},
{
  tittle: 'Curso Linux Essentials',
  description: 'Secretaria del Gobierno Digital',
  time: '2022'
},
]
export default function Experience() {
  return (
    <div id='acerca_de_mi' className='about-me'>
      <h2>EDUCACIÓN Y HABILIDADES</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ width: '45%' }}>
          {data.map((element, index) => (
            <Card key={index} tittle={element.tittle} description={element.description} time={element.time} />
          ))}
        </div>
        <div>
          <h4 className='text-white text-center mb-4'>Mis habilidades</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <Information tittle='html' description='Lenguaje de etiquetas'/>
            <Information tittle='css' description='Lenguaje de estilos'/>
            <Information tittle='js' description='Lenguaje frontend'/>
            <Information tittle='react' description='Libreria de JS'/>
            <Information tittle='php' description='Lenguaje backend'/>
            <Information tittle='laravel' description='Framework de php'/>
            <Information tittle='wordpress' description='CMS de php'/>
            <Information tittle='linux' description='Sistema operativo'/>
          </div>
        </div>
      </div>
    </div>
  )
}