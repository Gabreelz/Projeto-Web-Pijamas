// produto.js - JavaScript para página de produto

// Dados dos produtos
const products = {
  'pijama-verao-feminino-1': {
    name: 'Pijama de Verão Feminino Miney',
    price: 'R$ 59,90',
    description: 'Um pijama leve e confortável, perfeito para as noites quentes de verão. Feito com tecido respirável para garantir seu conforto durante toda a noite.',
    images: [
      'imagens/d1.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)',
      'Tecido 100% algodão',
      'Lavável na máquina'
    ]
  },
  'pijama-verao-feminino-2': {
    name: 'Pijama de Verão Feminino de Bolinhas',
    price: 'R$ 59,90',
    description: 'Pijama com estampa delicada de bolinhas, ideal para quem busca conforto e estilo. Tecido leve e respirável.',
    images: [
      'imagens/d2.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)',
      'Estampa exclusiva de bolinhas',
      'Tecido anti-alérgico'
    ]
  },
  'pijama-verao-feminino-3': {
    name: 'Pijama de Verão Feminino Coelinho',
    price: 'R$ 59,90',
    description: 'Pijama com design moderno e confortável, perfeito para relaxar em casa. Modelagem que valoriza o corpo feminino.',
    images: [
      'imagens/d3.png'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)',
      'Design exclusivo',
      'Modelagem confortável'
    ]
  },
  'pijama-verao-feminino-4': {
    name: 'Pijama de Verão Feminino',
    price: 'R$ 59,90',
    description: 'Pijama clássico de verão com excelente caimento. Ideal para noites quentes, proporcionando máximo conforto.',
    images: [
      'imagens/d4.png'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)',
      'Cor neutra versátil',
      'Acabamento de qualidade'
    ]
  },
  'pijama-verao-feminino-5': {
    name: 'Pijama de Verão Feminino',
    price: 'R$ 59,90',
    description: 'Pijama em tons suaves, perfeito para quem valoriza elegância e conforto. Tecido de alta qualidade.',
    images: [
      'imagens/d5.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)',
      'Cores suaves e elegantes',
      'Durabilidade garantida'
    ]
  },
  'pijama-verao-feminino-6': {
    name: 'Pijama de Verão Feminino Sorvete',
    price: 'R$ 59,90',
    description: 'Pijama com estampa divertida de sorvete, ideal para quem gosta de peças alegres e confortáveis.',
    images: [
      'imagens/d6.png'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)',
      'Estampa exclusiva de sorvete',
      'Perfeito para o verão'
    ]
  },
  'pijama-verao-feminino-7': {
    name: 'Pijama de Verão Feminino',
    price: 'R$ 59,90',
    description: 'Pijama versátil e confortável, ideal para relaxar em casa. Design atemporal que nunca sai de moda.',
    images: [
      'imagens/p1.png'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)',
      'Design atemporal',
      'Conforto garantido'
    ]
  },
  'pijama-inverno-masculino-1': {
    name: 'Pijama de Inverno Masculino Listrado',
    price: 'R$ 79,90',
    description: 'Pijama masculino com listras clássicas, ideal para noites frias. Tecido quente e confortável que garante boas noites de sono.',
    images: [
      'imagens/p4.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Ideal para noites de inverno',
      'Tamanhos personalizados sob medida (consulte)',
      'Tecido térmico'
    ]
  },
  'pijama-inverno-masculino-2': {
    name: 'Pijama de Inverno Masculino',
    price: 'R$ 79,90',
    description: 'Pijama masculino clássico para inverno. Tecido de alta qualidade que mantém o calor corporal durante toda a noite.',
    images: [
      'imagens/p2.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Ideal para noites de inverno',
      'Tamanhos personalizados sob medida (consulte)',
      'Material isolante térmico'
    ]
  },
  'pijama-inverno-feminino-1': {
    name: 'Pijama de Inverno Feminino',
    price: 'R$ 79,90',
    description: 'Pijama feminino para inverno com design elegante. Proporciona calor e conforto durante as noites mais frias.',
    images: [
      'imagens/p3.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Ideal para noites de inverno',
      'Tamanhos personalizados sob medida (consulte)',
      'Tecido macio e quente'
    ]
  },
  'pijama-inverno-feminino-2': {
    name: 'Pijama de Inverno Feminino Rosa',
    price: 'R$ 79,90',
    description: 'Pijama feminino em tom rosa delicado, perfeito para o inverno. Combina elegância, conforto e aquecimento.',
    images: [
      'imagens/p5.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Ideal para noites de inverno',
      'Tamanhos personalizados sob medida (consulte)',
      'Cor rosa exclusiva'
    ]
  }
};

// Função para alterar a imagem principal
function mudarImagem(thumbnail) {
  const mainImage = document.getElementById('imagemPrincipal');
  const allThumbs = document.querySelectorAll('.thumb-item');
  
  // Remove classe active de todas as thumbnails
  allThumbs.forEach(thumb => thumb.classList.remove('active'));
  
  // Adiciona classe active na thumbnail clicada
  thumbnail.classList.add('active');
  
  // Atualiza a imagem principal com animação
  mainImage.style.opacity = '0.5';
  
  setTimeout(() => {
    mainImage.src = thumbnail.src;
    mainImage.style.opacity = '1';
  }, 150);
}

// Função para popular os detalhes do produto
function populateProductDetails(product) {
  // Atualiza o título da página
  document.title = product.name + ' - NK Pijamas';
  
  // Atualiza o nome do produto
  document.getElementById('product-name').textContent = product.name;
  
  // Atualiza o preço
  document.getElementById('product-price').textContent = product.price;
  
  // Atualiza a descrição
  document.getElementById('product-description').textContent = product.description;

  // Atualiza a lista de detalhes
  const detailsList = document.getElementById('product-details');
  detailsList.innerHTML = '';
  
  product.details.forEach(detail => {
    const li = document.createElement('li');
    li.textContent = detail;
    detailsList.appendChild(li);
  });

  // Configuração das imagens
  const mainImage = document.getElementById('imagemPrincipal');
  const thumbnailsContainer = document.getElementById('thumbnails-container');
  
  // Limpa o container de thumbnails
  thumbnailsContainer.innerHTML = '';

  // Verifica se há múltiplas imagens
  if (product.images.length > 1) {
    // Cria thumbnails para múltiplas imagens
    product.images.forEach((imagePath, index) => {
      const thumb = document.createElement('img');
      thumb.src = imagePath;
      thumb.alt = `Imagem ${index + 1} de ${product.name}`;
      thumb.className = 'thumb-item';
      
      // Primeira imagem fica ativa por padrão
      if (index === 0) {
        thumb.classList.add('active');
      }
      
      // Adiciona evento de clique
      thumb.addEventListener('click', () => mudarImagem(thumb));
      
      thumbnailsContainer.appendChild(thumb);
    });
    
    // Mostra o container de thumbnails
    thumbnailsContainer.style.display = 'grid';
  } else {
    // Se há apenas uma imagem, esconde o container de thumbnails
    thumbnailsContainer.style.display = 'none';
  }

  // Define a imagem principal (sempre a primeira)
  if (product.images.length > 0) {
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
  }
  
  // Configura o link do WhatsApp
  const whatsappLink = document.getElementById('whatsapp-link');
  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${product.name} - ${product.price}`
  );
  
  // Substitua pelo seu número de WhatsApp
  whatsappLink.href = `https://wa.me/5599999999999?text=${message}`;
}

// Função para mostrar erro quando produto não é encontrado
function showProductNotFound() {
  const container = document.querySelector('.produto-container');
  container.innerHTML = `
    <div style="text-align: center; padding: 60px 20px;">
      <h1 style="color: #f5938b; font-size: 2.5rem; margin-bottom: 20px;">
        Produto não encontrado
      </h1>
      <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px;">
        Desculpe, o produto que você está procurando não existe ou foi removido.
      </p>
      <a href="Catalogo.html" style="display: inline-block; background-color: #f5938b; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
        Ver Catálogo
      </a>
    </div>
  `;
}

// Função para adicionar efeito de loading
function showLoading() {
  const elements = [
    document.getElementById('product-name'),
    document.getElementById('product-price'),
    document.getElementById('product-description')
  ];
  
  elements.forEach(el => {
    if (el) el.classList.add('loading');
  });
}

// Função para remover efeito de loading
function hideLoading() {
  const elements = document.querySelectorAll('.loading');
  elements.forEach(el => el.classList.remove('loading'));
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  // Mostra loading
  showLoading();
  
  // Obtém o ID do produto da URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  
  // Simula um pequeno delay para mostrar o loading
  setTimeout(() => {
    const product = products[productId];
    
    // Remove loading
    hideLoading();
    
    if (product) {
      populateProductDetails(product);
    } else {
      showProductNotFound();
    }
  }, 500);
});

// Função para scroll suave ao topo quando necessário
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Adiciona evento para voltar ao topo quando a página carrega
window.addEventListener('load', () => {
  scrollToTop();
});