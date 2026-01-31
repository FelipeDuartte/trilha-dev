import "./Hero.css";
import { useEffect, useRef } from "react";

function Hero() {
  const typingTitleRef = useRef(null);

  useEffect(() => {
    const element = typingTitleRef.current;
    if (!element) return;

    const fullText =
      "O caminho certo para você se tornar um desenvolvedor de sucesso.";
    const highlight = "desenvolvedor de sucesso.";
    const typingSpeed = 60;
    let i = 0;

    function typeWriter() {
      if (i < fullText.length) {
        const current = fullText.substring(0, i + 1);
        const formatted = current.replace(
          new RegExp(`(${highlight})$`),
          '<span class="gradient-text-hero">$1</span>',
        );
        element.innerHTML = formatted;
        i++;
        setTimeout(typeWriter, typingSpeed);
      }
    }

    element.innerHTML = "";
    typeWriter();
  }, []);

  return (
    <>
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center pt-5 mb-5 position-relative overflow-hidden"
      >
        {/* Background Effects - Sutis */}
        <div className="hero-grid-bg"></div>
        <div className="hero-gradient-orb"></div>
        
        <div className="container pt-5 position-relative">
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-lg-6 text-lg-start pt-4">
              <h1 ref={typingTitleRef} className="display-4 fw-bold mb-4">
                O caminho certo para você se tornar um
                <span className="gradient-text-hero">
                  desenvolvedor de sucesso.
                </span>
              </h1>

              <p className="mb-4 fs-6 p-hero">
                Aprenda de forma gratuita as tecnologias que estão moldando o
                futuro
              </p>
              
              <div className="gap-3 my-4">
                <a
                  href="#tracks"
                  className="btn btnExplorarTrilha btn-primary btn-lg px-4 py-3 d-inline-flex justify-content-center align-items-center fw-bold"
                >
                  <span>Explorar Trilhas</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            
            <div className="col-lg-6 pb-4">
              <div className="video-wrapper">
                <div className="video-container rounded-4">
                  <video
                    className="video-hero rounded-4"
                    src=""
                    playsinline
                    controls
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;