document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typing-title");
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
        '<span class="gradient-text-hero">$1</span>'
      );
      element.innerHTML = formatted;
      i++;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  element.innerHTML = "";
  typeWriter();
});
function revealCardsOnScroll() {
  const cards = document.querySelectorAll(".track-card");
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealCardsOnScroll);
window.addEventListener("load", revealCardsOnScroll);
function revealOnScroll() {
  const elements = document.querySelectorAll(".fade-up");
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
