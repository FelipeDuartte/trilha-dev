// Botão Voltar ao Topo
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//links aparecendo e escondendo
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggle-resources");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const links = this.nextElementSibling;
      const icon = this.querySelector("i");

      if (links.style.display === "none" || !links.style.display) {
        links.style.display = "flex";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      } else {
        links.style.display = "none";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }
    });
  });
});

// Controle de abertura e fechamento do formulário
document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('open-form-btn');
  const closeBtn = document.getElementById('close-form-btn');
  const formWrapper = document.getElementById('contact-form-wrapper');

  // Abrir formulário
  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    formWrapper.style.display = 'block';
    
    // Scroll suave até o formulário
    setTimeout(() => {
      formWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  });

  // Fechar formulário
  closeBtn.addEventListener('click', function() {
    formWrapper.style.display = 'none';
  });

  // Fechar ao clicar fora (opcional)
  formWrapper.addEventListener('click', function(e) {
    if (e.target === formWrapper) {
      formWrapper.style.display = 'none';
    }
  });
});