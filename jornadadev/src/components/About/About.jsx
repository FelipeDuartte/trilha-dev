import "./About.css";

function About() {
  return (
    <>
      <section
        id="about"
        className="py-5 bg-dark bg-opacity-50 d-flex justify-content-center"
      >
        <div className="container py-5 d-flex row align-items-center justify-content-center">
          <h2 className="section-title display-5 fw-bold text-center mb-2 gradient-text">
            Sobre o <span className="gradient-text">JornadaDEV</span>
          </h2>
          <p className="section-subtitle text-center mb-0 mx-auto fw-bold text-secondary">
            Um projeto independente para ajudar desenvolvedores
          </p>

          <div className="row g-5 p-0 m-0">
            <div className="col-lg-5">
              <div className="developer-card p-4 rounded-4 shadow">
                <div className="dev-info d-flex flex-column align-items-center justify-content-center">
                  <h3 className="fs-3 mb-3 text-primary">
                    Olá, eu sou Felipe Duarte!
                  </h3>
                  <p className="mb-4 text-center p-about">
                    Desenvolvedor autodidata que decidiu compartilhar o caminho
                    que percorri para aprender.
                  </p>
                  <a
                    href="https://github.com/seuuser"
                    target="_blank"
                    className="btn-tech-github"
                  >
                    <i className="fab fa-github"></i> Meu GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="about-card h-100 p-4 rounded-3 shadow">
                    <div className="card-icon bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-3">
                      <i className="fas fa-lightbulb text-primary"></i>
                    </div>
                    <h3 className="fs-5 mb-2">Como surgiu</h3>
                    <p className="m-0">
                      Depois de passar por muitas dificuldades para aprender de
                      forma certa e estruturada, decidi criar este guia para
                      ajudar outros que estão começando.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-card h-100 p-4 rounded-3 shadow">
                    <div className="card-icon bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-3">
                      <i className="fas fa-heart text-primary"></i>
                    </div>
                    <h3 className="fs-5 mb-2">Filosofia</h3>
                    <p className="m-0">
                      Acredito que o conhecimento deve ser compartilhado de
                      forma acessível e prática. Todo o conteúdo aqui é baseado
                      na minha experiência real de aprendizado.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-card h-100 p-4 rounded-3 shadow">
                    <div className="card-icon bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-3">
                      <i className="fas fa-sync-alt text-primary"></i>
                    </div>
                    <h3 className="fs-5 mb-2">Atualizações</h3>
                    <p className="m-0">
                      Mantenho o projeto atualizado conforme aprendo novas
                      tecnologias e recebo feedbacks da comunidade.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="call-to-action h-100 p-4 rounded-3 shadow d-flex flex-column justify-content-center">
                    <h3 className="fs-5 mb-2">
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
                      <i className="fas fa-envelope"></i> Enviar sugestão
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
