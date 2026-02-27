import { Link } from "react-router-dom";
import useTracksEffect from "../hooks/useTracksEffect.js";
import { useState } from "react";
export default function Back() {
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

          <h1 className="track-title">Jornada Back-End Completo</h1>
          <p className="track-subtitle">
            Domine o desenvolvimento web Back-end seguindo este guia passo a
            passo, do básico ao avançado — com foco em Python e Node.js
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
                Antes de escrever qualquer linha de código back-end, é essencial
                entender como a internet funciona por baixo dos panos — desde uma
                requisição até a resposta do servidor.
              </p>
              <ul className="step-topics">
                <li>HTTP e HTTPS: verbos, status codes e headers</li>
                <li>Como funciona uma requisição web (Request/Response)</li>
                <li>DNS, domínios e endereçamento IP</li>
                <li>Clientes, servidores e proxies</li>
                <li>TCP/IP e camadas de rede</li>
                <li>O que são APIs e REST</li>
                <li>Introdução ao terminal (linha de comando)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step1")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step1"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step1"] ? "show" : ""}`}>
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

          {/* Passo 2: Frontend Básico */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-window-restore"></i>
                </div>
                <h2 className="step-title">Noções de Front-end</h2>
              </div>
              <p className="step-subtitle">Passo 2: Entenda o que você vai servir</p>
              <p className="step-content">
                Um bom desenvolvedor back-end precisa entender o que o front-end
                consome. Aprenda o suficiente para compreender o ciclo completo de
                uma aplicação web.
              </p>
              <ul className="step-topics">
                <li>HTML: estrutura básica de documentos</li>
                <li>CSS: estilização básica</li>
                <li>JavaScript: lógica, DOM e eventos</li>
                <li>Como o front-end consome uma API</li>
                <li>JSON: o formato universal de troca de dados</li>
                <li>Fetch API e Axios: requisições HTTP no cliente</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step2")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step2"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step2"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>HTML e CSS</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - HTML e CSS
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>JavaScript</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - JavaScript
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> MDN - JavaScript (Documentação)
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-window-restore"></i>
            </div>
          </div>

          {/* Passo 3: Lógica de Programação */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-code-branch"></i>
                </div>
                <h2 className="step-title">Lógica de Programação</h2>
              </div>
              <p className="step-subtitle">Passo 3: A Base de Tudo</p>
              <p className="step-content">
                A lógica de programação é o alicerce independente de linguagem.
                Dominar esses conceitos garante que você pense como um programador
                antes de escolher sua stack.
              </p>
              <ul className="step-topics">
                <li>Algoritmos e fluxogramas</li>
                <li>Variáveis, tipos de dados e operadores</li>
                <li>Estruturas condicionais (if/else, switch)</li>
                <li>Laços de repetição (for, while)</li>
                <li>Funções e modularização</li>
                <li>Estruturas de dados: arrays, listas, dicionários</li>
                <li>Recursão</li>
                <li>Complexidade de algoritmos (Big O básico)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step3")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step3"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step3"] ? "show" : ""}`}>
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

          {/* Passo 4: Controle de Versão */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <h2 className="step-title">Controle de Versão com Git</h2>
              </div>
              <p className="step-subtitle">Passo 4: Trabalho Profissional em Equipe</p>
              <p className="step-content">
                Git é obrigatório no mercado. Sem versionamento, não há trabalho em
                equipe, histórico seguro de código ou colaboração em projetos reais.
              </p>
              <ul className="step-topics">
                <li>Configuração inicial do Git</li>
                <li>Comandos essenciais (init, add, commit, push, pull)</li>
                <li>Branches e estratégias de branching (Git Flow)</li>
                <li>Merge, Rebase e resolução de conflitos</li>
                <li>Pull Requests e Code Review</li>
                <li>GitHub: repositórios, Issues e Actions</li>
                <li>Conventional Commits e boas práticas</li>
                <li>.gitignore e proteção de segredos</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step4")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step4"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step4"] ? "show" : ""}`}>
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

          {/* Passo 5: Node.js */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-node-js"></i>
                </div>
                <h2 className="step-title">Node.js</h2>
              </div>
              <p className="step-subtitle">Passo 5: JavaScript no Servidor</p>
              <p className="step-content">
                Node.js permite usar JavaScript no back-end. É um dos runtimes
                mais usados no mundo, com um ecossistema gigantesco e ótima
                performance para aplicações I/O intensivas.
              </p>
              <ul className="step-topics">
                <li>O que é o Node.js e como funciona o Event Loop</li>
                <li>Módulos nativos: fs, path, os, http</li>
                <li>NPM e gerenciamento de dependências</li>
                <li>CommonJS vs ES Modules</li>
                <li>Streams e Buffer</li>
                <li>Variáveis de ambiente com dotenv</li>
                <li>Criando um servidor HTTP puro com Node</li>
                <li>Process, stdin/stdout e scripts de automação</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step5")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step5"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step5"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/nodejs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Node.js do Zero
                    </a>
                    <a href="https://www.youtube.com/@ProgramacaoWeb" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Programação Web - Node.js para Iniciantes
                    </a>
                    <a href="https://nodejs.org/pt/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial do Node.js
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
                    <a href="https://www.alura.com.br/formacao-node-js" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação Node.js
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-brands fa-node-js"></i>
            </div>
          </div>

          {/* Passo 6: Express.js e APIs REST */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-server"></i>
                </div>
                <h2 className="step-title">Express.js e APIs REST</h2>
              </div>
              <p className="step-subtitle">Passo 6: Construindo Servidores com Node.js</p>
              <p className="step-content">
                Express é o framework web mais popular do ecossistema Node.js.
                Com ele, você aprende a construir APIs RESTful profissionais, que
                são a espinha dorsal de qualquer aplicação moderna.
              </p>
              <ul className="step-topics">
                <li>Roteamento: GET, POST, PUT, PATCH, DELETE</li>
                <li>Middlewares e pipeline de requisição</li>
                <li>Tratamento de erros centralizado</li>
                <li>Validação de dados com Zod ou Joi</li>
                <li>Paginação, filtros e ordenação</li>
                <li>Upload de arquivos com Multer</li>
                <li>Documentação de API com Swagger/OpenAPI</li>
                <li>Fastify: alternativa performática ao Express</li>
                <li>Boas práticas RESTful (status codes, naming, versionamento)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step6")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step6"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step6"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Express.js</h4>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - API REST com Express
                    </a>
                    <a href="https://expressjs.com/pt-br/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial do Express.js
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Fastify</h4>
                    <a href="https://fastify.dev/docs/latest/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial do Fastify
                    </a>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - API com Fastify e TypeScript
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Node.js e Express: APIs REST do Zero
                    </a>
                    <a href="https://www.alura.com.br/formacao-node-js" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação Node.js com Express
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-server"></i>
            </div>
          </div>

          {/* Passo 7: Python */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-python"></i>
                </div>
                <h2 className="step-title">Python</h2>
              </div>
              <p className="step-subtitle">Passo 7: A Linguagem Mais Versátil do Back-end</p>
              <p className="step-content">
                Python é uma das linguagens mais utilizadas no mundo — especialmente
                em back-end web, automação, ciência de dados e inteligência artificial.
                Sua sintaxe limpa facilita o aprendizado e a produtividade.
              </p>
              <ul className="step-topics">
                <li>Sintaxe básica: variáveis, tipos e operadores</li>
                <li>Estruturas de controle e loops</li>
                <li>Funções, lambdas e decorators</li>
                <li>Listas, tuplas, dicionários e sets</li>
                <li>Orientação a Objetos com Python (classes, herança)</li>
                <li>Tratamento de exceções</li>
                <li>Módulos e pacotes (pip)</li>
                <li>Leitura e escrita de arquivos</li>
                <li>Ambientes virtuais (venv / virtualenv)</li>
                <li>Type hints e boas práticas (PEP8)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step7")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step7"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step7"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - Python (Gustavo Guanabara)
                    </a>
                    <a href="https://www.youtube.com/@programacaodinamica" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Programação Dinâmica - Python do Zero
                    </a>
                    <a href="https://docs.python.org/pt-br/3/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial Python (python.org)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/python-3-do-zero-ao-avancado/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Python 3 Completo: do Básico ao Avançado
                    </a>
                    <a href="https://www.alura.com.br/formacao-python" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação Python
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-brands fa-python"></i>
            </div>
          </div>

          {/* Passo 8: Django e FastAPI */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-cubes"></i>
                </div>
                <h2 className="step-title">Frameworks Python: Django e FastAPI</h2>
              </div>
              <p className="step-subtitle">Passo 8: Python em Produção</p>
              <p className="step-content">
                Django é o framework full-stack mais maduro do Python, ideal para
                aplicações completas. FastAPI é moderno, extremamente rápido e
                focado na construção de APIs — ambos são muito requisitados no mercado.
              </p>
              <ul className="step-topics">
                <li>Django: MVT, ORM, Admin e autenticação nativa</li>
                <li>Django REST Framework (DRF) para APIs</li>
                <li>FastAPI: rotas, tipagem, validação com Pydantic</li>
                <li>Async/Await com FastAPI</li>
                <li>Documentação automática com Swagger (OpenAPI)</li>
                <li>Autenticação com JWT no FastAPI</li>
                <li>Migrações de banco de dados</li>
                <li>Deploy de apps Python (Gunicorn, Uvicorn)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step8")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step8"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step8"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Django</h4>
                    <a href="https://www.youtube.com/@gregoriobonfante" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Gregório Bonfante - Django do Zero
                    </a>
                    <a href="https://docs.djangoproject.com/pt-br/5.0/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial Django
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>FastAPI</h4>
                    <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial FastAPI (fastapi.tiangolo.com)
                    </a>
                    <a href="https://www.youtube.com/@FullCycle" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - FastAPI na Prática
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/django-rest-framework/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Django REST Framework Completo
                    </a>
                    <a href="https://www.alura.com.br/formacao-django" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação Django
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

          {/* Passo 9: Bancos de Dados */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-database"></i>
                </div>
                <h2 className="step-title">Bancos de Dados</h2>
              </div>
              <p className="step-subtitle">Passo 9: Persistência de Dados</p>
              <p className="step-content">
                Todo sistema back-end precisa armazenar dados. Aprenda bancos
                relacionais e não relacionais, quando usar cada um e como integrá-los
                com Node.js e Python.
              </p>
              <ul className="step-topics">
                <li>SQL: SELECT, INSERT, UPDATE, DELETE, JOINs</li>
                <li>PostgreSQL: banco relacional mais robusto do mercado</li>
                <li>MySQL: amplamente usado em aplicações web</li>
                <li>SQLite: banco leve para desenvolvimento local</li>
                <li>MongoDB: banco de documentos NoSQL</li>
                <li>Redis: cache em memória e filas</li>
                <li>ORMs: Prisma (Node.js), SQLAlchemy (Python), Sequelize</li>
                <li>Modelagem de dados e normalização</li>
                <li>Índices, transações e otimização de queries</li>
                <li>Migrations e seeds</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step9")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step9"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step9"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Bancos Relacionais</h4>
                    <a href="https://www.youtube.com/playlist?list=PLucm8g_ezqNoAkYKXN_zWupyH6hQCAwxY" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Boson Treinamentos - PostgreSQL do Zero
                    </a>
                    <a href="https://www.cursoemvideo.com/curso/mysql/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - MySQL
                    </a>
                    <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação PostgreSQL
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

          {/* Passo 10: Autenticação e Autorização */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-key"></i>
                </div>
                <h2 className="step-title">Autenticação e Autorização</h2>
              </div>
              <p className="step-subtitle">Passo 10: Protegendo seus Sistemas</p>
              <p className="step-content">
                Saber autenticar usuários e controlar o acesso a recursos é
                uma das habilidades mais críticas do back-end. Entenda os padrões
                modernos usados no mercado.
              </p>
              <ul className="step-topics">
                <li>Sessões vs Tokens: diferenças e quando usar</li>
                <li>JWT (JSON Web Token): geração, validação e refresh tokens</li>
                <li>OAuth 2.0 e OpenID Connect (login social)</li>
                <li>Autenticação com Google, GitHub e outros providers</li>
                <li>Controle de acesso: RBAC e ABAC</li>
                <li>Bcrypt e hashing de senhas</li>
                <li>Proteção de rotas e middlewares de autenticação</li>
                <li>2FA (autenticação de dois fatores)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step10")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step10"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step10"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://app.rocketseat.com.br/discover/trilhas/jwt" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - JWT do Zero ao Avançado
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - OAuth 2.0 explicado
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - Algoritmos de Hash e Bcrypt
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.alura.com.br/formacao-node-js" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Autenticação e Autorização com Node.js
                    </a>
                    <a href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Node.js Security: Auth Completo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-key"></i>
            </div>
          </div>

          {/* Passo 11: Segurança Web */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h2 className="step-title">Segurança Web</h2>
              </div>
              <p className="step-subtitle">Passo 11: Código Seguro por Design</p>
              <p className="step-content">
                Segurança não é opcional. Um desenvolvedor back-end precisa conhecer
                as principais vulnerabilidades e aplicar boas práticas para proteger
                dados, usuários e a infraestrutura da aplicação.
              </p>
              <ul className="step-topics">
                <li>OWASP Top 10: as vulnerabilidades mais críticas</li>
                <li>SQL Injection: causas e prevenção com ORMs</li>
                <li>XSS e CSRF: ataques e defesas</li>
                <li>CORS: configuração segura em APIs</li>
                <li>Helmet.js: headers de segurança no Express</li>
                <li>Rate limiting e proteção contra força bruta</li>
                <li>Sanitização e validação de inputs</li>
                <li>Gerenciamento seguro de segredos (variáveis de ambiente)</li>
                <li>HTTPS e certificados TLS</li>
                <li>Auditoria de dependências (npm audit)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step11")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step11"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step11"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Fundamentos de Segurança</h4>
                    <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Cassio Batista - Série OWASP Top 10
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - O que é CORS
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - Evitando XSS
                    </a>
                    <a href="https://www.youtube.com/@diasdedev" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - Criptografia na Prática
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Segurança com Node.js</h4>
                    <a href="https://helmetjs.github.io/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Helmet.js
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
              <p className="step-subtitle">Passo 12: APIs Confiáveis e Sustentáveis</p>
              <p className="step-content">
                Testar seu back-end garante que as regras de negócio funcionam
                corretamente e que mudanças futuras não quebrem o sistema. É uma
                exigência em times e empresas sérias.
              </p>
              <ul className="step-topics">
                <li>Pirâmide de testes: unitários, integração e e2e</li>
                <li>Jest: testes unitários em Node.js</li>
                <li>Vitest: alternativa moderna ao Jest</li>
                <li>Supertest: testes de integração para APIs Express</li>
                <li>Pytest: o framework padrão de testes em Python</li>
                <li>Mocks, stubs e spies</li>
                <li>TDD (Test Driven Development)</li>
                <li>Testes de banco com banco em memória ou containers</li>
                <li>Coverage report e CI com testes automáticos</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step12")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step12"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step12"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Node.js</h4>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - Testes com Jest e Supertest
                    </a>
                    <a href="https://jestjs.io/pt-BR/docs/getting-started" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Jest
                    </a>
                    <a href="https://vitest.dev/guide/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Vitest
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Python</h4>
                    <a href="https://docs.pytest.org/en/stable/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Pytest
                    </a>
                    <a href="https://www.youtube.com/@programacaodinamica" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Programação Dinâmica - Testes com Pytest
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-flask"></i>
            </div>
          </div>

          {/* Passo 13: Arquitetura de Software */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-diagram-project"></i>
                </div>
                <h2 className="step-title">Arquitetura de Software</h2>
              </div>
              <p className="step-subtitle">Passo 13: Código que Escala</p>
              <p className="step-content">
                Arquitetura define como seu sistema é organizado. Bons padrões
                tornam o código mais fácil de manter, testar e evoluir — e são
                exigidos em entrevistas para vagas pleno e sênior.
              </p>
              <ul className="step-topics">
                <li>Arquitetura em camadas (MVC, Repository Pattern)</li>
                <li>Clean Architecture e princípios SOLID</li>
                <li>Domain-Driven Design (DDD) básico</li>
                <li>Design Patterns: Factory, Strategy, Observer, Adapter</li>
                <li>Microsserviços vs Monolito: quando usar cada um</li>
                <li>Event-Driven Architecture e mensageria</li>
                <li>CQRS (Command Query Responsibility Segregation)</li>
                <li>API Gateway e BFF (Backend for Frontend)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step13")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step13"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step13"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/@FullCycle" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - Clean Architecture na Prática
                    </a>
                    <a href="https://app.rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Rocketseat - SOLID e Design Patterns em Node.js
                    </a>
                    <a href="https://www.youtube.com/@FullCycle" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - Introdução a Microsserviços
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://fullcycle.com.br/imersao-full-stack-full-cycle/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - Imersão Full Stack e Full Cycle
                    </a>
                    <a href="https://www.udemy.com/course/clean-architecture-na-pratica/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Clean Architecture com Node.js
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-diagram-project"></i>
            </div>
          </div>

          {/* Passo 14: Docker e Containers */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-docker"></i>
                </div>
                <h2 className="step-title">Docker e Containers</h2>
              </div>
              <p className="step-subtitle">Passo 14: Ambientes Reproduzíveis</p>
              <p className="step-content">
                Docker mudou a forma como desenvolvemos e entregamos software.
                Com containers, sua aplicação roda igual em qualquer máquina —
                do desenvolvimento à produção.
              </p>
              <ul className="step-topics">
                <li>O que são containers e por que usar</li>
                <li>Dockerfile: criando imagens customizadas</li>
                <li>Docker Compose: orquestrando múltiplos serviços</li>
                <li>Volumes e persistência de dados</li>
                <li>Redes no Docker</li>
                <li>Multi-stage builds para otimização</li>
                <li>Publicando imagens no Docker Hub</li>
                <li>Introdução ao Kubernetes (conceitos básicos)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step14")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step14"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step14"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a href="https://www.youtube.com/@fabricioveronez" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Fabricio Veronez - Docker do Zero
                    </a>
                    <a href="https://www.youtube.com/@FullCycle" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - Docker para Desenvolvedores
                    </a>
                    <a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Oficial Docker
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/docker-ferramenta-essencial-para-desenvolvedores/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - Docker: Ferramenta essencial para Devs
                    </a>
                    <a href="https://www.alura.com.br/formacao-docker" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação Docker
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-brands fa-docker"></i>
            </div>
          </div>

          {/* Passo 15: CI/CD e DevOps */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <h2 className="step-title">CI/CD e DevOps</h2>
              </div>
              <p className="step-subtitle">Passo 15: Entrega Contínua e Automação</p>
              <p className="step-content">
                CI/CD automatiza o processo de testar, validar e fazer deploy do
                seu código. Entender o básico de DevOps é um diferencial enorme
                e cada vez mais exigido no mercado.
              </p>
              <ul className="step-topics">
                <li>O que são Integração Contínua (CI) e Entrega Contínua (CD)</li>
                <li>GitHub Actions: pipelines com YAML</li>
                <li>GitLab CI/CD</li>
                <li>Jenkins: pipelines para ambientes corporativos</li>
                <li>ArgoCD e GitOps</li>
                <li>Deploy automatizado em VPS, Railway e Render</li>
                <li>Variáveis de ambiente em pipelines</li>
                <li>Estratégias de deploy: rolling, blue/green, canary</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step15")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step15"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step15"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>GitHub Actions</h4>
                    <a href="https://docs.github.com/pt/actions" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Dias de DEV - GitHub Actions: CI direto no GitHub
                    </a>
                    <a href="https://docs.github.com/pt/actions" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação GitHub Actions
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Jenkins e GitLab CI</h4>
                    <a href="https://www.youtube.com/@fabricioveronez" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Fabricio Veronez - Pipelines CI/CD com Jenkins
                    </a>
                    <a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Eduardo Mendes - GitLab CI do Zero ao Deploy
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>ArgoCD e GitOps</h4>
                    <a href="https://www.youtube.com/@FullCycle" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - Deploy Contínuo com GitOps e ArgoCD
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
              <i className="fa-solid fa-gears"></i>
            </div>
          </div>

          {/* Passo 16: Cloud e Infraestrutura */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-cloud"></i>
                </div>
                <h2 className="step-title">Cloud e Infraestrutura</h2>
              </div>
              <p className="step-subtitle">Passo 16: O Back-end em Produção Real</p>
              <p className="step-content">
                A nuvem é onde as aplicações vivem. Conhecer os provedores cloud e
                seus serviços é essencial para entregar e manter sistemas escaláveis,
                seguros e de alta disponibilidade.
              </p>
              <ul className="step-topics">
                <li>AWS: EC2, S3, RDS, Lambda e IAM</li>
                <li>Google Cloud Platform (GCP): Cloud Run, GKE</li>
                <li>Plataformas simplificadas: Railway, Render, Fly.io</li>
                <li>Servidores VPS: configuração com Linux (Ubuntu)</li>
                <li>Nginx e reverse proxy</li>
                <li>Monitoramento: Datadog, Grafana e Prometheus</li>
                <li>Logging centralizado com ELK Stack</li>
                <li>Serverless e funções como serviço (FaaS)</li>
                <li>Infraestrutura como Código com Terraform (básico)</li>
              </ul>
              <div className="step-resources">
                <p
                  className="resources-title toggle-resources"
                  onClick={() => toggleResource("back-step16")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step16"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step16"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Cloud Providers</h4>
                    <a href="https://aws.amazon.com/pt/free/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> AWS - Free Tier + Documentação Oficial
                    </a>
                    <a href="https://www.youtube.com/@fabricioveronez" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Fabricio Veronez - AWS para Devs
                    </a>
                    <a href="https://www.youtube.com/@FullCycle" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Full Cycle - Deploy com GCP
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Monitoramento e Infra</h4>
                    <a href="https://nginx.org/en/docs/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Documentação Nginx
                    </a>
                    <a href="https://grafana.com/docs/grafana/latest/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Grafana + Prometheus - Monitoramento de APIs
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a href="https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Udemy - AWS Certified Developer
                    </a>
                    <a href="https://www.alura.com.br/formacao-devops" target="_blank" rel="noopener noreferrer" className="resource-link">
                      <i className="fa-solid fa-link"></i> Alura - Formação DevOps
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-illustration">
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