// Espera a que se cargue todo para ejecutar el código
window.addEventListener('load', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;
    
    // Función para mostrar el ítem correspondiente
    function showItem(index) {
      galleryItems.forEach(item => item.classList.remove('active'));
      galleryItems[index].classList.add('active');
    }
    
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      showItem(currentIndex);
    });
    
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      showItem(currentIndex);
    });
  });