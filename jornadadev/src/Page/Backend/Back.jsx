import { Link } from "react-router-dom";
import useTracksEffect from "../hooks/useTracksEffect.js";

export default function Back() {
  const { showBackToTop, scrollToTop, expandedResources, toggleResource } = useTracksEffect();
  
  return (
    <>
      <div className="track-container">
        <header className="track-header">
          <Link to="/">
            <button className="track-home-btn">
              <i className="fa-solid fa-house"></i> Home
            </button>
          </Link>

          <h1 className="track-title">Jornada Back-End Completo</h1>
          <p className="track-subtitle">
            Domine o desenvolvimento web Back-end seguindo este guia passo a passo, do básico ao avançado
          </p>
        </header>

        <div className="learning-path">
          {/* Passo 1: HTTP */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-link"></i>
                </div>
                <h2 className="step-title">HTTP</h2>
              </div>
              <p className="step-subtitle">Passo 1: Conheça mais sobre a internet</p>
              <p className="step-content">
                É importante saber os conceitos básicos sobre a internet.
              </p>
              <ul className="step-topics">
                <li>Como funciona a Web</li>
                <li>Como começou</li>
                <li>Características</li>
                <li>Protocolos</li>
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
                    <a
                      href="https://www.youtube.com/watch?v=CXzbUwK6lc8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Básico HTTP
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=B2IWlnJ_dt0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Dias de Dev - A internet por baixo dos panos
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fa-solid fa-link"></i>
            </div>
          </div>

          {/* Passo 2: Frontend Básico */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="bi bi-window"></i>
                </div>
                <h2 className="step-title">Básico de Frontend</h2>
              </div>
              <p className="step-subtitle">Passo 2: Front-end básico</p>
              <p className="step-content">
                É de muita importância aprender um pouco sobre o front-end para se dar bem no back-end.
              </p>
              <ul className="step-topics">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
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
                    <h4>HTML/CSS</h4>
                    <a
                      href="https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em video - HTML/CSS
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Javascript</h4>
                    <a
                      href="https://www.youtube.com/watch?v=1-w1RfGIov4&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em video - JavaScript
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="bi bi-window"></i>
            </div>
          </div>

          {/* Passo 3: Java ou Javascript */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-brands fa-java"></i>
                </div>
                <h2 className="step-title">Java ou Javascript</h2>
              </div>
              <p className="step-subtitle">Passo 3: Escolha uma linguagem para o Backend</p>
              <p className="step-content">
                Entenda como a linguagem lida com dados, requisições e regras de negócio.
              </p>
              <ul className="step-topics">
                <li>Algoritmos</li>
                <li>Dados</li>
                <li>Variáveis</li>
                <li>Java</li>
                <li>Javascript</li>
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
                    <a
                      href="https://www.cursoemvideo.com/curso/java-basico/#google_vignette"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - Java
                    </a>
                    <a
                      href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - JavaScript
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
                      <i className="fa-solid fa-link"></i> Udemy - Java
                    </a>
                    <a
                      href="https://www.alura.com.br/formacao-html-e-css"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Alura - Javascript
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration multiple-icons">
              <i className="bi bi-filetype-js"></i>
              <i className="bi bi-filetype-java"></i>
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
                <h2 className="step-title">Controle de Versão</h2>
              </div>
              <p className="step-subtitle">Passo 4: Trabalho em Equipe</p>
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
                  onClick={() => toggleResource("back-step4")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step4"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step4"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>Grátis</h4>
                    <a
                      href="https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em Vídeo - Git e GitHub
                    </a>
                    <a
                      href="https://www.youtube.com/playlist?list=PLlAbYrWSYTiPA2iEiQ2PF_A9j__C4hi0A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Willian Justen - Git e GitHub
                    </a>
                    <a
                      href="https://git-scm.com/doc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Documentação Oficial Git
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

          {/* Passo 5: Bancos de Dados */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-server"></i>
                </div>
                <h2 className="step-title">Bancos de Dados</h2>
              </div>
              <p className="step-subtitle">Passo 5: Bancos de dados são usados em quase todos os sistemas digitais.</p>
              <p className="step-content">
                Um banco de dados facilita o acesso rápido aos dados.
              </p>
              <ul className="step-topics">
                <li>SQL é a linguagem mais usada para bancos de dados.</li>
                <li>Existem bancos de dados relacionais e não relacionais.</li>
                <li>Chaves primárias identificam registros únicos.</li>
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
                    <h4>Relacionais</h4>
                    <a
                      href="https://www.youtube.com/watch?v=Z_SPrzlT4Fc&list=PLucm8g_ezqNoAkYKXN_zWupyH6hQCAwxY"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Boson Treinamentos - postgresSQL
                    </a>
                    <a
                      href="https://www.youtube.com/playlist?list=PLlAbYrWSYTiPA2iEiQ2PF_A9j__C4hi0A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso em video - MySQL
                    </a>
                    <a
                      href="https://www.youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Curso de SQL com SQL Server(T-SQL) - MS SQL 2014
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>NoSQL</h4>
                    <a
                      href="https://www.youtube.com/watch?v=u3sVM3viDtQ&list=PLxuFqIk29JL0DMM0Z-S9_XEHAexXvhYyb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Nataniel Paiva - MongoDB para iniciantes
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=s1xc1HVsRk0&list=PLalrWAGybpB-L1PGA-NfFu2uiWHEsdscD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> jumpstartCS - Apache Cassandra
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=uP_v6RhnP5U&list=PLHlHvK2lnJnccBL9grcoRxv8CsLa9Q_4q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> balta - Firebase
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fa-solid fa-server"></i>
            </div>
          </div>

          {/* Passo 6: Segurança */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <h2 className="step-title">Segurança</h2>
              </div>
              <p className="step-subtitle">Passo 6: Segurança</p>
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
                  onClick={() => toggleResource("back-step6")}
                >
                  Cursos para Aprendizado
                  <i className={`fa-solid ${expandedResources["back-step6"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                </p>
                <div className={`resources-links ${expandedResources["back-step6"] ? "show" : ""}`}>
                  <div className="resource-category">
                    <h4>CORS</h4>
                    <a
                      href="https://www.youtube.com/watch?v=Fha6Il-5RYE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Dias de DEV - O que é CORS
                      - Resolvendo o erro No 'Access-Control-Allow-Origin' header is present
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

          {/* Passo 7: Ferramenta de CI/CD */}
          <div className="step-container">
            <div className="step">
              <div className="timeline-marker"></div>
              <div className="step-header">
                <div className="step-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <h2 className="step-title">Ferramenta de CI/CD</h2>
              </div>
              <p className="step-subtitle">Passo 7: Escolha alguma ferramenta de CI/CD</p>
              <p className="step-content">
                Softwares que automatizam os processos de Integração Contínua (CI) e Entrega/Implantação Contínua (CD), otimizando o ciclo de desenvolvimento de software
              </p>
              <ul className="step-topics">
                <li>ArgoCD</li>
                <li>Github Actions</li>
                <li>Gitlab CI</li>
                <li>Jenkins</li>
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
                    <h4>ArgoCD</h4>
                    <a
                      href="https://www.youtube.com/watch?v=63HGUgQXD1w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Full Cycle - Deploy Contínuo com GitOps e ArgoCD
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Github Actions</h4>
                    <a
                      href="https://www.youtube.com/watch?v=ugrB9hNT9qw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Dias de DEV - GitHub Actions: Integração contínua direto no GitHub
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=IKjcdYQvcDo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> O Mario Souto - Dev Soutinho - que é CI e CD? Pra vc aprender e nunca mais esquecer!
                    </a>
                  </div>
                  <div className="resource-category">
                    <h4>Gitlab CI</h4>
                    <a
                      href="https://www.youtube.com/watch?v=wDjZGkfphbk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Eduardo Mendes - Do zero ao deploy #1 - Configurando o Gitlab-CI/Gitlab Pages
                    </a>
                    <h4>Jenkins</h4>
                    <a
                      href="https://www.youtube.com/watch?v=O6y27_Ol25g"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Fabricio Veronez - O básico de Pipelines CI/CD com Jenkins
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=ejHAKSdAlKs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <i className="fa-solid fa-link"></i> Feltex - Jenkins instalação e configuração Pipeline Java e Docker
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-illustration">
              <i className="fas fa-tools"></i>
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
            JornadaDEV &copy; <span>{new Date().getFullYear()}</span> - Todos os direitos reservados
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