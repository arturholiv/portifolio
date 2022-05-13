import '../styles/Home.css';
import myPicture from './../assets/my-picture.png';
import { ImLocation } from 'react-icons/im';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
export default function Home() {

  return (
    <section className="home" id="home">
      <article className="article">
        <h2>
          Olá 👋, eu sou
        </h2>
        <h1>
          Artur Henrique de Oliveira
        </h1>
        <h2>
          Desenvolvedor FullStack Jr.
        </h2>

        <div className="location">
          <ImLocation className='icon'/>
          <h3>
            Contagem, MG
          </h3>
        </div>

        <div className="icons-gh-li">
          <a href="https://linkedin.com/in/arturholiv" target="_blank" className="link" rel="noreferrer">
           <BsLinkedin className='icon'/>
          </a>

          <a href="https://www.github.com/arturholiv/" target="_blank" className="link" rel="noreferrer">
           <BsGithub className='icon'/>
          </a>
          
          
        </div>

      </article>
      <img src={myPicture} alt="myPicture" className="myPicture" />
    </section>
  );
}