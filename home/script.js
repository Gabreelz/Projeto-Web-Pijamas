
    // Carrossel Destaques simples
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

    // Carrossel Promoções 3 por vez
    (() => {
      const container = document.querySelector('.carousel-promocoes-container');
      const track = container.querySelector('.carousel-promocoes');
      const items = track.querySelectorAll('.carousel-item');
      const btnPrev = container.querySelector('.carousel-btn.prev');
      const btnNext = container.querySelector('.carousel-btn.next');

      const totalItems = items.length;
      const visibleCount = 3;
      let currentIndex = 0;

      // Ajusta a largura do track para acomodar todos os itens
      track.style.width = `${(100 / visibleCount) * totalItems}%`;

      function updateCarousel() {
        if (currentIndex < 0) currentIndex = totalItems - visibleCount;
        if (currentIndex > totalItems - visibleCount) currentIndex = 0;

        const offsetPercent = -(currentIndex * (100 / totalItems));
        track.style.transform = `translateX(${offsetPercent}%)`;
      }

      btnPrev.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
      });

      btnNext.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
      });

      setInterval(() => {
        currentIndex++;
        updateCarousel();
      }, 6000);

      updateCarousel();
    })();
