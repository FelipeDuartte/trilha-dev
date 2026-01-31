import { Link } from "react-router-dom";
import useTracksEffect from "../hooks/useTracksEffect.js";

export default function Front() {
  const { showBackToTop, scrollToTop, expandedResources, toggleResource } = useTracksEffect();
  
  return (
    <>
      <div className="track-container">
        <header className="track-header">
          <nav>
            <Link to="/">
              <button className="track-home-btn">
                <i className="fa-solid fa-house"></i> Home
              </button>
            </Link>
          </nav>

          <h1 className="track-title">Jornada Front-End Completo</h1>
          <p className="track-subtitle">
            Domine o desenvolvimento web front-end seguindo este guia passo a
            passo, do básico ao avançado
          </p>
        </header>

        <div className="learning-path">
          {/* Passo 1: Segurança */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="bi-solid bi-lock"></i>
                </div>
                <h2 className="step-title">Segurança</h2>
              </div>
              <p className="step-subtitle">Passo 1: Segurança</p>
              <p className="step-content">
                A segurança da Web refere-se às medidas de proteção tomadas pelos
                desenvolvedores para proteger os aplicativos da Web de ameaças que
                podem afetar os negócios.
              </p>
              <ul className="step-topics">
                <li>CORS</li>
                <li>OWASP</li>
                <li>Cookies</li>
                <li>Criptografia</li>
                <li>Autenticação e autorização</li>
                <li>prevenção de ataques</li>
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
                    <h4>CORS</h4>
                    <a
                      href="https://www.youtube.com/watch?v=Fha6Il-5RYE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Dias de DEV - O que é CORS
                      - Resolvendo o erro No 'Access-Control-Allow-Origin' header
                      is present
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>OWASP</h4>
                    <a
                      href="https://www.youtube.com/watch?v=wC_epzVm780"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Cassio Batista Pereira -
                      Série OWASP Top 10 | 1/10 Injection | Código Seguro #017
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Cookies</h4>
                    <a
                      href="https://dias.dev/2022-09-27-cookies-e-seguranca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Cookies
                    </a>
                    <h4>Criptografia</h4>
                    <a
                      href="https://www.youtube.com/watch?v=soTJbV8MxGU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Dias de DEV - Algoritmos
                      de Hash - Qual a diferença entre Hash e Encriptação
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=4MCO-FgukcA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Dias de DEV -
                      Criptografia: Encriptação e decriptação na prática - Entenda
                      sobre cifragem
                    </a>
                    <h4>Prevenção de ataques</h4>
                    <a
                      href="https://www.youtube.com/watch?v=MEfgCLE3Dw8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Dias de DEV - Ataque com
                      Regex - Negação de serviço com expressões regulares
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=lntsVxPZibw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Dias de DEV - Segurança da
                      Informação: Evitando Cross-site scripting (XSS)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fas fa-shield-alt"></i>
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
                Aprenda a criar a estrutura básica de páginas web com HTML
                semântico.
              </p>
              <ul className="step-topics">
                <li>Elementos semânticos (header, section, article, etc.)</li>
                <li>Formulários e validação</li>
                <li>Acessibilidade básica (ARIA)</li>
                <li>SEO básico com HTML</li>
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
                    <a
                      href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - HTML5
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=5PS6ku8NzIE&list=PLirko8T4cEmx5eBb1-9j6T6Gl4aBtZ_5x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Marco Bruno - HTML e
                      Semântica
                    </a>
                    <a
                      href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> MDN Web Docs
                      (Documentação)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a
                      href="https://www.udemy.com/course/html-essencial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Udemy - HTML Essencial
                    </a>
                    <a
                      href="https://www.alura.com.br/formacao-html-e-css"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Alura - Formação HTML e
                      CSS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fab fa-html5"></i>
            </div>
          </div>

          {/* Passo 3: CSS */}
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
                Domine a estilização de páginas web avec CSS3 e técnicas modernas.
              </p>
              <ul className="step-topics">
                <li>Flexbox e Grid Layout</li>
                <li>Animações e Transições</li>
                <li>Variáveis CSS</li>
                <li>Design Responsivo</li>
                <li>Pré-processadores (SASS)</li>
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
                    <a
                      href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - CSS3
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=5PS6ku8NzIE&list=PLirko8T4cEmx5eBb1-9j6T6Gl4aBtZ_5x"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Marco Bruno - Pare de
                      chutar o CSS
                    </a>
                    <a
                      href="https://css-tricks.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> CSS Tricks (Artigos)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a
                      href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Udemy - CSS Completo
                    </a>
                    <a
                      href="https://www.alura.com.br/formacao-html-e-css"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Alura - Formação HTML e
                      CSS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fab fa-css3-alt"></i>
            </div>
          </div>

          {/* Passo 4: JavaScript */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-square-js"></i>
                </div>
                <h2 className="step-title">JavaScript Essencial</h2>
              </div>
              <p className="step-subtitle">Passo 4: Interatividade</p>
              <p className="step-content">
                Adicione comportamento dinâmico às suas páginas com JavaScript.
              </p>
              <ul className="step-topics">
                <li>Manipulação do DOM</li>
                <li>Eventos</li>
                <li>Var, Let, Const</li>
                <li>Array</li>
                <li>Function</li>
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
                    <a
                      href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em Vídeo -
                      JavaScript
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=vEwPnjqWQ-g&list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Programação Web - JS
                      completo
                    </a>
                    <a
                      href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> MDN JavaScript
                      (Documentação)
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a
                      href="https://www.udemy.com/course/javascript-completo-2018-do-iniciante-ao-mestre/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Udemy - JavaScript
                      Completo
                    </a>
                    <a
                      href="https://www.alura.com.br/formacao-javascript"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Alura - Formação
                      JavaScript
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>

          {/* Passo 5: Git */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <h2 className="step-title">Controle de Versão</h2>
              </div>
              <p className="step-subtitle">Passo 5: Trabalho em Equipe</p>
              <p className="step-content">
                Aprenda a usar Git para versionamento e colaboração em projetos.
              </p>
              <ul className="step-topics">
                <li>Comandos básicos do Git</li>
                <li>GitHub/GitLab</li>
                <li>Branches e Merges</li>
                <li>Pull Requests</li>
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
                    <a
                      href="https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - Git e
                      GitHub
                    </a>
                    <a
                      href="https://www.youtube.com/playlist?list=PLlAbYrWSYTiPA2iEiQ2PF_A9j__C4hi0A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Willian Justen - Git e
                      GitHub
                    </a>
                    <a
                      href="https://git-scm.com/doc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Documentação Oficial
                      Git
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a
                      href="https://www.udemy.com/course/git-e-github-para-iniciantes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Udemy - Git e GitHub
                    </a>
                    <a
                      href="https://www.alura.com.br/formacao-git-github"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Alura - Formação Git e
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fa-brands fa-github"></i>
            </div>
          </div>

          {/* Passo 6: Frameworks Front-end */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-react"></i>
                </div>
                <h2 className="step-title">Frameworks Front-end</h2>
              </div>
              <p className="step-subtitle">Passo 6: Frameworks Front-end</p>
              <p className="step-content">
                Domine frameworks JavaScript para construir aplicações complexas.
              </p>
              <ul className="step-topics">
                <li>React.js (Componentes, Hooks)</li>
                <li>Vue.js</li>
                <li>Angular</li>
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
                    <h4>React</h4>
                    <a
                      href="https://www.youtube.com/watch?v=hd2B7XQAFls"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Programação Web - Curso de
                      React Para Iniciantes
                    </a>
                    <a
                      href="https://pt-br.reactjs.org/docs/getting-started.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Documentação React
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Vue.js</h4>
                    <a
                      href="https://www.youtube.com/playlist?list=PLcoYAcR89n-qTYqfWTGxXMnAvCqY3JF8w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Vue.js Básico
                    </a>
                    <a
                      href="https://vuejs.org/guide/introduction.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Documentação Vue.js
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Angular</h4>
                    <a
                      href="https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Loiane Groner - Angular
                    </a>
                    <a
                      href="https://angular.io/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Documentação Angular
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration multiple-icons">
              <i className="fa-brands fa-vuejs"></i>
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-angular"></i>
            </div>
          </div>

          {/* Passo 7: Frameworks CSS */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <h2 className="step-title">Frameworks CSS</h2>
              </div>
              <p className="step-subtitle">Passo 7: Frameworks CSS</p>
              <p className="step-content">
                Domine frameworks CSS para construir sites com facilidade.
              </p>
              <ul className="step-topics">
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Tailwind CSS</li>
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
                    <h4>Bootstrap</h4>
                    <a
                      href="https://www.youtube.com/playlist?list=PLnDvRpP8Bnexu5wvxogy6N49_S5Xk8Cze"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Matheus Battisti -
                      Bootstrap
                    </a>
                    <a
                      href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Documentação Bootstrap
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Bulma</h4>
                    <a
                      href="https://www.youtube.com/watch?v=Yxkti4L6-Wk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Escola de JavaScript -
                      Bulma
                    </a>
                    <a
                      href="https://bulma.io/documentation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Documentação Bulma
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Tailwind CSS</h4>
                    <a
                      href="https://www.youtube.com/watch?v=1eLaBow7Zbo&list=PLcoYAcR89n-r1m-tMfV4qndrRWpT_rb9u"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Tiago Matos - Tailwind
                    </a>
                    <a
                      href="https://tailwindcss.com/docs/installation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Documentação Tailwind
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i class="fa-brands fa-css3"></i>
            </div>
          </div>

          {/* Passo 8: TypeScript */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="bi bi-typescript"></i>
                </div>
                <h2 className="step-title">TypeScript</h2>
              </div>
              <p className="step-subtitle">
                Passo 8: TypeScript, o editor te ajuda a programar com mais
                segurança.
              </p>
              <p className="step-content">
                TypeScript adiciona tipos ao JavaScript para evitar erros antes de
                rodar o código.
              </p>
              <ul className="step-topics">
                <li>Fundamentos do TypeScript</li>
                <li>Tipos Primitivos e Inferência</li>
                <li>Boas práticas</li>
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
                    <h4>Gratis</h4>
                    <a
                      href="https://www.youtube.com/watch?v=kg2-SMolAV0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> TypeScript - O que é e
                      quais os seus benefícios? | Diego Fernandes
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=lCemyQeSCV8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> CURSO DE TYPESCRIPT NA
                      PRÁTICA - APRENDA TYPESCRIPT EM 1 HORA
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=fx7JqqCw1qg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Construindo um app
                      fullstack com o melhor do TypeScript
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Pagos</h4>
                    <a
                      href="https://www.youtube.com/watch?v=1eLaBow7Zbo&list=PLcoYAcR89n-r1m-tMfV4qndrRWpT_rb9u"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> xxx
                    </a>
                    <a
                      href="https://tailwindcss.com/docs/installation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> xxx
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="bi bi-typescript"></i>
            </div>
          </div>

          {/* Passo 9: Ferramentas e Otimização */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <h2 className="step-title">Ferramentas e Otimização</h2>
              </div>
              <p className="step-subtitle">Passo 9: Ferramentas e Otimização</p>
              <p className="step-content">
                Aprenda as ferramentas essenciais para desenvolvimento
                profissional.
              </p>
              <ul className="step-topics">
                <li>npm/yarn</li>
                <li>Testes (Jest, Testing Library, Cypress)</li>
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
                    <h4>Gerenciadores de Pacote</h4>
                    <a
                      href="https://www.youtube.com/watch?v=tFqsmNrWW0M"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Fellyph Cintra - NPM - O
                      gerenciador de pacotes do Node.js
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=3BPfDo4arHc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> DevPleno - Yarn - Uma
                      alternativa gerenciador de pacotes NPM
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Testes</h4>
                    <a
                      href="https://www.devmedia.com.br/teste-unitario-com-jest/41234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Testes com Jest
                    </a>
                    <a
                      href="https://testing-library.com/docs/react-testing-library/intro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Testing Library
                    </a>
                    <a
                      href="https://www.youtube.com/playlist?list=PLnUo-Rbc3jjyx5BVnG8MB7vNd5ecu2yP1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Cypress - Cypress do zero
                      ao reporte
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
          </div>

          {/* Passo 10: Ferramentas de Build */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <h2 className="step-title">Ferramentas de Build</h2>
              </div>
              <p className="step-subtitle">Passo 10: Ferramentas de Build</p>
              <p className="step-content">
                Ferramentas de build preparam seu código para o mundo real.
              </p>
              <ul className="step-topics">
                <li>Task Runners</li>
                <li>Module Bundlers</li>
                <li>Formatadores e Linters</li>
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
                    <h4>Task Runners</h4>
                    <a
                      href="https://docs.npmjs.com/cli/v6/using-npm/scripts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      Task Runners
                    </a>
                    <h4>Module Bundlers</h4>
                    <a
                      href="https://www.youtube.com/watch?v=sU3W2ZTt-8I"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Webpack - Curso rápido
                      para iniciantes
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=u0euWX6CeIg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Webpack - Aprenda de uma
                      vez por todas
                    </a>
                    <a
                      href="https://blog.logrocket.com/getting-started-esbuild/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> LogRocket - esbuild
                    </a>
                    <a
                      href="https://dev.to/lixeletto/vite-js-o-build-tool-que-vai-facilitar-a-sua-vida-15ho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Vite.js
                    </a>
                    <a
                      href="https://eduardo-diogo.medium.com/vite-js-killer-na-cria%C3%A7%C3%A3o-de-frontend-9b083f8a77e6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> ViteJS, O Killer na
                      criação de frontend.
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Formatadores e Linters</h4>
                    <a
                      href="https://www.youtube.com/watch?v=uem6ChxImEQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Como instalar o
                      Prettier
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=i26sZrPj2zY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Eslint para iniciantes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
          </div>

          {/* Botão Voltar ao Topo */}
          <button 
            className={`back-to-top ${showBackToTop ? 'show' : ''}`} 
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
            JornadaDEV &copy; <span>{new Date().getFullYear()}</span> - Todos os direitos
            reservados
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