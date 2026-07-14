function populatedCardHover(cardId) {
    const card = document.getElementById(cardId);

    const data = filmData[cardId];

    if (!card || !data) {
        // console.warn(`Card atau data tidak ditemukan untuk: ${cardId}`);
        return;
    }

    const metaAge = card.querySelector('.meta-age');
    if (metaAge) {
        metaAge.textContent = data.age;
    }

    const metaEpisodes = card.querySelector('.meta-episodes');
    if (metaEpisodes) {
        metaEpisodes.textContent = data.episodes;
    }

    const genresContainer = card.querySelector('.card-hover-genres');
    if (genresContainer && data.genres) {
        genresContainer.innerHTML = data.genres
            .map(genre => `<span>${genre}</span>`)
            .join(' • ');
    }

    // console.log(`card hover populated: ${cardId}`);
}

function initCardHovers() {
    populatedCardHover('card-ted-lasso');
    populatedCardHover('card-guardian');
    populatedCardHover('card-duty');
    populatedCardHover('card-suzume');
    populatedCardHover('card-alice');
    populatedCardHover('card-sonic');
    populatedCardHover('card-stuart');
    populatedCardHover('card-tomorrow');
    populatedCardHover('card-jurassic');
    populatedCardHover('card-my-perfect');
    populatedCardHover('card-alice');
    populatedCardHover('card-megan');
    populatedCardHover('card-quantumania');
    populatedCardHover('card-rio');
    populatedCardHover('card-mermaid');
    populatedCardHover('card-miles');
    populatedCardHover('card-dont-look');
    populatedCardHover('card-fast-x');
    populatedCardHover('card-happiness');
    populatedCardHover('card-otto');
    populatedCardHover('card-big-hero-6');
    populatedCardHover('card-avatar-2');
    populatedCardHover('card-sonic-2');
}

document.addEventListener('DOMContentLoaded', () => {
    // console.log('Initializing card hovers...');
    initCardHovers();
})