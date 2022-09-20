import '../styles/About.css';
import developerLogo from './../assets/undraw_developer.svg';

export default function About() {

  return (
    <section className="about" id="about">
      <img src={developerLogo} alt="developerLogo" className="developerLogo" />

      <aside className="aside">
        <h2>
          Sobre mim:
        </h2>
       <p>
       Me chamo Artur Henrique de Oliveira e tenho 21 anos. Sou estudante de desenvolvimento web fullstack na
        <a href="https://www.betrybe.com/" target="_blank" className="link-trybe" rel="noreferrer"> Trybe</a> e
        também de Análise e desenvolvimento de sistemas na Estácio de Sá. Atualmente sou estagiário de TI na  <a href="https://www.lideraviacao.com.br/pt-br/pagina-inicial" target="_blank" className="link-trybe" rel="noreferrer"> Líder Aviação </a> atuando com desenvolvimento .Net .
         <br />
         <br />
        Sou apaixonado por tecnologia e por ideias inovadoras o que me leva a ir em busca das melhores 
        soluções.
        <br />
        <br />
        Hoje o que mais me motiva na programação é a possibilidade de impactar positivamente
        na vida das pessoas e, por conta disso, sempre procuro me envolver em projetos que
        me desafiem, sejam voltados para a inovação e que estejam alinhados com meu propósito.
        <br />
        <br />
        Você pode ver minha tragetória no curso da Trybe pelo README 
        <a target="_blank" href="https://github.com/arturholiv/trybe-exercices" className="link-trybe" rel="noreferrer"> deste repositório</a>.
       </p>
      </aside>
    </section>
  );
}