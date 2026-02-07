import "./About.css";

function About() {
  return (
    <>
      <section
        id="about"
        className="py-5 bg-dark bg-opacity-50 d-flex justify-content-center position-relative overflow-hidden"
      >
        {/* Subtle animated background */}
        <div className="tech-grid-bg"></div>
        
        <div className="container py-5 d-flex row align-items-center justify-content-center position-relative">
          {/* Enhanced header */}
          <div className="text-center mb-5">
            <h2 className="section-title display-5 fw-bold mb-2 position-relative d-inline-block">
              Sobre o <span className="gradient-text-enhanced">JornadaDEV</span>
              <span className="title-glow"></span>
            </h2>
            <p className="section-subtitle mb-0 mx-auto fw-semibold text-secondary">
              Um projeto independente para ajudar desenvolvedores
            </p>
          </div>

          <div className="row g-5 p-0 m-0">
            {/* Developer Card - Enhanced */}
            <div className="col-lg-5">
              <div className="developer-card p-4 rounded-4 shadow position-relative">
                <div className="card-border-glow"></div>
                <div className="dev-info d-flex flex-column align-items-center justify-content-center position-relative">
                  <div className="avatar-container mb-3">
                    <div className="avatar-glow"></div>
                    <div className="avatar-inner">
                      <i className="bi bi-code-slash fs-1 text-primary"></i>
                    </div>
                  </div>
                  <h3 className="fs-3 mb-3 text-white fw-bold">
                    Olá, eu sou Felipe Duarte!
                  </h3>
                  <p className="mb-4 text-center p-about">
                    Desenvolvedor autodidata que decidiu compartilhar o caminho
                    que percorri para aprender.
                  </p>
                  <a
                    href="https://github.com/seuuser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tech-github"
                  >
                    <i className="bi bi-github"></i> 
                    <span>Meu GitHub</span>
                    <div className="btn-shine"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Info Cards - Enhanced */}
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="about-card h-100 p-4 rounded-3 shadow position-relative">
                    <div className="card-glow-effect"></div>
                    <div className="card-icon-wrapper mb-3">
                      <div className="card-icon bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-lightbulb fs-4 text-white"></i>
                      </div>
                      <div className="icon-pulse"></div>
                    </div>
                    <h3 className="fs-5 mb-2 fw-bold">Como surgiu</h3>
                    <p className="m-0">
                      Depois de passar por muitas dificuldades para aprender de
                      forma certa, decidi criar este guia para
                      ajudar outros que estão começando.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-card h-100 p-4 rounded-3 shadow position-relative">
                    <div className="card-glow-effect"></div>
                    <div className="card-icon-wrapper mb-3">
                      <div className="card-icon bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-heart fs-4 text-white"></i>
                      </div>
                      <div className="icon-pulse"></div>
                    </div>
                    <h3 className="fs-5 mb-2 fw-bold">Filosofia</h3>
                    <p className="m-0">
                      Acredito que o conhecimento deve ser compartilhado de
                      forma acessível e prática. Todo o conteúdo aqui é baseado
                      na minha experiência real de aprendizado.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-card h-100 p-4 rounded-3 shadow position-relative">
                    <div className="card-glow-effect"></div>
                    <div className="card-icon-wrapper mb-3">
                      <div className="card-icon bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-arrow-clockwise fs-4 text-white"></i>
                      </div>
                      <div className="icon-pulse"></div>
                    </div>
                    <h3 className="fs-5 mb-2 fw-bold">Atualizações</h3>
                    <p className="m-0">
                      Mantenho o projeto atualizado conforme aprendo novas
                      tecnologias e recebo feedbacks da comunidade.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="call-to-action h-100 p-4 rounded-3 shadow d-flex flex-column justify-content-center position-relative">
                    <div className="cta-glow"></div>
                    <h3 className="fs-5 mb-2 fw-bold">
                      Quer contribuir ou sugerir melhorias?
                    </h3>
                    <p className="mb-3">
                      Este é um projeto aberto e em constante evolução. Sua
                      opinião é valiosa!
                    </p>
                    <a
                      href="mailto:seuemail@exemplo.com"
                      className="btn-mail-simple"
                    >
                      <i className="bi bi-envelope"></i> 
                      <span>Enviar sugestão</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;