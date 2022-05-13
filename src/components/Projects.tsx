import '../styles/Projects.css';
import spotitrybeprint from '../assets/spotitrybeprint.png';
import trybewalletprint from '../assets/trybewalletprint.png';
import starwarsplanets from '../assets/starwarsplanets.png';
import { VscGithub } from 'react-icons/vsc';

export default function Projects() {

  return (
    <article className="projects" id="projects">
      <h2>
      Alguns projetos:
      </h2>
      <main  className="projects-container">
        <a href="https://arturholiv.github.io/spotitrybe/" target="_blank" className="project-container p-start p-1" rel='noreferrer'>
        <button className="project-btn"> <img className="project-image" alt="spoti print" src={ spotitrybeprint } /> SpotiTrybe </button>
        <p>
        Utilizando requisições da API do Spotify criamos o SpotTrybe para utilizar as playlists ouvir os trechos das músicas disponíveis pela API, utilizando HTML, CSS e Javascript Vanilla.
Na Aplicação é possível escolher uma mùsica selecionando antes, uma categoria e depois uma playlist, logo após serão disponibilizadas as músicas.
        </p>
        <a href="https://github.com/arturholiv/spotitrybe" target="_blank" rel='noreferrer' className="git-icon">
          <VscGithub />
        </a>
        </a>
        <a href="https://arturholiv.github.io/appdespesas/" target="_blank"  className="project-container p-end p-2" rel='noreferrer'>
        <button className="project-btn"> <img className="project-image" alt="wallet print" src={ trybewalletprint } /> App Carteira de Câmbio </button>
        <p>
        Projeto desenvolvido usando React Redux que consulta uma API de Câmbio de moedas e permite converter o valor na moeda escolhida para BRL (Real Brasileiro). Na aplicação é possível adicionar novas despesas por categoria e diferentes formas de pagamento, ao longo da expêrienci é possível ver o valor total com todas as despesas somadas. Ainda é possível deletar qualquer despesa desejada.
        </p>
        <a href="https://github.com/arturholiv/appdespesas" target="_blank" rel='noreferrer' className="git-icon">
          <VscGithub />
        </a>
        </a>
        <a href="https://arturholiv.github.io/StarWarsPlanetSearch/" target="_blank" className="project-container p-start p-3" rel='noreferrer'>
        <button className="project-btn"> <img className="project-image" alt="starwars print" src={ starwarsplanets } /> StarWars Planets Data </button>
         <p>
         Foi desenvolvida uma aplicação em React usando Hooks que consulta uma API com informações sobre alguns planetas do universo de StarWars. Na tela principal é possível pesqusiar informações sobre algum planeta filtrando pelo próprio nome ou utilizando iltros como período orbital, diâmetro, população etc.
         </p>
        <a href="https://github.com/arturholiv/StarWarsPlanetSearch" target="_blank" rel='noreferrer' className="git-icon">
          <VscGithub />
        </a>
        </a>
      </main>
    </article>
  );
}