function scrollCarrossel(id, direction) {
  const carrossel = document.getElementById(id);
  const cardWidth = 260; 
  carrossel.scrollBy({
    left: direction * cardWidth * 2,
    behavior: 'smooth'
  });
}
