function trocarImagem(caminhoDaMiniatura) {
  const imagemPrincipal = document.getElementById('imagem-principal');
  // Troca a imagem principal pela imagem da miniatura clicada (em tamanho maior)
  imagemPrincipal.src = caminhoDaMiniatura.replace('80x80', '400x400');
}/**
 * Função para rolar o carrossel de produtos.
 * Reutilizada do script do Catálogo.
 * @param {string} id - O ID do elemento do carrossel.
 * @param {number} direction - A direção do scroll (-1 para esquerda, 1 para direita).
 */
function scrollCarrossel(id, direction) {
  const carrossel = document.getElementById(id);
  // Usa a largura do próprio elemento para um scroll mais responsivo
  const scrollAmount = carrossel.clientWidth * 0.8; 
  carrossel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

/**
 * Nova função para a galeria de imagens da página de produto.
 * Muda a imagem principal ao clicar em uma miniatura.
 * @param {HTMLElement} thumbnailElement - O elemento da miniatura que foi clicado.
 */
function mudarImagem(thumbnailElement) {
  // Encontra a imagem principal
  const imagemPrincipal = document.getElementById('imagemPrincipal');
  // Define o 'src' da imagem principal para o 'src' da miniatura clicada
  imagemPrincipal.src = thumbnailElement.src;

  // Atualiza a classe 'active' para destacar a miniatura selecionada
  const miniaturas = document.querySelectorAll('.thumb-item');
  miniaturas.forEach(thumb => {
    thumb.classList.remove('active');
  });
  thumbnailElement.classList.add('active');
}