import Card from './Card'
import './Services.css'
const data = [
  {
    logo: '/images/mpch.png',
    tittle: 'Desarrollo web',
    description: 'Creación de sitios web y plataformas funcionales e interactivos a través de lenguajes de codificación y programación como React, Php, Wordpress y más.',
    time: ''
  },
  {
    logo: '/images/untrm.png',
    tittle: 'Diseño web',
    description: 'Elaboración de diseños de sitios web visualmente atractivos y fáciles de usar, centrándose en la estética, la usabilidad y las experiencias de usuario intuitivas.',
    time: ''
  },
  {
    logo: '/images/untrm.png',
    tittle: 'Diseño web',
    description: 'Elaboración de diseños de sitios web visualmente atractivos y fáciles de usar, centrándose en la estética, la usabilidad y las experiencias de usuario intuitivas.',
    time: ''
  },
  {
    logo: '/images/untrm.png',
    tittle: 'Diseño web',
    description: 'Elaboración de diseños de sitios web visualmente atractivos y fáciles de usar, centrándose en la estética, la usabilidad y las experiencias de usuario intuitivas.',
    time: ''
  },
]
export default function Services() {
  return (
    <div id='servicios' className='services'>
      <h2>QUE ES LO QUE HAGO?</h2>
      <div>
        {data.map((element, index) => (
          <Card key={index} logo={element.logo} tittle={element.tittle} description={element.description} time={element.time} />
        ))}
      </div>
    </div>

  )
}