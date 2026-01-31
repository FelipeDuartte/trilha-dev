import "./Tracks.css";
import { Link } from "react-router-dom";

function Tracks() {
  return (
    <>
      <section id="tracks" className="pt-0 pb-5 bg-dark bg-opacity-50 position-relative overflow-hidden">
        {/* Background Effects */}
        <div className="tracks-grid-bg"></div>
        <div className="tracks-gradient-orb-1"></div>
        <div className="tracks-gradient-orb-2"></div>
        
        <div className="container pb-5 position-relative">
          {/* Header */}
          <div className="text-center mb-5">
            <div className="tracks-badge mb-3">
              <span className="badge-pulse"></span>
              <span className="badge-text-tracks">COMECE SUA JORNADA</span>
            </div>
            <h2 className="section-title display-5 fw-bold mb-2 gradient-text-tracks">
              Escolha sua Trilha
            </h2>
            <p className="section-subtitle mb-0 fw-semibold text-secondary">
              Selecione o caminho que deseja seguir
            </p>
          </div>

          {/* Track Cards */}
          <div className="row g-4 justify-content-center">
            {/* Front-end Track */}
            <div className="col-md-4">
              <div className="track-card h-100 p-4 rounded-4 d-flex flex-column justify-content-center align-items-center position-relative">
                <div className="track-card-glow"></div>
                <div className="track-border-effect"></div>
                
                <div className="track-icon-wrapper mb-4">
                  <div className="track-icon-glow"></div>
                  <div className="track-icon bg-primary-gradient rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-window fs-1 text-white"></i>
                  </div>
                </div>
                
                <h3 className="text-center mb-3 fw-bold track-title">Front-end</h3>
                <p className="text-center mb-4 p-trilhas">
                  Desenvolva interfaces interativas e responsivas
                </p>
                
                <Link
                  to="/Front-end"
                  onClick={() => window.scrollTo(0, 0)}
                  className="btn-track-modern"
                >
                  <span className="btn-track-text">
                    Ver Trilha
                    <i className="bi bi-arrow-right ms-2"></i>
                  </span>
                  <div className="btn-track-shine"></div>
                </Link>
                
                <div className="track-accent-line"></div>
              </div>
            </div>

            {/* Back-end Track */}
            <div className="col-md-4">
              <div className="track-card track-card-featured h-100 p-4 rounded-4 d-flex flex-column justify-content-center align-items-center position-relative">
                <div className="featured-badge">
                  <i className="bi bi-star-fill me-1"></i>
                  POPULAR
                </div>
                <div className="track-card-glow"></div>
                <div className="track-border-effect"></div>
                
                <div className="track-icon-wrapper mb-4">
                  <div className="track-icon-glow"></div>
                  <div className="track-icon bg-primary-gradient rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-database fs-1 text-white"></i>
                  </div>
                </div>
                
                <h3 className="text-center mb-3 fw-bold track-title">Back-end</h3>
                <p className="text-center mb-4 p-trilhas">
                  Construa a lógica e infraestrutura por trás das aplicações
                </p>
                
                <Link
                  to="/Back-end"
                  onClick={() => window.scrollTo(0, 0)}
                  className="btn-track-modern"
                >
                  <span className="btn-track-text">
                    Ver Trilha
                    <i className="bi bi-arrow-right ms-2"></i>
                  </span>
                  <div className="btn-track-shine"></div>
                </Link>
                
                <div className="track-accent-line"></div>
              </div>
            </div>

            {/* Full Stack Track */}
            <div className="col-md-4">
              <div className="track-card h-100 p-4 rounded-4 d-flex flex-column justify-content-center align-items-center position-relative">
                <div className="track-card-glow"></div>
                <div className="track-border-effect"></div>
                
                <div className="track-icon-wrapper mb-4">
                  <div className="track-icon-glow"></div>
                  <div className="track-icon bg-primary-gradient rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-code-square fs-1 text-white"></i>
                  </div>
                </div>
                
                <h3 className="text-center mb-3 fw-bold track-title">Full Stack</h3>
                <p className="text-center mb-4 p-trilhas">
                  Domine tanto o front-end quanto o back-end
                </p>
                
                <Link
                  to="/full-stack"
                  onClick={() => window.scrollTo(0, 0)}
                  className="btn-track-modern"
                >
                  <span className="btn-track-text">
                    Ver Trilha
                    <i className="bi bi-arrow-right ms-2"></i>
                  </span>
                  <div className="btn-track-shine"></div>
                </Link>
                
                <div className="track-accent-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tracks;