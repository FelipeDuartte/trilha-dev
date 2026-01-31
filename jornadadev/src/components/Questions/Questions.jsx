import "./Questions.css";

export default function Questions() {
  return (
    <>
      <section id="contact-support" className="py-5 position-relative overflow-hidden">
        {/* Background Effects */}
        <div className="questions-grid-bg"></div>
        <div className="questions-gradient-orb"></div>
        
        <div className="container position-relative">
          {/* Header */}
          <div className="text-center mb-5 fade-up">
            <div className="section-badge mb-3">
              <span className="badge-dot"></span>
              <span className="badge-text">PRECISA DE AJUDA?</span>
              <span className="badge-dot"></span>
            </div>
            <h3 className="display-5 fw-bold mb-3 gradient-text-questions">
              Estamos Aqui para Ajudar
            </h3>
            <p className="p-trilhas mx-auto" style={{ maxWidth: "700px" }}>
              Tire suas dúvidas sobre as trilhas, conteúdo ou qualquer outra questão.
              Responderemos o mais rápido possível!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="row g-4">
            {/* Email Card */}
            <div className="col-md-4 fade-up fade-delay-1">
              <div className="contact-card h-100 position-relative">
                <div className="card-glow-border"></div>
                <div className="card-content p-4 text-center">
                  <div className="icon-wrapper-tech mb-4 mx-auto">
                    <div className="icon-glow"></div>
                    <i className="bi bi-envelope"></i>
                  </div>
                  <h4 className="h5 mb-3 fw-bold">Email</h4>
                  <p className="small mb-3 text-description">
                    Envie sua dúvida por email e receba resposta em até 24 horas
                  </p>
                  <a href="mailto:contato@seusite.com" className="contact-link">
                    <span>contato@seusite.com</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
                <div className="card-tech-overlay"></div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="col-md-4 fade-up fade-delay-2">
              <div className="contact-card h-100 position-relative">
                <div className="card-glow-border"></div>
                <div className="card-content p-4 text-center">
                  <div className="icon-wrapper-tech mb-4 mx-auto">
                    <div className="icon-glow"></div>
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <h4 className="h5 mb-3 fw-bold">WhatsApp</h4>
                  <p className="small mb-3 text-description">
                    Fale conosco diretamente pelo WhatsApp de forma rápida e prática
                  </p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span>(11) 99999-9999</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
                <div className="card-tech-overlay"></div>
              </div>
            </div>

            {/* Form Card */}
            <div className="col-md-4 fade-up fade-delay-3">
              <div className="contact-card h-100 position-relative">
                <div className="card-glow-border"></div>
                <div className="card-content p-4 text-center">
                  <div className="icon-wrapper-tech mb-4 mx-auto">
                    <div className="icon-glow"></div>
                    <i className="bi bi-file-text"></i>
                  </div>
                  <h4 className="h5 mb-3 fw-bold">Formulário</h4>
                  <p className="small mb-3 text-description">
                    Preencha nosso formulário detalhado para dúvidas mais complexas
                  </p>
                  <a href="#" className="contact-link" id="open-form-btn">
                    <span>Abrir formulário</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
                <div className="card-tech-overlay"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="row mt-5 fade-up fade-delay-2"
            id="contact-form-wrapper"
            style={{ display: "none" }}
          >
            <div className="col-lg-8 mx-auto">
              <div className="form-card position-relative" id="contact-form">
                <div className="form-card-glow"></div>
                <div className="card-body p-4 p-md-5">
                  {/* Form Header */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="h5 mb-0 fw-bold d-flex align-items-center gap-2">
                      <span className="form-icon-badge">
                        <i className="bi bi-chat-dots"></i>
                      </span>
                      Envie sua Mensagem
                    </h4>
                    <button
                      type="button"
                      className="btn-close-custom"
                      id="close-form-btn"
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>

                  {/* Form */}
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small">
                          <i className="bi bi-person me-1"></i>
                          Nome completo
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-dark"
                          placeholder="Seu nome"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label small">
                          <i className="bi bi-envelope me-1"></i>
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-dark"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label small">
                          <i className="bi bi-bookmark me-1"></i>
                          Assunto
                        </label>
                        <select className="form-control form-control-dark" required>
                          <option value="">Selecione um assunto</option>
                          <option value="trilha">Dúvida sobre trilhas</option>
                          <option value="tecnico">Problema técnico</option>
                          <option value="sugestao">Sugestão</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="form-label small">
                          <i className="bi bi-chat-left-text me-1"></i>
                          Mensagem
                        </label>
                        <textarea
                          className="form-control form-control-dark"
                          rows={5}
                          placeholder="Descreva sua dúvida ou mensagem..."
                          required
                        ></textarea>
                      </div>

                      <div className="col-12 text-center mt-4">
                        <button type="submit" className="btn-send-message">
                          <span className="btn-text">
                            <i className="bi bi-send me-2"></i>
                            Enviar Mensagem
                          </span>
                          <div className="btn-shine-effect"></div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="text-center mt-5 fade-up fade-delay-3">
            <div className="response-time-badge">
              <i className="bi bi-clock me-2"></i>
              Tempo médio de resposta: 24 horas úteis
            </div>
          </div>
        </div>
      </section>
    </>
  );
}