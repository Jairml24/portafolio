import Card from './Card'
import html from './../assets/images/html.png'
import css from './../assets/images/css.png'
import js from './../assets/images/js.png'
import react from './../assets/images/react.png'
import php from './../assets/images/php.png'
import laravel from './../assets/images/laravel.png'
import wordpress from './../assets/images/wordpress.png'
import linux from './../assets/images/linux.png'

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
    <div id='acerca_de_mi'>
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
            <img width='100px' src={html}/>
            <img width='100px' src={css}/>
            <img width='100px' src={js}/>
            <img width='100px' src={react}/>
            <img width='100px' src={php}/>
            <img width='100px' src={laravel}/>
            <img width='100px' src={wordpress}/>
            <img width='100px' src={linux}/>
          </div>
        </div>
      </div>
    </div>
  )
}