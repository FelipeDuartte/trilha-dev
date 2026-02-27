import { Link } from "react-router-dom";
import useTracksEffect from "../hooks/useTracksEffect.js";
import { useState } from "react";
export default function Full() {
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

          <h1 className="track-title">Jornada Full-Stack Completo</h1>
          <p className="track-subtitle">
            Domine o desenvolvimento web Full-Stack seguindo este guia passo a
            passo, do básico ao avançado — com foco em JavaScript e Python
          </p>
        </header>

        <div className="learning-path">

          {/* Passo 1: Como a Web Funciona */}
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
                O ponto de partida de qualquer desenvolvedor full-stack é entender
                a web de ponta a ponta — desde o clique do usuário até a resposta
                do servidor.
              </p>
              <ul className="step-topics">
                <li>HTTP e HTTPS: verbos, status codes e headers</li>
                <li>Como funciona o ciclo Request/Response</li>
                <li>DNS, domínios e endereçamento IP</li>
                <li>Clientes, servidores e proxies</li>
                <li>O que são APIs REST e como funcionam</li>
                <li>JSON: o formato universal de troca de dados</li>
                <li>Introdução ao terminal (linha de comando)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step1")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step1"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step1"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - A Internet por Baixo dos Panos
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Básico de HTTP - Verbos e Status Codes
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> MDN - Visão Geral do HTTP (Documentação)
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-globe"></i>
            </div>
          </div>

          {/* Passo 2: Lógica de Programação */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-code-branch"></i>
                </div>
                <h2 className="step-title">Lógica de Programação</h2>
              </div>
              <p className="step-subtitle">Passo 2: Pensar como Programador</p>
              <p className="step-content">
                Antes de qualquer linguagem, você precisa aprender a pensar de
                forma lógica e estruturada. Essa base é o que torna o aprendizado
                de qualquer tecnologia muito mais rápido.
              </p>
              <ul className="step-topics">
                <li>Algoritmos e fluxogramas</li>
                <li>Variáveis, tipos de dados e operadores</li>
                <li>Estruturas condicionais (if/else, switch)</li>
                <li>Laços de repetição (for, while)</li>
                <li>Funções e modularização</li>
                <li>Estruturas de dados: arrays, listas e dicionários</li>
                <li>Recursão e resolução de problemas</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step2")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step2"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step2"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.cursoemvideo.com/curso/curso-de-algoritmo/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - Lógica de Programação
                    </a>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/logica-de-programacao" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Lógica de Programação do Zero
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.alura.com.br/formacao-logica-de-programacao" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação Lógica de Programação
                    </a>
                    <a href="https://www.udemy.com/course/curso-de-logica-de-programacao-o-que-seu-instructor-nao-te-conta/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Lógica de Programação Completa
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-code-branch"></i>
            </div>
          </div>

          {/* Passo 3: HTML5 e CSS */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fab fa-html5"></i>
                </div>
                <h2 className="step-title">HTML5 e CSS Moderno</h2>
              </div>
              <p className="step-subtitle">Passo 3: Estrutura e Estilo da Web</p>
              <p className="step-content">
                HTML e CSS são a base visual de toda aplicação web. Um full-stack
                sólido precisa dominar o front-end para construir interfaces
                funcionais e se comunicar bem com designers.
              </p>
              <ul className="step-topics">
                <li>Elementos semânticos HTML5 (header, main, section, article)</li>
                <li>Formulários, inputs e validação nativa</li>
                <li>Acessibilidade básica (ARIA, roles, alt)</li>
                <li>Box Model, seletores e especificidade CSS</li>
                <li>Flexbox e CSS Grid</li>
                <li>Design Responsivo e Media Queries</li>
                <li>Variáveis CSS e animações</li>
                <li>Metodologia BEM</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step3")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step3"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step3"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>HTML5</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - HTML5 (Gustavo Guanabara)
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> MDN Web Docs - HTML (Documentação)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>CSS Moderno</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - CSS3
                    </a>
                    <a href="https://www.origamid.com/curso/css-flexbox/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Origamid - Flexbox e Grid (Documentação interativa)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
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
            <div className="step-illustration multiple-icons">
              <i className="fab fa-html5"></i>
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
                JavaScript é a única linguagem que roda nativamente no navegador
                e também no servidor via Node.js. Dominar seus fundamentos é
                indispensável para qualquer desenvolvedor full-stack.
              </p>
              <ul className="step-topics">
                <li>Variáveis: var, let e const</li>
                <li>Tipos de dados, operadores e coerção</li>
                <li>Funções, arrow functions e closures</li>
                <li>Arrays e métodos funcionais (map, filter, reduce)</li>
                <li>Objetos e desestruturação</li>
                <li>Manipulação do DOM e eventos</li>
                <li>Módulos ES6 (import/export)</li>
                <li>Escopo, hoisting e prototype chain</li>
                <li>Template Literals e Spread/Rest Operator</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step4")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step4"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step4"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - JavaScript (Gustavo Guanabara)
                    </a>
                    <a href="https://www.youtube.com/@ProgramacaoWeb" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Programação Web - JavaScript Completo
                    </a>
                    <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> JavaScript.info - Tutorial Moderno (Documentação)
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
                Com os fundamentos sólidos, é hora de aprender os conceitos que
                fazem a diferença no dia a dia de qualquer desenvolvedor full-stack
                moderno.
              </p>
              <ul className="step-topics">
                <li>Programação assíncrona: Callbacks, Promises e Async/Await</li>
                <li>Fetch API e consumo de APIs REST</li>
                <li>Tratamento de erros (try/catch/finally)</li>
                <li>Orientação a Objetos com classes e protótipos</li>
                <li>Programação Funcional (conceitos e práticas)</li>
                <li>Event Loop e Call Stack</li>
                <li>LocalStorage, SessionStorage e Cookies</li>
                <li>Design Patterns (Observer, Factory, Singleton)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step5")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step5"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step5"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - JavaScript Assíncrono
                    </a>
                    <a href="https://javascript.info/async" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> JavaScript.info - Promises e Async/Await
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

          {/* Passo 6: Git e Controle de Versão */}
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
                Git é uma habilidade obrigatória no mercado. Sem ele, você não
                consegue colaborar em projetos reais nem manter um histórico
                seguro do seu código.
              </p>
              <ul className="step-topics">
                <li>Configuração inicial do Git</li>
                <li>Comandos essenciais (init, add, commit, push, pull)</li>
                <li>Branches e estratégias de branching (Git Flow)</li>
                <li>Merge, Rebase e resolução de conflitos</li>
                <li>Pull Requests e Code Review</li>
                <li>GitHub: repositórios, Issues e Actions (CI básico)</li>
                <li>Conventional Commits e boas práticas</li>
                <li>.gitignore e gerenciamento de segredos</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step6")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step6"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step6"] ? "show" : ""}`}>
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
              <p className="step-subtitle">Passo 7: JavaScript com Tipagem</p>
              <p className="step-content">
                TypeScript adiciona tipagem estática ao JavaScript e é utilizado
                tanto no front-end (React, Next.js) quanto no back-end (Node.js,
                NestJS). É exigência crescente em vagas full-stack.
              </p>
              <ul className="step-topics">
                <li>Configuração do tsconfig.json</li>
                <li>Tipos primitivos e inferência de tipos</li>
                <li>Interfaces e Type Aliases</li>
                <li>Union Types, Generics e Utility Types</li>
                <li>TypeScript no front-end com React</li>
                <li>TypeScript no back-end com Node.js</li>
                <li>Enums e boas práticas (Strict Mode)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step7")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step7"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step7"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/typescript" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Diego Fernandes - TypeScript do Zero
                    </a>
                    <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial TypeScript
                    </a>
                    <a href="https://www.totaltypescript.com/tutorials" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Matt Pocock - Total TypeScript (Tutoriais Gratuitos)
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
                <h2 className="step-title">React.js — Front-end</h2>
              </div>
              <p className="step-subtitle">Passo 8: O Framework Dominante do Mercado</p>
              <p className="step-content">
                React é a biblioteca mais requisitada em vagas full-stack no Brasil
                e no mundo. Aprenda a construir interfaces reativas, componentizadas
                e escaláveis com as melhores práticas modernas.
              </p>
              <ul className="step-topics">
                <li>JSX, Virtual DOM e componentes funcionais</li>
                <li>Props, estado e ciclo de vida</li>
                <li>Hooks: useState, useEffect, useContext, useRef</li>
                <li>Custom Hooks</li>
                <li>React Router DOM (navegação e rotas)</li>
                <li>Gerenciamento de estado (Context API / Zustand)</li>
                <li>React Query / TanStack Query</li>
                <li>Formulários com React Hook Form + Zod</li>
                <li>Estilização: Tailwind CSS, CSS Modules, Styled Components</li>
                <li>Performance: lazy loading, memo e code splitting</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step8")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step8"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step8"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/@ProgramacaoWeb" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Programação Web - Curso de React para Iniciantes
                    </a>
                    <a href="https://app.rocketseat.com.br/events/nlw" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - NLW React
                    </a>
                    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial React (react.dev)
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
                <h2 className="step-title">Next.js — Full-Stack com React</h2>
              </div>
              <p className="step-subtitle">Passo 9: Front-end e Back-end na Mesma Aplicação</p>
              <p className="step-content">
                Next.js é o framework que une front-end e back-end em um único
                projeto. É a escolha padrão do mercado para aplicações React em
                produção e permite criar APIs, páginas SSR e SSG de forma integrada.
              </p>
              <ul className="step-topics">
                <li>Diferença entre CSR, SSR, SSG e ISR</li>
                <li>App Router e layouts aninhados</li>
                <li>Server Components e Client Components</li>
                <li>API Routes e Route Handlers</li>
                <li>Server Actions (formulários e mutations)</li>
                <li>Otimização de imagens com next/image</li>
                <li>Middleware e autenticação</li>
                <li>Integração com banco de dados (Prisma + PostgreSQL)</li>
                <li>Deploy na Vercel</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step9")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step9"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step9"] ? "show" : ""}`}>
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
                      <i className="fa-solid fa-link"></i> Udemy - Next.js &amp; React: The Complete Guide
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

          {/* Passo 10: Node.js e APIs REST */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-node-js"></i>
                </div>
                <h2 className="step-title">Node.js e APIs REST</h2>
              </div>
              <p className="step-subtitle">Passo 10: JavaScript no Servidor</p>
              <p className="step-content">
                Node.js permite usar JavaScript no back-end. Com Express ou Fastify,
                você constrói APIs robustas que alimentam qualquer tipo de cliente —
                web, mobile ou outro serviço.
              </p>
              <ul className="step-topics">
                <li>O que é o Node.js e como funciona o Event Loop</li>
                <li>Módulos nativos: fs, path, http</li>
                <li>npm, yarn e pnpm: gerenciamento de dependências</li>
                <li>Express.js: rotas, middlewares e tratamento de erros</li>
                <li>Fastify: alternativa performática ao Express</li>
                <li>Validação de dados com Zod ou Joi</li>
                <li>Upload de arquivos, paginação e filtros</li>
                <li>Documentação de API com Swagger/OpenAPI</li>
                <li>Boas práticas RESTful</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step10")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step10"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step10"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Node.js</h4>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/nodejs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Node.js do Zero
                    </a>
                    <a href="https://nodejs.org/pt/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial do Node.js
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Express e Fastify</h4>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - API REST com Express e TypeScript
                    </a>
                    <a href="https://expressjs.com/pt-br/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial Express.js
                    </a>
                    <a href="https://fastify.dev/docs/latest/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial Fastify
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Node.js: The Complete Guide
                    </a>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Ignite Node.js
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-brands fa-node-js"></i>
            </div>
          </div>

          {/* Passo 11: Python e Frameworks */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-python"></i>
                </div>
                <h2 className="step-title">Python e Frameworks Web</h2>
              </div>
              <p className="step-subtitle">Passo 11: A Segunda Linguagem do Full-Stack</p>
              <p className="step-content">
                Python é amplamente utilizado no back-end web, automação e
                inteligência artificial. Aprender Python abre um leque enorme de
                oportunidades para o desenvolvedor full-stack.
              </p>
              <ul className="step-topics">
                <li>Sintaxe Python: variáveis, tipos, loops e funções</li>
                <li>Orientação a Objetos, decorators e type hints</li>
                <li>Ambientes virtuais (venv) e pip</li>
                <li>FastAPI: APIs modernas e rápidas com Pydantic</li>
                <li>Django: framework full-stack com ORM e Admin</li>
                <li>Django REST Framework (DRF)</li>
                <li>Async/Await com FastAPI</li>
                <li>Documentação automática com Swagger (OpenAPI)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step11")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step11"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step11"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Python</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - Python (Gustavo Guanabara)
                    </a>
                    <a href="https://docs.python.org/pt-br/3/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial Python (python.org)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>FastAPI e Django</h4>
                    <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial FastAPI
                    </a>
                    <a href="https://www.youtube.com/@gregoriobonfante" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Gregório Bonfante - Django do Zero
                    </a>
                    <a href="https://docs.djangoproject.com/pt-br/5.0/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial Django
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/python-3-do-zero-ao-avancado/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Python 3 Completo: do Básico ao Avançado
                    </a>
                    <a href="https://www.alura.com.br/formacao-django" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação Python e Django
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration multiple-icons">
              <i className="fa-brands fa-python"></i>
              <i className="fa-solid fa-cubes"></i>
            </div>
          </div>

          {/* Passo 12: Bancos de Dados */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-database"></i>
                </div>
                <h2 className="step-title">Bancos de Dados</h2>
              </div>
              <p className="step-subtitle">Passo 12: Persistência de Dados</p>
              <p className="step-content">
                Todo sistema back-end precisa armazenar dados. Aprenda bancos
                relacionais e não relacionais, quando usar cada um e como integrá-los
                com Node.js e Python usando ORMs modernos.
              </p>
              <ul className="step-topics">
                <li>SQL: SELECT, INSERT, UPDATE, DELETE, JOINs complexos</li>
                <li>PostgreSQL: o banco relacional mais robusto do mercado</li>
                <li>MySQL: amplamente usado em aplicações web</li>
                <li>MongoDB: banco de documentos NoSQL</li>
                <li>Redis: cache em memória e filas</li>
                <li>Prisma ORM (Node.js/TypeScript)</li>
                <li>SQLAlchemy (Python)</li>
                <li>Modelagem, normalização e índices</li>
                <li>Migrations, seeds e transações</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step12")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step12"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step12"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Bancos Relacionais</h4>
                    <a href="https://www.youtube.com/playlist?list=PLucm8g_ezqNoAkYKXN_zWupyH6hQCAwxY" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Boson Treinamentos - PostgreSQL do Zero
                    </a>
                    <a href="https://www.cursoemvideo.com/curso/mysql/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - MySQL
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>NoSQL e Cache</h4>
                    <a href="https://www.youtube.com/@natanielpaiva" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Nataniel Paiva - MongoDB para Iniciantes
                    </a>
                    <a href="https://redis.io/docs/latest/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Redis
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>ORMs</h4>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Prisma ORM na Prática
                    </a>
                    <a href="https://www.prisma.io/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Prisma
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-database"></i>
            </div>
          </div>

          {/* Passo 13: Autenticação e Segurança */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h2 className="step-title">Autenticação e Segurança Web</h2>
              </div>
              <p className="step-subtitle">Passo 13: Protegendo Sistemas de Ponta a Ponta</p>
              <p className="step-content">
                Segurança no full-stack envolve tanto proteger as APIs do back-end
                quanto garantir que o front-end não exponha dados sensíveis.
                Este passo une os dois mundos.
              </p>
              <ul className="step-topics">
                <li>JWT: geração, validação e refresh tokens</li>
                <li>OAuth 2.0 e login social (Google, GitHub)</li>
                <li>Bcrypt e hashing seguro de senhas</li>
                <li>CORS: configuração segura entre front e back</li>
                <li>OWASP Top 10: as vulnerabilidades mais críticas</li>
                <li>XSS, CSRF e SQL Injection: prevenção prática</li>
                <li>Helmet.js e headers de segurança</li>
                <li>Rate limiting e proteção contra força bruta</li>
                <li>Cookies: HttpOnly, SameSite e Secure</li>
                <li>Gerenciamento seguro de segredos (.env)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step13")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step13"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step13"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Autenticação</h4>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/jwt" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - JWT do Zero ao Avançado
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - OAuth 2.0 Explicado
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Segurança Web</h4>
                    <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Cassio Batista - Série OWASP Top 10
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - Evitando XSS
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - Criptografia na Prática
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

          {/* Passo 14: Testes */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-flask"></i>
                </div>
                <h2 className="step-title">Testes de Software</h2>
              </div>
              <p className="step-subtitle">Passo 14: Qualidade em Todo o Stack</p>
              <p className="step-content">
                Testar tanto o front-end quanto o back-end garante que a aplicação
                funciona como esperado e que mudanças futuras não quebram o sistema.
                É uma exigência em times de alta performance.
              </p>
              <ul className="step-topics">
                <li>Pirâmide de testes: unitários, integração e e2e</li>
                <li>Jest e Vitest: testes em JavaScript/TypeScript</li>
                <li>React Testing Library: testando componentes</li>
                <li>Supertest: testes de integração para APIs</li>
                <li>Pytest: testes em Python</li>
                <li>Cypress e Playwright: testes end-to-end</li>
                <li>Mocks, stubs e spies</li>
                <li>TDD na prática e coverage report</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step14")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step14"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step14"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Front-end</h4>
                    <a href="https://testing-library.com/docs/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação React Testing Library
                    </a>
                    <a href="https://docs.cypress.io/guides/overview/why-cypress" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Cypress - Do Zero ao Reporte
                    </a>
                    <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Playwright
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Back-end</h4>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Testes com Jest e Supertest
                    </a>
                    <a href="https://docs.pytest.org/en/stable/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Pytest
                    </a>
                    <a href="https://vitest.dev/guide/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Vitest
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-flask"></i>
            </div>
          </div>

          {/* Passo 15: Arquitetura e Boas Práticas */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
                <h2 className="step-title">Arquitetura e Boas Práticas</h2>
              </div>
              <p className="step-subtitle">Passo 15: Código que Escala</p>
              <p className="step-content">
                Arquitetura bem definida torna o código mais fácil de manter,
                testar e evoluir. Esses padrões são exigidos em entrevistas e no
                dia a dia de times profissionais.
              </p>
              <ul className="step-topics">
                <li>Princípios SOLID e Clean Code</li>
                <li>Arquitetura em camadas (MVC, Repository Pattern)</li>
                <li>Clean Architecture na prática</li>
                <li>Design Patterns: Factory, Strategy, Observer</li>
                <li>Monolito vs Microsserviços</li>
                <li>GraphQL: alternativa ao REST</li>
                <li>WebSockets: comunicação em tempo real</li>
                <li>Mensageria: RabbitMQ e Kafka (introdução)</li>
                <li>API Gateway e BFF (Backend for Frontend)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step15")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step15"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step15"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/@FullCycle" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - Clean Architecture na Prática
                    </a>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - SOLID e Design Patterns em Node.js
                    </a>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/graphql" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - GraphQL na Prática
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/clean-architecture-na-pratica/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Clean Architecture com Node.js
                    </a>
                    <a href="https://fullcycle.com.br/imersao-full-stack-full-cycle/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - Imersão Full Stack e Full Cycle
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-diagram-project"></i>
            </div>
          </div>

          {/* Passo 16: Docker, CI/CD e Cloud */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-docker"></i>
                </div>
                <h2 className="step-title">Docker, CI/CD e Cloud</h2>
              </div>
              <p className="step-subtitle">Passo 16: Levar o Stack Completo para Produção</p>
              <p className="step-content">
                O desenvolvedor full-stack completo sabe levar sua aplicação ao ar
                com segurança, automação e escalabilidade. Containers, pipelines e
                cloud são o caminho para isso.
              </p>
              <ul className="step-topics">
                <li>Docker: Dockerfile, Compose e volumes</li>
                <li>GitHub Actions: pipelines de CI/CD automáticos</li>
                <li>GitLab CI e Jenkins</li>
                <li>ArgoCD e GitOps</li>
                <li>Deploy full-stack: Vercel (front) + Railway/Render (back)</li>
                <li>AWS: EC2, S3, RDS e Lambda (introdução)</li>
                <li>Nginx como reverse proxy</li>
                <li>Monitoramento: Sentry, Grafana e Prometheus</li>
                <li>Infraestrutura como Código: Terraform (básico)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("fullstack-step16")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["fullstack-step16"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["fullstack-step16"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Docker</h4>
                    <a href="https://www.youtube.com/@fabricioveronez" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Fabricio Veronez - Docker do Zero
                    </a>
                    <a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial Docker
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>CI/CD</h4>
                    <a href="https://docs.github.com/pt/actions" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - GitHub Actions na Prática
                    </a>
                    <a href="https://www.youtube.com/@FullCycle" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - Deploy com GitOps e ArgoCD
                    </a>
                    <a href="https://www.youtube.com/@fabricioveronez" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Fabricio Veronez - Jenkins na Prática
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Cloud e Deploy</h4>
                    <a href="https://www.youtube.com/@fabricioveronez" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Fabricio Veronez - AWS para Devs
                    </a>
                    <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Vercel
                    </a>
                    <a href="https://docs.sentry.io/platforms/javascript/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Sentry - Monitoramento de Erros no Full-Stack
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/docker-ferramenta-essencial-para-desenvolvedores/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Docker: Ferramenta Essencial para Devs
                    </a>
                    <a href="https://www.alura.com.br/formacao-devops" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação DevOps
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration multiple-icons">
              <i className="fa-brands fa-docker"></i>
              <i className="fa-solid fa-cloud"></i>
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