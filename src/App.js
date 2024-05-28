import Menu from "./components/Menu";
import AboutMe from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import './App.css'

export default function App() {
  return (
    <div className="m-0">
        <Menu /> 
      <div className="contenido">
        <AboutMe />
        <Education />   
        <Experience />   
        <Services />   
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}


