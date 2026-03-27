import "./Hero.css";
import { useEffect, useRef } from "react";
import videoSm from "../../assets/jornadaSm.mp4";

function Hero() {
  const typingTitleRef = useRef(null);

  useEffect(() => {
    const element = typingTitleRef.current;
    if (!element) return;

    const fullText = "Seu guia gratuito para o mundo tech.";
    const highlight = "Seu guia gratuito";
    const typingSpeed = 60;
    let i = 0;
    let timeout;

    function typeWriter() {
      if (i < fullText.length) {
        const current = fullText.substring(0, i + 1);
        const formatted = current.replace(
          highlight,
          `<span class="gradient-text-hero">${highlight}</span>`
        );
        element.innerHTML = formatted;
        i++;
        timeout = setTimeout(typeWriter, typingSpeed);
      }
    }

    element.innerHTML = "";
    typeWriter();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero">
      {/* Background decorations */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
      </div>

      <div className="hero-inner ">
        {/* ── LEFT: Copy ── */}
        <div className="hero-copy">
<h1 ref={typingTitleRef} className="hero-title" />

          <p className="hero-desc">
            Aprenda de forma gratuita as tecnologias que estão moldando o futuro
            — de zero até o mercado de trabalho.
          </p>

          <div className="hero-cta-group">
            <a
              href="#tracks"
              className="btn-hero-primary"
            >
              <span>Explorar Trilhas</span>
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
            <span className="hero-scroll-hint">Role para ver mais</span>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-pill">
              <span className="pill-icon"><i className="bi bi-patch-check-fill" /></span>
              <div>
                <strong>100% Gratuito</strong>
                <p>com as melhores <em className="highlight-videaula">videoaulas</em></p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Video ── */}
        <div className="hero-visual">
          <div className="hero-visual-bg-card" aria-hidden="true" />

          <div className="video-container">
            <div className="video-inner">
              <video
                className="video-hero"
                playsInline
                controls
                preload="metadata"
                aria-label="Vídeo de introdução à Jornada Tech"
              >
                <source src={videoSm} type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Hero;