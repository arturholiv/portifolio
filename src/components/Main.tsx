import  Header from './Header';
import  Home from './Home';
import About from './About';
import '../styles/Main.css';

export default function Main() {

  return (
    <div className="main">
     <Header />
     <Home />
     <hr />
     <About />
     <hr />
    </div>
  );
}