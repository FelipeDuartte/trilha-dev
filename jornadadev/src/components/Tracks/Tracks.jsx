import "./Tracks.css";
function Tracks() {
  return (
    <>
      <section id="tracks" className="pt-0 pb-5 bg-dark bg-opacity-50">
        <div className="container pb-5">
          <h2 className="section-title display-5 fw-bold text-center mb-2 gradient-text">
            Escolha sua Trilha
          </h2>
          <p className="section-subtitle text-center mb-3 fw-bold text-secondary">
            Selecione o caminho que deseja seguir
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="track-card h-100 p-4 bg-glass rounded-4 border border-light border-opacity-10 shadow d-flex flex-column justify-content-center align-items-center">
                <div className="track-icon mx-auto mb-4 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fas fa-laptop-code fs-3 text-primary"></i>
                </div>
                <h3 className="text-center mb-3">Front-end</h3>
                <p className="text-center mb-4 p-trilhas">
                  Desenvolva interfaces interativas e responsivas
                </p>
                <a
                  href="front-end.html"
                  className="btn btn-trilhas d-flex justify-content-center align-items-center p-3"
                >
                  Ver Trilha <i className="fa-solid fa-plane ms-2"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="track-card h-100 p-4 bg-glass rounded-4 border border-light border-opacity-10 shadow d-flex flex-column justify-content-center align-items-center">
                <div className="track-icon mx-auto mb-4 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fas fa-server fs-3 text-primary"></i>
                </div>
                <h3 className="text-center mb-3">Back-end</h3>
                <p className="text-center mb-4 p-trilhas">
                  Construa a lógica e infraestrutura por trás das aplicações
                </p>
                <a
                  href="back-end.html"
                  className="btn btn-trilhas d-flex justify-content-center align-items-center p-3"
                >
                  Ver Trilha <i className="fa-solid fa-plane ms-2"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="track-card h-100 p-4 bg-glass rounded-4 border border-light border-opacity-10 shadow d-flex flex-column justify-content-center align-items-center">
                <div className="track-icon mx-auto mb-4 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fas fa-code fs-3 text-primary"></i>
                </div>
                <h3 className="text-center mb-3">Full Stack</h3>
                <p className="text-center mb-4 p-trilhas">
                  Domine tanto o front-end quanto o back-end
                </p>
                <a
                  href="full-stack.html"
                  className="btn btn-trilhas d-flex justify-content-center align-items-center p-3"
                >
                  Ver Trilha <i className="fa-solid fa-plane ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tracks;
