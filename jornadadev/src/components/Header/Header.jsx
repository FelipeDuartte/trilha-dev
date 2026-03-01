// Header.jsx
import "./Header.css";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <header className="fixed-top py-2 bg-dark bg-opacity-90 backdrop-blur border-bottom border-primary border-opacity-25">
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
                <ul className="navbar-nav ms-auto gap-lg-3 align-items-lg-center">
                  <li className="nav-item">
                    <a href="#hero" className="nav-link d-flex align-items-center gap-2">
                      <i className="fas fa-rocket"></i> Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#tracks" className="nav-link d-flex align-items-center gap-2">
                      <i className="fas fa-project-diagram"></i> Trilhas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#contact-support" className="nav-link d-flex align-items-center gap-2">
                      <i className="bi bi-question-octagon-fill"></i> Duvidas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link d-flex align-items-center gap-2">
                      <i className="fas fa-user-astronaut"></i> Sobre
                    </a>
                  </li>

                  {/* — Área de autenticação — */}
                  {user ? (
                    // Logado: mostra nome + botão sair
                    <li className="nav-item d-flex align-items-center gap-3">
                      <span className="text-light small fw-semibold">
                        <i className="fas fa-circle-check text-primary me-1"></i>
                        {user.displayName || user.email}
                      </span>
                      <button
                        onClick={handleLogout}
                        className="btn btn-outline-danger btn-sm px-3"
                      >
                        <i className="fas fa-sign-out-alt me-1"></i> Sair
                      </button>
                    </li>
                  ) : (
                    // Deslogado: botão que leva para /login
                    <li className="nav-item">
                      <Link to="/login" className="btn btn-primary btn-sm px-3">
                        <i className="fas fa-sign-in-alt me-1"></i> Entrar
                      </Link>
                    </li>
                  )}
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