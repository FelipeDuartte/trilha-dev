import "./Footer.css";

function Footer() {

  return (
    <>
      <footer className="py-5 border-top border-light border-opacity-10">
  <div className="container py-4">
    <div className="row g-4">
      <div className="col-lg-3">
        <h3 className="h5 mb-3">JornadaDEV</h3>
        <p className="small">
          Seu guia para se tornar um desenvolvedor completo.
        </p>
      </div>

      <div className="col-lg-3">
        <h3 className="h5 mb-3">Links Rápidos</h3>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a
              href="#home"
              className="text-decoration-none hover-accent links"
            >
              - Início
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#tracks"
              className="text-decoration-none hover-accent links"
            >
              - Trilhas
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#resources"
              className="text-decoration-none hover-accent links"
            >
              - Recursos
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-decoration-none hover-accent links"
            >
              - Sobre
            </a>
          </li>
        </ul>
      </div>

      <div className="col-lg-3">
        <h3 className="h5 mb-3">Contato</h3>
        <ul className="list-unstyled">
          <li className="mb-2">
            <i className="fas fa-envelope me-2"></i>
            Duarte.dev@outlook.com
          </li>
          <li>
            <i className="fas fa-globe me-2"></i>
            www.xxxxxx.com
          </li>
        </ul>
      </div>

      <div className="col-lg-3">
        <h3 className="h5 mb-3">Redes Sociais</h3>
        <div className="social-icons d-flex gap-2">
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom text-center mt-5 pt-4 border-top border-light border-opacity-10">
      <p className="small mb-2">
        &copy; 2025 JornadaDEV. Todos os direitos reservados.
      </p>
      <p className="small">
        - Desenvolvido por <strong>Felipe Duarte ☕</strong>
      </p>
    </div>
  </div>
</footer>
    </>
  );
}

export default Footer;
