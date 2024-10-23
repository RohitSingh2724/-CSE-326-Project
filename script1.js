function filterGenres() {
    const input = document.getElementById('search').value.toLowerCase();
    const genres = document.querySelectorAll('.genre');

    genres.forEach(genre => {
        const title = genre.querySelector('h2').textContent.toLowerCase();
        if (title.includes(input)) {
            genre.style.display = 'block';
        } else {
            genre.style.display = 'none';
        }
    });
}