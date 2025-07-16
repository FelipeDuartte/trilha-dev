document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typing-title");
  const fullText = "Transforme linhas de código em realidade digital";
  const highlight = "realidade digital";
  const typingSpeed = 60;
  let i = 0;

  function typeWriter() {
    if (i < fullText.length) {
      const current = fullText.substring(0, i + 1);
      const formatted = current.replace(
        new RegExp(`(${highlight})$`),
        '<span class="gradient-span">$1</span>'
      );
      element.innerHTML = formatted;
      i++;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  // Limpa o conteúdo antes de começar a digitação
  element.innerHTML = "";
  typeWriter();
});
