
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
    const interval = 5000; // 5 segundos
    let autoSlide;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlide = setInterval(showNextItem, interval);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    document.querySelector('.next').addEventListener('click', () => {
        stopAutoSlide();
        showNextItem();
        startAutoSlide(); // Reinicia o auto-slide após interação do usuário
    });

    document.querySelector('.prev').addEventListener('click', () => {
        stopAutoSlide();
        showPrevItem();
        startAutoSlide(); // Reinicia o auto-slide após interação do usuário
    });

    // Inicia o auto-slide quando a página carrega
    startAutoSlide();

