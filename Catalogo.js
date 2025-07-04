function toggleMenu() {
  document.querySelector('nav.menu').classList.toggle('active');
}

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
  }, 10000); 
})();


function scrollCarrossel(id, direction) {
  const carrossel = document.getElementById(id);
  const cardWidth = 260; 
  carrossel.scrollBy({
    left: direction * cardWidth * 1, 
    behavior: 'smooth'
  });
}