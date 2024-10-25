let currentIndex = 0;

function moveCarousel(direction) {
    const carouselContainer = document.querySelector('.carousel-container');
    const movieCards = document.querySelectorAll('.movie-card');
    
    const totalMovies = movieCards.length;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalMovies - 1;
    } else if (currentIndex >= totalMovies) {
        currentIndex = 0;
    }

    const offset = -currentIndex * (movieCards[0].clientWidth + 10); // 10 is the margin
    carouselContainer.style.transform = `translateX(${offset}px)`;
}
