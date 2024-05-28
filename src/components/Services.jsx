import Card from './Card'
import './Services.css'
const data = [
  {
    logo: '/images/pc.png',
    tittle: 'Desarrollo web',
    description: 'Creación de sitios web y plataformas funcionales e interactivas mediante el uso de tecnologías y herramientas como React para el desarrollo front-end, PHP para el desarrollo back-end, Wordpress para la creación de CMS y más.',
    time: ''
  },
  {
    logo: '/images/diseño.png',
    tittle: 'Diseño web',
    description: 'Elaboración de diseños de sitios web visualmente atractivos y fáciles de usar, centrándose en la estética, la usabilidad y las experiencias de usuario intuitivas.',
    time: ''
  },
  {
    logo: '/images/movil.png',
    tittle: 'Desarrollo de aplicaciones moviles',
    description: 'Creación de aplicaciones móviles innovadoras y funcionales para plataformas iOS y Android utilizando React Native,  Nos enfocamos en proporcionar una experiencia de usuario fluida y atractiva.',
    time: ''
  },
  {
    logo: '/images/api.png',
    tittle: 'Integración de APIs y Servicios Externos',
    description: 'Integración de APIs y servicios externos para potenciar tus aplicaciones con funcionalidades adicionales, como sistemas de pago, servicios de geolocalización, plataformas de redes sociales y más.',
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