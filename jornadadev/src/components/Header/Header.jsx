import "./Header.css";
function Header() {
  return (
    <>
      <header className="fixed-top py-3 bg-dark bg-opacity-90 backdrop-blur border-bottom border-primary border-opacity-25">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <div className="container-fluid p-0">
              <a className="navbar-brand p-0" href="#">
                <div className="logo">
                  <h1 className="m-0 fs-3 fw-bold gradient-text JornadaDEV">
                    Jornada<span>DEV</span>
                  </h1>
                  <p className="m-0 p-header">Seu guia para o mundo digital</p>
                </div>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-lg-3">
                  <li className="nav-item">
                    <a
                      href="#hero"
                      className="nav-link d-flex align-items-center gap-2"
                    >
                      <i className="fas fa-rocket"></i> Início
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#tracks"
                      className="nav-link d-flex align-items-center gap-2"
                    >
                      <i className="fas fa-project-diagram"></i> Trilhas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#course-promotion"
                      className="nav-link d-flex align-items-center gap-2"
                    >
                      <i className="fas fa-toolbox"></i> Divulgação
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#about"
                      className="nav-link d-flex align-items-center gap-2"
                    >
                      <i className="fas fa-user-astronaut"></i> Sobre
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
