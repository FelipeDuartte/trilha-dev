import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-tech py-5 border-top border-light border-opacity-10 position-relative overflow-hidden">
        {/* Background Effects */}
        <div className="footer-grid-bg"></div>
        <div className="footer-gradient-overlay"></div>
        
        <div className="container py-4 position-relative">
          <div className="row g-4">
            {/* Brand Section */}
            <div className="col-lg-3">
              <div className="footer-brand mb-3">
                <h3 className="h5 mb-3 d-flex align-items-center gap-2">
                  <span className="brand-icon">
                    <i className="bi bi-code-square"></i>
                  </span>
                  <span className="brand-text">JornadaDEV</span>
                </h3>
              </div>
              <p className="footer-description small">
                Seu guia para se tornar um desenvolvedor completo.
              </p>
              <div className="brand-accent-line mt-3"></div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3">
              <h3 className="footer-title h5 mb-3">Links Rápidos</h3>
              <ul className="list-unstyled footer-list">
                <li className="mb-2">
                  <a href="#home" className="links">
                    <span className="link-bullet"></span>
                    Início
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#tracks" className="links">
                    <span className="link-bullet"></span>
                    Trilhas
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#resources" className="links">
                    <span className="link-bullet"></span>
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#about" className="links">
                    <span className="link-bullet"></span>
                    Sobre
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-3">
              <h3 className="footer-title h5 mb-3">Contato</h3>
              <ul className="list-unstyled footer-contact">
                <li className="mb-3 d-flex align-items-start gap-2">
                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <span className="contact-text">Duarte.dev@outlook.com</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="contact-icon">
                    <i className="bi bi-instagram"></i>
                  </div>
                  <a 
                    href="#" 
                    className="contact-link text-decoration-none"
                  >
                    @fduarte.dev
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="col-lg-3">
              <h3 className="footer-title h5 mb-3">Redes Sociais</h3>
              <div className="social-icons d-flex gap-3">
                <a href="#" className="social-link" aria-label="GitHub">
                  <div className="social-icon-wrapper">
                    <i className="bi bi-github"></i>
                    <div className="social-glow"></div>
                  </div>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <div className="social-icon-wrapper">
                    <i className="bi bi-instagram"></i>
                    <div className="social-glow"></div>
                  </div>
                </a>
                <a href="#" className="social-link" aria-label="TikTok">
                  <div className="social-icon-wrapper">
                    <i className="bi bi-tiktok"></i>
                    <div className="social-glow"></div>
                  </div>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <div className="social-icon-wrapper">
                    <i className="bi bi-youtube"></i>
                    <div className="social-glow"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom text-center mt-5 pt-4 border-top border-light border-opacity-10">
            <div className="footer-glow-line"></div>
            <p className="small mb-2 text-secondary-tech">
              &copy; 2025 JornadaDEV. Todos os direitos reservados.
            </p>
            <p className="small mb-0">
              <span className="text-secondary-tech">Desenvolvido por </span>
              <a 
                href="https://felipeduartte.github.io/my-portfolio/" 
                className="dev-link text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Felipe Duarte</strong>
                <span className="coffee-icon">☕</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;