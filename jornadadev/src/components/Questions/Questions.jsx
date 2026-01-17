import "./Questions.css";
export default function Questions() {
    return (
       <>
      <section id="contact-support" className="py-5">
  <div className="container">
    <div className="text-center mb-5 fade-up">
      <h2 className="h5 mb-3">PRECISA DE AJUDA?</h2>
      <h3 className="display-5 fw-bold mb-3 gradient-span">
        Estamos Aqui para Ajudar
      </h3>
      <p
        className="p-trilhas mx-auto"
        style={{ maxWidth: "700px" }}
      >
        Tire suas dúvidas sobre as trilhas, conteúdo ou qualquer outra questão.
        Responderemos o mais rápido possível!
      </p>
    </div>

    <div className="row g-4">
      <div className="col-md-4 fade-up fade-delay-1">
        <div className="card h-100 border-0 bg-dark-blue-transparent overflow-hidden">
          <div className="card-body p-4 position-relative text-center">
            <div className="icon-wrapper-tech mb-4 mx-auto">
              <i className="fas fa-envelope"></i>
            </div>
            <h4 className="h5 mb-3">Email</h4>
            <p className="small mb-3">
              Envie sua dúvida por email e receba resposta em até 24 horas
            </p>
            <a
              href="mailto:contato@seusite.com"
              className="contact-link"
            >
              contato@seusite.com
            </a>
          </div>
          <div className="card-tech-overlay"></div>
        </div>
      </div>

      <div className="col-md-4 fade-up fade-delay-2">
        <div className="card h-100 border-0 bg-dark-blue-transparent overflow-hidden">
          <div className="card-body p-4 position-relative text-center">
            <div className="icon-wrapper-tech mb-4 mx-auto">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h4 className="h5 mb-3">WhatsApp</h4>
            <p className="small mb-3">
              Fale conosco diretamente pelo WhatsApp de forma rápida e prática
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              (11) 99999-9999
            </a>
          </div>
          <div className="card-tech-overlay"></div>
        </div>
      </div>

      <div className="col-md-4 fade-up fade-delay-3">
        <div className="card h-100 border-0 bg-dark-blue-transparent overflow-hidden">
          <div className="card-body p-4 position-relative text-center">
            <div className="icon-wrapper-tech mb-4 mx-auto">
              <i className="fas fa-comments"></i>
            </div>
            <h4 className="h5 mb-3">Formulário</h4>
            <p className="small mb-3">
              Preencha nosso formulário detalhado para dúvidas mais complexas
            </p>
            <a
              href="#"
              className="contact-link"
              id="open-form-btn"
            >
              Abrir formulário
            </a>
          </div>
          <div className="card-tech-overlay"></div>
        </div>
      </div>
    </div>

    <div
      className="row mt-5 fade-up fade-delay-2"
      id="contact-form-wrapper"
      style={{ display: "none" }}
    >
      <div className="col-lg-8 mx-auto">
        <div className="card border-0 bg-dark-blue-transparent" id="contact-form">
          <div className="card-body p-4 p-md-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="h5 mb-0">Envie sua Mensagem</h4>
              <button
                type="button"
                className="btn-close-custom"
                id="close-form-btn"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small">Nome completo</label>
                  <input
                    type="text"
                    className="form-control form-control-dark"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-dark"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small">Assunto</label>
                  <select
                    className="form-control form-control-dark"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="trilha">Dúvida sobre trilhas</option>
                    <option value="tecnico">Problema técnico</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label small">Mensagem</label>
                  <textarea
                    className="form-control form-control-dark"
                    rows={5}
                    placeholder="Descreva sua dúvida ou mensagem..."
                    required
                  ></textarea>
                </div>

                <div className="col-12 text-center mt-4">
                  <button
                    type="submit"
                    className="btn-course-promo px-5 py-2"
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    Enviar Mensagem
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-4 fade-up fade-delay-3">
      <p className="small text-muted">
        <i className="fas fa-clock me-2"></i>
        Tempo médio de resposta: 24 horas úteis
      </p>
    </div>
  </div>
</section>
       </>
    );
}