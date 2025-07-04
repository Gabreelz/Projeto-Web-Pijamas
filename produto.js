
  function toggleMenu() {
    document.querySelector('nav.menu').classList.toggle('active');
  }
  
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

function mudarImagem(thumbnail) {
  const mainImage = document.getElementById('imagemPrincipal');
  const allThumbs = document.querySelectorAll('.thumb-item');
  
  allThumbs.forEach(thumb => thumb.classList.remove('active'));
  
  thumbnail.classList.add('active');
  
  mainImage.style.opacity = '0.5';
  
  setTimeout(() => {
    mainImage.src = thumbnail.src;
    mainImage.style.opacity = '1';
  }, 150);
}


function populateProductDetails(product) {

  document.title = product.name + ' - NK Pijamas';
  
  document.getElementById('product-name').textContent = product.name;
  
  document.getElementById('product-price').textContent = product.price;
  
  document.getElementById('product-description').textContent = product.description;

  const detailsList = document.getElementById('product-details');
  detailsList.innerHTML = '';
  
  product.details.forEach(detail => {
    const li = document.createElement('li');
    li.textContent = detail;
    detailsList.appendChild(li);
  });

  const mainImage = document.getElementById('imagemPrincipal');
  const thumbnailsContainer = document.getElementById('thumbnails-container');
  
  thumbnailsContainer.innerHTML = '';

  if (product.images.length > 1) {
    product.images.forEach((imagePath, index) => {
      const thumb = document.createElement('img');
      thumb.src = imagePath;
      thumb.alt = `Imagem ${index + 1} de ${product.name}`;
      thumb.className = 'thumb-item';

      if (index === 0) {
        thumb.classList.add('active');
      }

      thumb.addEventListener('click', () => mudarImagem(thumb));
      
      thumbnailsContainer.appendChild(thumb);
    });
    
    thumbnailsContainer.style.display = 'grid';
  } else {
    thumbnailsContainer.style.display = 'none';
  }

  if (product.images.length > 0) {
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
  }
  
  const whatsappLink = document.getElementById('whatsapp-link');
  const message = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${product.name} - ${product.price}`
  );
  
  whatsappLink.href = `https://wa.me/5544991644270?text=${message}`;
}

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


function hideLoading() {
  const elements = document.querySelectorAll('.loading');
  elements.forEach(el => el.classList.remove('loading'));
}


document.addEventListener('DOMContentLoaded', () => {
  showLoading();
  

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  
  setTimeout(() => {
    const product = products[productId];
    
    hideLoading();
    
    if (product) {
      populateProductDetails(product);
    } else {
      showProductNotFound();
    }
  }, 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('load', () => {
  scrollToTop();
});