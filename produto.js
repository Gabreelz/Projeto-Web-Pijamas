// Passo 1: Coloque os dados dos seus produtos aqui no topo do arquivo.
// Este objeto (JSON-like) funciona como seu catálogo de produtos.
const products = {
  'pijama-verao-feminino-1': {
    name: 'Pijama de Verão Feminino Miney ',
    price: 'R$ 59,90',
    description: 'Um pijama leve e confortável, perfeito para as noites quentes de verão. Feito com tecido respirável para garantir seu conforto.',
    images: [
      'imagens/d1.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-verao-feminino-2': {
    name: 'Pijama de Verão Feminino de Bolinhas',
    price: 'R$ 59,90',
    description: 'Um pijama leve e confortável, perfeito para as noites quentes de verão. Feito com tecido respirável para garantir seu conforto.',
    images: [
      'imagens/d2.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-verao-feminino-3': {
    name: 'Pijama de Verão Feminino Cuelinho',
    price: 'R$ 59,90',
    description: 'Um pijama leve e confortável, perfeito para as noites quentes de verão. Feito com tecido respirável para garantir seu conforto.',
    images: [
      'imagens/d3.png'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-verao-feminino-4': {
    name: 'Pijama de Verão Feminino',
    price: 'R$ 59,90',
    description: 'Um pijama leve e confortável, perfeito para as noites quentes de verão. Feito com tecido respirável para garantir seu conforto.',
    images: [
      'imagens/d4.png'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-verao-feminino-5': {
    name: 'Pijama de Verão Feminino',
    price: 'R$ 59,90',
    description: 'Um pijama leve e confortável, perfeito para as noites quentes de verão. Feito com tecido respirável para garantir seu conforto.',
    images: [
      'imagens/d5.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-verao-feminino-6': {
    name: 'Pijama de Verão Feminino Sorvete',
    price: 'R$ 59,90',
    description: 'Um pijama leve e confortável, perfeito para as noites quentes de verão. Feito com tecido respirável para garantir seu conforto.',
    images: [
      'imagens/d6.png'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-verao-feminino-7': {
    name: 'Pijama de Verão Feminino',
    price: 'R$ 59,90',
    description: 'Um pijama leve e confortável, perfeito para as noites quentes de verão. Feito com tecido respirável para garantir seu conforto.',
    images: [
      'imagens/p1.png'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-inverno-masculino-1': {
    name: 'Pijama de Inverno Masculino Listrado',
    price: 'R$ 79,90',
    description: 'Conforto e estilo para suas noites frias. Feito com material de alta qualidade para garantir o melhor descanso.',
    images: [
      'imagens/p4.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Ideal para noites de inverno',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-inverno-masculino-2': {
    name: 'Pijama de Inverno Masculino',
    price: 'R$ 79,90',
    description: 'Conforto e estilo para suas noites frias. Feito com material de alta qualidade para garantir o melhor descanso.',
    images: [
      'imagens/p2.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Ideal para noites de inverno',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-inverno-feminino-1': {
    name: 'Pijama de Inverno Feminino',
    price: 'R$ 79,90',
    description: 'Conforto e estilo para suas noites frias. Feito com material de alta qualidade para garantir o melhor descanso.',
    images: [
      'imagens/p3.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Ideal para noites de inverno',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  },
  'pijama-inverno-feminino-2': {
    name: 'Pijama de Inverno Feminino Rosa',
    price: 'R$ 79,90',
    description: 'Conforto e estilo para suas noites frias. Feito com material de alta qualidade para garantir o melhor descanso.',
    images: [
      'imagens/p5.jpg'
    ],
    details: [
      'Pagamento via crédito, débito ou pix',
      'Disponível nos tamanhos P, M, G e GG',
      'Ideal para noites de inverno',
      'Tamanhos personalizados sob medida (consulte)'
    ]
  }
};

// Passo 2: O resto do código funciona da mesma forma, lendo os dados do objeto acima.
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = products[productId];

  if (product) {
    populateProductDetails(product);
  } else {
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = '<h1>Produto não encontrado!</h1>';
  }
});

function populateProductDetails(product) {
  document.title = product.name;
  document.getElementById('product-name').textContent = product.name;

  const detailsList = document.getElementById('product-details');
  detailsList.innerHTML = '';
  product.details.forEach(detail => {
    const li = document.createElement('li');
    li.textContent = `- ${detail}`;
    detailsList.appendChild(li);
  });

  const mainImage = document.getElementById('imagemPrincipal');
  const thumbnailsContainer = document.getElementById('thumbnails-container');
  thumbnailsContainer.innerHTML = '';
  // Garante que o container de miniaturas seja visível por padrão
  thumbnailsContainer.style.display = 'flex';


  // --- AJUSTE IMPORTANTE AQUI ---
  // Apenas mostra as miniaturas se houver MAIS DE UMA imagem.
  if (product.images.length > 1) {
    product.images.forEach((imagePath, index) => {
      const thumb = document.createElement('img');
      thumb.src = imagePath;
      thumb.alt = `Miniatura ${index + 1} de ${product.name}`;
      thumb.className = 'thumb-item';
      if (index === 0) thumb.classList.add('active');
      thumb.onclick = () => mudarImagem(thumb);
      thumbnailsContainer.appendChild(thumb);
    });
  } else {
    // Se tiver apenas uma imagem, esconde a área de miniaturas.
    thumbnailsContainer.style.display = 'none';
  }

  // Define a imagem principal (sempre a primeira da lista)
  if (product.images.length > 0) {
    mainImage.src = product.images[0];
  }
  
  const whatsappLink = document.getElementById('whatsapp-link');
  const message = encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name}`);
  // Lembre-se de colocar seu número de WhatsApp aqui
  whatsappLink.href = `https://wa.me/55SEUNUMERO?text=${message}`;
}