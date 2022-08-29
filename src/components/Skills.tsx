import '../styles/Skills.css';
import { FaCss3Alt, FaHtml5, FaReact, FaDocker, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiRedux, SiJest, SiMysql, SiTypescript, SiChai, SiTestinglibrary, SiMocha, SiCsharp, SiPython } from 'react-icons/si'

export default function Skills() {

  return (
    <article className="skills" id="skills">
      {/* <img alt="code" src="https://img.icons8.com/ios-filled/100/000000/google-code.png" /> */}
      <main className="my-habilities">
        <h2>Minhas Habilidades</h2>
        <div className="skillset-container">
        <section className="skills-section">
            <h3>Linguagens</h3>
            <div className="skills">
              <button className="skill-btn"> <IoLogoJavascript className="skill-icon"/> JavaScript </button>
              <button className="skill-btn"> <SiTypescript className="skill-icon"/> Typescript </button>
              <button className="skill-btn"> <SiCsharp className="skill-icon"/> C# </button>
              <button className="skill-btn"> <SiPython className="skill-icon"/> Python </button>
            </div>
          </section>
          
          <section className="skills-section">
          <h3>FrontEnd</h3>
            <div className="skills">
              <button className="skill-btn"> <FaHtml5 className="skill-icon"/> HTML5 </button>
              <button className="skill-btn"> <FaCss3Alt className="skill-icon"/> CSS3 </button>
              <button className="skill-btn"> <FaReact className="skill-icon"/> React </button>
              <button className="skill-btn"> <SiRedux className="skill-icon"/> Redux </button>
            </div>
          </section>

          <section className="skills-section">
            <h3>BackEnd</h3>
            <div className="skills">
              <button className="skill-btn"> <FaDocker className="skill-icon"/> Docker </button>
              <button className="skill-btn"> <SiMysql className="skill-icon"/> MySQL </button>
              <button className="skill-btn"> <FaNodeJs className="skill-icon"/> NodeJS </button>
            </div>
          </section>

          <section className="skills-section">
            <h3>Testes</h3>
            <div className="skills">
              <button className="skill-btn"> <SiJest className="skill-icon"/> Jest </button>
              <button className="skill-btn"> <SiTestinglibrary className="skill-icon"/> RTL </button>
              <button className="skill-btn"> <SiMocha className="skill-icon"/> Mocha </button>
              <button className="skill-btn"> <SiChai className="skill-icon"/> Chai </button>
            </div>
          </section>
        </div>
      </main>
    </article>
  );
}