import Card from './Card'
const data = [{
  logo: '/images/mpch.png',
  tittle: 'Desarrollador de aplicaciones web',
  description: 'MPCH | Presencial | Agosto 2020 - Diciembre 2023 - Desarrollador de aplicaciones con Framework Laravel - BD Postgres',
  time: 'TIEMPO COMPLETO'
},

{
  logo: '/images/gorea.png',
  tittle: 'Desarrollador de aplicaciones web',
  description: 'GOREA | Presencial | Enero 2019 - Diciembre 2020 - Desarrollo de aplicaciones con PHP',
  time: 'TIEMPO COMPLETO'
}
]
export default function Experience() {
  return (
    <div className='experience'>
      <h2>EXPERIENCIA</h2>
      {data.map((element, index) => (
        <Card key={index} logo={element.logo} tittle={element.tittle} description={element.description} time={element.time} />
      ))}
    </div>

  )
}