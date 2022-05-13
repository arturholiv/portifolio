import  Header from './Header';
import  Home from './Home';
import About from './About';
import Skills from './Skills';
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
    </div>
  );
}