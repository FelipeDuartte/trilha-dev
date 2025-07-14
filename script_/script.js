// Botão Voltar ao Topo
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Adicione ao seu script.js
document.querySelectorAll('.step').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--border-x', `${x}px`);
    card.style.setProperty('--border-y', `${y}px`);
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--border-x', '50%');
    card.style.setProperty('--border-y', '50%');
  });
});
