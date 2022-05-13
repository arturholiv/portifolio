import  Header from './Header';
import  Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';
import '../styles/Main.css';

export default function Main() {

  return (
    <div className="main">
     <Header />
     <Home />
     <hr />
     <About />
     <hr />
     <Skills />
     <hr />
     <Projects />
     <hr />
     <Contact />
     <Footer />
    </div>
  );
}