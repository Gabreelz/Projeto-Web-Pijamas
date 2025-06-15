// Carrossel de Destaques simples (mantido de home/script.js)
(() => {
  const items = document.querySelectorAll('.carousel-destaques .carousel-item');
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }, 6000);
})();

// Função para rolar carrosséis (presente em ambos e consolidada)
function scrollCarrossel(id, direction) {
  const carrossel = document.getElementById(id);
  const cardWidth = 260; // Largura aproximada de cada produto + gap
  carrossel.scrollBy({
    left: direction * cardWidth * 2,
    behavior: 'smooth'
  });
}