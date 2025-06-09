function scrollCarrossel(id, direction) {
  const carrossel = document.getElementById(id);
  const cardWidth = 260; // Largura aproximada de cada produto + gap
  carrossel.scrollBy({
    left: direction * cardWidth * 2,
    behavior: 'smooth'
  });
}
