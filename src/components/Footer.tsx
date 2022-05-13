import '../styles/Footer.css';
import { SiTypescript, SiReact } from 'react-icons/si'
export default function Footer() {

  return (
    <footer className="footer">
     <p>© 2022 by Artur Henrique de Oliveira</p>
     <span>
       Feito com <SiTypescript /> e  <SiReact />
     </span>
    </footer>
  );
}