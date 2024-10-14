import "./app.scss"
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/Navbar/NavBar"
import Parallax from "./Components/parallax/Parallax";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";
const App = () => {
  
    {/* <Cursor/> */}
    return (
    <div>
      <Cursor />
      <section id="Homepage">
      <NavBar/>
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      
      
      <section id="Contact">
        <Contact />
      </section> 
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    
    </div>
    );


}

export default App
