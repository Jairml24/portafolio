import WordCard from "./components/WorkCard";
import Menu from "./components/Menu";
import './App.css'

const data = [
  {
    logo: '/images/mpch.png',
    servicio: 'Desarrollador de aplicaciones web',
    detalle: 'MPCH | Presencial | Agosto 2020 - Diciembre 2023 - Desarrollador de aplicaciones con Framework Laravel - BD Postgres',
    tiempo: 'TIEMPO COMPLETO'
  },
  {
    logo: '/images/untrm.png',
    servicio: 'Desarrollador de aplicaciones moviles',
    detalle: 'UNTRM | Presencial | Enero 2024 - Diciembre 2024 - Desarrollo de aplicaciones con React Native',
    tiempo: 'TIEMPO COMPLETO'
  },
  {
    logo: '/images/gorea.png',
    servicio: 'Desarrollador de aplicaciones web',
    detalle: 'GOREA | Presencial | Enero 2019 - Diciembre 2020 - Desarrollo de aplicaciones con PHP',
    tiempo: 'TIEMPO COMPLETO'
  }
]
export default function App() {
  return (
    <div className="row m-0">
      <div className="col-12 col-md-2 p-0 container-menu">
        <Menu />
      </div>
      
      <div className="col-12 col-md-10 p-0">
        {data.map((element, index) => (
          <WordCard key={index} logo={element.logo} servicio={element.servicio} detalle={element.detalle} tiempo={element.tiempo} />
        ))}
      </div>
    </div>
  );
}


