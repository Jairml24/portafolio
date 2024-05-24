import Menu from "./components/Menu";
import AboutMe from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import './App.css'

export default function App() {
  return (
    <div className="m-0">
      <div className="container-menu">
        <Menu /> 
      </div>
      <div className="contenido">
        <AboutMe />
        <Education />   
        <Experience />   
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}


