import { Link } from "react-router-dom";
import useTracksEffect from "../hooks/useTracksEffect.js";
import { useState } from "react";
export default function Front() {
  const { showBackToTop, scrollToTop, expandedResources, toggleResource } = useTracksEffect();
  const [conteudo, setConteudo] = useState("Home");
  return (
    <>
      <div className="track-container">
        <header className="track-header">
          <nav>
            <Link to="/">
              <button
                className="track-home-btn"
                onMouseEnter={() => setConteudo("Voltar")}
                onMouseLeave={() => setConteudo("Home")}
              >
                <i className="fa-solid fa-house"></i> {conteudo}
              </button>
            </Link>
          </nav>

          <h1 className="track-title">Jornada Front-End Completo</h1>
          <p className="track-subtitle">
            Domine o desenvolvimento web front-end seguindo este guia passo a
            passo, do básico ao avançado — com foco em JavaScript moderno
          </p>
        </header>

        <div className="learning-path">

          {/* Passo 1: Fundamentos da Web */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <h2 className="step-title">Como a Web Funciona</h2>
              </div>
              <p className="step-subtitle">Passo 1: Fundamentos da Internet</p>
              <p className="step-content">
                Antes de escrever qualquer linha de código, entenda como a internet
                funciona por baixo dos panos — é o alicerce de tudo que você vai
                construir.
              </p>
              <ul className="step-topics">
                <li>Como funciona o HTTP/HTTPS</li>
                <li>DNS, domínios e hospedagem</li>
                <li>Como os navegadores renderizam páginas</li>
                <li>O que são clientes e servidores</li>
                <li>APIs e o modelo Request/Response</li>
                <li>Introdução ao terminal (linha de comando)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step1")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step1"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step1"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.cursoemvideo.com/curso/html5-css3-modulo1/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Como a Internet Funciona - Curso em Vídeo
                    </a>
                    <a href="https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Introdução ao Terminal - Rocketseat
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/How_the_Web_works" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> MDN - Como a Web Funciona (Documentação)
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-globe"></i>
            </div>
          </div>

          {/* Passo 2: HTML5 */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fab fa-html5"></i>
                </div>
                <h2 className="step-title">HTML5 Fundamentos</h2>
              </div>
              <p className="step-subtitle">Passo 2: Estrutura da Web</p>
              <p className="step-content">
                HTML é o esqueleto de toda página web. Aprenda a criar estruturas
                semânticas, acessíveis e bem organizadas desde o início.
              </p>
              <ul className="step-topics">
                <li>Tags essenciais e estrutura de documento</li>
                <li>Elementos semânticos (header, main, section, article, footer)</li>
                <li>Formulários e validação nativa</li>
                <li>Acessibilidade básica (ARIA, alt, roles)</li>
                <li>Mídias: imagens, vídeos e áudios</li>
                <li>SEO básico com HTML</li>
                <li>Meta tags e favicon</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step2")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step2"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step2"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - HTML5 (Gustavo Guanabara)
                    </a>
                    <a href="https://www.youtube.com/@MarcoBruno" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Marco Bruno - HTML Semântico
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> MDN Web Docs - HTML (Documentação)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/curso-web/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - HTML Essencial
                    </a>
                    <a href="https://www.alura.com.br/formacao-html-css" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação HTML e CSS
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fab fa-html5"></i>
            </div>
          </div>

          {/* Passo 3: CSS Moderno */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <h2 className="step-title">CSS Moderno</h2>
              </div>
              <p className="step-subtitle">Passo 3: Estilização e Design</p>
              <p className="step-content">
                CSS transforma estrutura em experiência visual. Domine desde o
                básico até técnicas modernas de layout e responsividade.
              </p>
              <ul className="step-topics">
                <li>Seletores, especificidade e cascata</li>
                <li>Box Model e posicionamento</li>
                <li>Flexbox (layout unidimensional)</li>
                <li>CSS Grid (layout bidimensional)</li>
                <li>Design Responsivo e Media Queries</li>
                <li>Variáveis CSS (Custom Properties)</li>
                <li>Animações e Transições</li>
                <li>Pseudo-elementos e pseudo-classes</li>
                <li>Metodologia BEM</li>
                <li>Pré-processadores: SASS/SCSS</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step3")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step3"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step3"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - CSS3
                    </a>
                    <a href="https://www.youtube.com/@MarcoBruno" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Marco Bruno - Pare de Chutar o CSS
                    </a>
                    <a href="https://www.origamid.com/curso/css-flexbox/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Origamid - Flexbox (Documentação interativa)
                    </a>
                    <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> CSS Tricks - Guia Completo de Grid e Flexbox
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/css-flexbox-e-css-grid-o-guia-completo/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - CSS Completo (Flexbox, Grid, SASS)
                    </a>
                    <a href="https://www.alura.com.br/formacao-html-css" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação HTML e CSS
                    </a>
                    <a href="https://www.origamid.com/curso/css-com-sass/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Origamid - CSS com SASS
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fab fa-css3-alt"></i>
            </div>
          </div>

          {/* Passo 4: JavaScript Fundamentos */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-square-js"></i>
                </div>
                <h2 className="step-title">JavaScript Fundamentos</h2>
              </div>
              <p className="step-subtitle">Passo 4: A Linguagem da Web</p>
              <p className="step-content">
                JavaScript é a única linguagem de programação nativa dos navegadores.
                Dominar os fundamentos sólidos é essencial para tudo que vem depois.
              </p>
              <ul className="step-topics">
                <li>Variáveis: var, let e const</li>
                <li>Tipos de dados e coerção</li>
                <li>Operadores e estruturas condicionais</li>
                <li>Loops e iterações</li>
                <li>Funções (declaração, expressão, arrow functions)</li>
                <li>Arrays e métodos funcionais (map, filter, reduce)</li>
                <li>Objetos e desestruturação</li>
                <li>Manipulação do DOM</li>
                <li>Eventos e Event Delegation</li>
                <li>Escopo, closure e hoisting</li>
                <li>Template Literals e Spread/Rest Operator</li>
                <li>Módulos ES6 (import/export)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step4")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step4"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step4"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - JavaScript (Gustavo Guanabara)
                    </a>
                    <a href="https://www.youtube.com/@ProgramacaoWeb" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Programação Web - JS Completo
                    </a>
                    <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> JavaScript.info - O Tutorial Moderno (Documentação)
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> MDN - JavaScript (Referência Oficial)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/javascript-completo-es6-es7-es8/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - JavaScript Completo ES6+
                    </a>
                    <a href="https://www.origamid.com/curso/javascript-completo-es6/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Origamid - JavaScript Completo
                    </a>
                    <a href="https://www.alura.com.br/formacao-js-backend" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação JavaScript
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>

          {/* Passo 5: JavaScript Avançado */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <h2 className="step-title">JavaScript Avançado</h2>
              </div>
              <p className="step-subtitle">Passo 5: JS de Alto Nível</p>
              <p className="step-content">
                Com os fundamentos sólidos, é hora de dominar os conceitos avançados
                que separam desenvolvedores medianos dos excelentes.
              </p>
              <ul className="step-topics">
                <li>Programação assíncrona: Callbacks, Promises e Async/Await</li>
                <li>Fetch API e consumo de APIs REST</li>
                <li>Manipulação de erros (try/catch)</li>
                <li>Orientação a Objetos com classes e protótipos</li>
                <li>Programação Funcional (conceitos e práticas)</li>
                <li>Event Loop e Call Stack</li>
                <li>LocalStorage, SessionStorage e Cookies</li>
                <li>Design Patterns (Observer, Factory, Singleton)</li>
                <li>Expressões Regulares (Regex)</li>
                <li>Web APIs (Geolocation, Notification, Canvas)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step5")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step5"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step5"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://app.rocketseat.com.br/discover" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Async/Await e Promises
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - JavaScript Assíncrono
                    </a>
                    <a href="https://javascript.info/async" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> JavaScript.info - Promises (Documentação)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/advanced-javascript-concepts/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - JavaScript: The Advanced Concepts
                    </a>
                    <a href="https://www.origamid.com/curso/javascript-es6-avancado/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Origamid - JavaScript Avançado
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-bolt"></i>
            </div>
          </div>

          {/* Passo 6: Controle de Versão */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <h2 className="step-title">Controle de Versão com Git</h2>
              </div>
              <p className="step-subtitle">Passo 6: Trabalho Profissional em Equipe</p>
              <p className="step-content">
                Git é uma habilidade obrigatória no mercado. Sem ele, você não consegue
                colaborar em projetos reais nem manter um histórico seguro do seu código.
              </p>
              <ul className="step-topics">
                <li>Configuração inicial do Git</li>
                <li>Comandos essenciais (init, add, commit, push, pull)</li>
                <li>Branches e estratégias de branching (Git Flow)</li>
                <li>Merge, Rebase e resolução de conflitos</li>
                <li>Pull Requests e Code Review</li>
                <li>GitHub: repositórios, Issues e Actions (CI básico)</li>
                <li>Boas práticas de commit (Conventional Commits)</li>
                <li>.gitignore e gerenciamento de segredos</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step6")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step6"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step6"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.cursoemvideo.com/curso/curso-de-git-e-github/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - Git e GitHub
                    </a>
                    <a href="https://www.udemy.com/course/git-e-github-para-iniciantes/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Willian Justen - Git e GitHub para Iniciantes
                    </a>
                    <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial do Git
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/git-e-github-do-basico-ao-avancado-c-gist-e-github-pages/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Git e GitHub do Básico ao Avançado
                    </a>
                    <a href="https://www.alura.com.br/formacao-git-github" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação Git e GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-brands fa-github"></i>
            </div>
          </div>

          {/* Passo 7: TypeScript */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="bi bi-filetype-tsx"></i>
                </div>
                <h2 className="step-title">TypeScript</h2>
              </div>
              <p className="step-subtitle">Passo 7: JavaScript com Superpoderes</p>
              <p className="step-content">
                TypeScript é JavaScript com tipagem estática. Ele elimina uma classe
                enorme de erros em tempo de desenvolvimento e é exigido na maioria das
                vagas sênior do mercado.
              </p>
              <ul className="step-topics">
                <li>Por que usar TypeScript?</li>
                <li>Configuração do tsconfig.json</li>
                <li>Tipos primitivos e inferência de tipos</li>
                <li>Interfaces e Type Aliases</li>
                <li>Union Types, Intersection Types e Generics</li>
                <li>Enums e Utility Types (Partial, Required, Pick, Omit)</li>
                <li>TypeScript com DOM e eventos</li>
                <li>Strict Mode e boas práticas</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step7")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step7"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step7"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/typescript" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Diego Fernandes - TypeScript do Zero
                    </a>
                    <a href="https://www.totaltypescript.com/tutorials" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Matt Pocock - Total TypeScript (Free Tutorials)
                    </a>
                    <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial do TypeScript
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/typescript-o-guia-completo/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - TypeScript: O Guia Completo
                    </a>
                    <a href="https://www.alura.com.br/formacao-typescript" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação TypeScript
                    </a>
                    <a href="https://www.totaltypescript.com/workshops" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Matt Pocock - Total TypeScript Pro
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="bi bi-filetype-tsx"></i>
            </div>
          </div>

          {/* Passo 8: React.js */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-react"></i>
                </div>
                <h2 className="step-title">React.js</h2>
              </div>
              <p className="step-subtitle">Passo 8: O Framework Dominante do Mercado</p>
              <p className="step-content">
                React é a biblioteca mais requisitada em vagas front-end no Brasil e
                no mundo. Aprenda a construir interfaces reativas, componentizadas
                e escaláveis.
              </p>
              <ul className="step-topics">
                <li>JSX e Virtual DOM</li>
                <li>Componentes funcionais e props</li>
                <li>Gerenciamento de estado com useState</li>
                <li>Efeitos colaterais com useEffect</li>
                <li>Hooks essenciais: useContext, useRef, useMemo, useCallback</li>
                <li>Custom Hooks</li>
                <li>React Router DOM (navegação e rotas)</li>
                <li>Gerenciamento global de estado (Context API / Zustand)</li>
                <li>React Query / TanStack Query (dados assíncronos)</li>
                <li>Formulários com React Hook Form + Zod</li>
                <li>Componentização e padrões de composição</li>
                <li>Performance: lazy loading, memo, code splitting</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step8")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step8"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step8"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/@ProgramacaoWeb" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Programação Web - Curso de React para Iniciantes
                    </a>
                    <a href="https://app.rocketseat.com.br/events/nlw" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - NLW React
                    </a>
                    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial do React (react.dev)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - React: The Complete Guide
                    </a>
                    <a href="https://www.origamid.com/curso/react-completo/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Origamid - React Completo
                    </a>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Ignite React
                    </a>
                    <a href="https://www.alura.com.br/formacao-react" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação React
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-brands fa-react"></i>
            </div>
          </div>

          {/* Passo 9: Next.js */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-n"></i>
                </div>
                <h2 className="step-title">Next.js</h2>
              </div>
              <p className="step-subtitle">Passo 9: React em Produção</p>
              <p className="step-content">
                Next.js é o framework React para aplicações de produção. Traz SSR,
                SSG, roteamento baseado em arquivos e otimizações automáticas que
                o React puro não oferece.
              </p>
              <ul className="step-topics">
                <li>Diferença entre CSR, SSR, SSG e ISR</li>
                <li>App Router vs Pages Router</li>
                <li>File-based Routing e layouts aninhados</li>
                <li>Server Components e Client Components</li>
                <li>Otimização de imagens com next/image</li>
                <li>API Routes e Route Handlers</li>
                <li>Middleware e autenticação</li>
                <li>Deploy na Vercel</li>
                <li>Variáveis de ambiente e segurança</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step9")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step9"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step9"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/nextjs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Next.js do Zero
                    </a>
                    <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial Next.js (nextjs.org)
                    </a>
                    <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Vercel - Tutorial Oficial Next.js
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Next.js &amp; React - The Complete Guide
                    </a>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Ignite Next.js
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-n"></i>
            </div>
          </div>

          {/* Passo 10: Estilização Avançada */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-palette"></i>
                </div>
                <h2 className="step-title">Estilização Avançada</h2>
              </div>
              <p className="step-subtitle">Passo 10: CSS no Ecossistema Moderno</p>
              <p className="step-content">
                No ecossistema React/Next.js existem diferentes abordagens para
                estilização. Conheça as principais ferramentas e saiba quando usar
                cada uma delas.
              </p>
              <ul className="step-topics">
                <li>Tailwind CSS (utility-first CSS)</li>
                <li>CSS Modules (estilos escopados)</li>
                <li>Styled Components (CSS-in-JS)</li>
                <li>Shadcn/ui e Radix UI (componentes acessíveis)</li>
                <li>Sistemas de design e tokens</li>
                <li>Storybook (documentação de componentes)</li>
                <li>Framer Motion (animações declarativas)</li>
                <li>Design Responsivo avançado (container queries)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step10")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step10"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step10"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Tailwind CSS</h4>
                    <a href="https://www.youtube.com/watch?v=1eLaBow7Zbo" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Tiago Matos - Tailwind CSS
                    </a>
                    <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Tailwind CSS
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Componentes e UI</h4>
                    <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Shadcn/ui
                    </a>
                    <a href="https://storybook.js.org/docs/get-started" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Storybook
                    </a>
                    <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Framer Motion - Animações no React
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-palette"></i>
            </div>
          </div>

          {/* Passo 11: Ferramentas de Build e DX */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <h2 className="step-title">Ferramentas de Build e DX</h2>
              </div>
              <p className="step-subtitle">Passo 11: Produtividade e Qualidade de Código</p>
              <p className="step-content">
                Bons desenvolvedores usam boas ferramentas. Aprenda o ecossistema
                que garante qualidade, padronização e performance no desenvolvimento
                profissional.
              </p>
              <ul className="step-topics">
                <li>Gerenciadores de pacote: npm, yarn e pnpm</li>
                <li>Vite (bundler ultrarrápido)</li>
                <li>Webpack (configuração avançada)</li>
                <li>esbuild e Rollup</li>
                <li>ESLint (análise estática de código)</li>
                <li>Prettier (formatação automática)</li>
                <li>Husky e lint-staged (Git hooks)</li>
                <li>Variáveis de ambiente (.env)</li>
                <li>Path aliases e configuração de projetos</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step11")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step11"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step11"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Gerenciadores de Pacote</h4>
                    <a href="https://www.youtube.com/watch?v=A9NWZfqRBa4" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Fellyph Cintra - NPM do Zero
                    </a>
                    <a href="https://www.youtube.com/watch?v=jE_Gyfe3I54" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> DevPleno - Yarn vs NPM
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Bundlers e Linters</h4>
                    <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Vite.js
                    </a>
                    <a href="https://eslint.org/docs/latest/use/getting-started" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Como Configurar ESLint + Prettier
                    </a>
                    <a href="https://webpack.js.org/guides/getting-started/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Webpack - Curso Rápido para Iniciantes
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
          </div>

          {/* Passo 12: Testes */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-flask"></i>
                </div>
                <h2 className="step-title">Testes de Software</h2>
              </div>
              <p className="step-subtitle">Passo 12: Código Confiável e Sustentável</p>
              <p className="step-content">
                Testes garantem que seu código funciona como esperado e não quebra
                quando você adiciona novas funcionalidades. É uma habilidade
                indispensável para times de alta performance.
              </p>
              <ul className="step-topics">
                <li>Pirâmide de testes: unitários, integração e e2e</li>
                <li>Jest: testes unitários em JavaScript</li>
                <li>Vitest: alternativa moderna ao Jest com Vite</li>
                <li>React Testing Library: testando componentes</li>
                <li>Cypress: testes end-to-end</li>
                <li>Playwright: testes e2e cross-browser</li>
                <li>Mocks, spies e stubs</li>
                <li>TDD (Test Driven Development) na prática</li>
                <li>Coverage report e boas práticas</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step12")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step12"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step12"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Testes Unitários</h4>
                    <a href="https://jestjs.io/pt-BR/docs/getting-started" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> DevMedia - Testes com Jest
                    </a>
                    <a href="https://testing-library.com/docs/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Testing Library
                    </a>
                    <a href="https://vitest.dev/guide/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Vitest
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Testes E2E</h4>
                    <a href="https://docs.cypress.io/guides/overview/why-cypress" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Cypress - Do Zero ao Reporte
                    </a>
                    <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Playwright
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-flask"></i>
            </div>
          </div>

          {/* Passo 13: Segurança Web */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h2 className="step-title">Segurança Web</h2>
              </div>
              <p className="step-subtitle">Passo 13: Código Seguro e Profissional</p>
              <p className="step-content">
                Um desenvolvedor front-end completo precisa entender as principais
                vulnerabilidades web e como se proteger delas — protegendo tanto
                o produto quanto os usuários.
              </p>
              <ul className="step-topics">
                <li>HTTPS e certificados SSL/TLS</li>
                <li>CORS: Cross-Origin Resource Sharing</li>
                <li>XSS: Cross-Site Scripting e como prevenir</li>
                <li>CSRF: Cross-Site Request Forgery</li>
                <li>Content Security Policy (CSP)</li>
                <li>Autenticação: JWT, OAuth e sessões</li>
                <li>Cookies: segurança, HttpOnly e SameSite</li>
                <li>OWASP Top 10</li>
                <li>Armazenamento seguro no navegador</li>
                <li>Criptografia: hashing vs. encriptação</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step13")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step13"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step13"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Fundamentos de Segurança</h4>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - O que é CORS
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - Evitando XSS
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - Algoritmos de Hash
                    </a>
                    <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Cassio Batista - Série OWASP Top 10
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Autenticação</h4>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/jwt" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - JWT na prática
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - Cookies e Segurança
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
          </div>

          {/* Passo 14: Performance */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-gauge-high"></i>
                </div>
                <h2 className="step-title">Performance Web</h2>
              </div>
              <p className="step-subtitle">Passo 14: Aplicações Rápidas e Escaláveis</p>
              <p className="step-content">
                Performance é um requisito de negócio. Sites lentos perdem usuários
                e conversões. Aprenda a medir, diagnosticar e otimizar aplicações
                front-end para o mundo real.
              </p>
              <ul className="step-topics">
                <li>Core Web Vitals (LCP, CLS, FID/INP)</li>
                <li>Lighthouse e Chrome DevTools</li>
                <li>Lazy loading de imagens e componentes</li>
                <li>Code splitting e dynamic imports</li>
                <li>Otimização de fontes e imagens</li>
                <li>Caching: service workers e PWA</li>
                <li>Debounce, throttle e virtualização de listas</li>
                <li>Tree shaking e bundle analysis</li>
                <li>CDN e estratégias de deploy</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step14")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step14"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step14"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://web.dev/learn/performance/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> web.dev - Learn Performance (Google)
                    </a>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/react-performance" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Performance no React
                    </a>
                    <a href="https://developer.chrome.com/docs/devtools/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Chrome DevTools - Guia Oficial
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/web-performance-optimization/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Web Performance Optimization
                    </a>
                    <a href="https://www.alura.com.br/cursos-online-front-end/performance-web" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Performance Web
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-gauge-high"></i>
            </div>
          </div>

          {/* Passo 15: Deploy e Infraestrutura */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-cloud"></i>
                </div>
                <h2 className="step-title">Deploy e Infraestrutura Front-end</h2>
              </div>
              <p className="step-subtitle">Passo 15: Levar Código para o Mundo</p>
              <p className="step-content">
                Saber fazer deploy é fundamental. Entenda as principais plataformas,
                estratégias de entrega e como configurar pipelines de CI/CD para
                publicar suas aplicações com segurança e agilidade.
              </p>
              <ul className="step-topics">
                <li>Vercel: deploy de apps React e Next.js</li>
                <li>Netlify: deploy estático e serverless functions</li>
                <li>GitHub Actions: CI/CD automatizado</li>
                <li>Docker: containerização básica para front-end</li>
                <li>Variáveis de ambiente em produção</li>
                <li>Domínios personalizados e HTTPS</li>
                <li>Estratégias: Blue/Green, Canary, Feature Flags</li>
                <li>Monitoramento: Sentry e Google Analytics</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step15")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step15"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step15"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Plataformas de Deploy</h4>
                    <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Vercel
                    </a>
                    <a href="https://docs.netlify.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Netlify
                    </a>
                    <a href="https://docs.github.com/pt/actions" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> GitHub Actions para Front-End
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Monitoramento</h4>
                    <a href="https://docs.sentry.io/platforms/javascript/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Sentry - Monitoramento de Erros no Frontend
                    </a>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/ci-cd" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Deploy com CI/CD
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-cloud"></i>
            </div>
          </div>

          {/* Passo 16: Habilidades Complementares */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-star"></i>
                </div>
                <h2 className="step-title">Habilidades Complementares</h2>
              </div>
              <p className="step-subtitle">Passo 16: O Desenvolvedor Completo</p>
              <p className="step-content">
                Um front-end completo vai além do código. Estas habilidades
                complementares são o diferencial que coloca você à frente da
                concorrência no mercado de trabalho.
              </p>
              <ul className="step-topics">
                <li>UI/UX Design: princípios fundamentais para devs</li>
                <li>Figma: leitura e colaboração com designers</li>
                <li>Acessibilidade avançada (WCAG 2.1)</li>
                <li>Internacionalização (i18n) e localização (l10n)</li>
                <li>GraphQL: alternativa ao REST</li>
                <li>WebSockets e comunicação em tempo real</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>Noções de back-end para fullstack (Node.js)</li>
                <li>Soft skills: comunicação, documentação e trabalho em equipe</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("front-step16")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["front-step16"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["front-step16"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Design e Acessibilidade</h4>
                    <a href="https://www.youtube.com/watch?v=g_bpM4SsXyA" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Figma para Desenvolvedores - Curso Gratuito
                    </a>
                    <a href="https://web.dev/learn/accessibility/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> web.dev - Learn Accessibility (Google)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Tecnologias Avançadas</h4>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/graphql" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - GraphQL na Prática
                    </a>
                    <a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Progressive Web Apps (Google)
                    </a>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/nodejs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Introdução ao Node.js
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          {/* Botão Voltar ao Topo */}
          <button
            className={`back-to-top ${showBackToTop ? "show" : ""}`}
            aria-label="Voltar ao topo"
            onClick={scrollToTop}
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="track-footer">
        <div className="footer-container">
          <p className="footer-text">
            JornadaDEV &copy; <span>{new Date().getFullYear()}</span> - Todos os
            direitos reservados
          </p>
          <div className="tech-icons">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </div>
        </div>
      </footer>
    </>
  );
}