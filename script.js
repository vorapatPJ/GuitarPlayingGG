const bands = [
    { name: "Nirvana", image: "img_brand/Nirvana.jpg" },
    { name: "Radiohead", image: "img_brand/Radiohead.png" },
    { name: "Oasis", image: "img_brand/Oasis.png" },
    { name: "Alice In Chains", image: "img_brand/Alice-in-chains.jpg" },
    { name: "The Animals", image: "img_brand/The-Animal.jpg" },
    { name: "Guns N' Roses", image: "img_brand/Gun n rose.jpg" },
    { name: "โลโซ", image: "img_brand/Loso.jpg" },
    { name: "ธนพล อินทฤทธิ์", image: "img_brand/t.jpg" }
];

function displayBands(filteredBands) {
    const container = document.getElementById('bands-container');
    container.innerHTML = '';
    filteredBands.forEach(band => {
        const bandCard = document.createElement('div');
        bandCard.className = 'band-card';
        bandCard.innerHTML = `
            <img src="${band.image}" alt="${band.name}">
            <button>${band.name}</button>
        `;
        container.appendChild(bandCard);
    });
}

function searchBand() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredBands = bands.filter(band => band.name.toLowerCase().includes(query));
    displayBands(filteredBands);

    if (filteredBands.length > 0) {
        const firstBandCard = document.querySelector('.band-card');
        firstBandCard.scrollIntoView({ behavior: 'smooth' });
    }
}

// Display all bands on initial load
displayBands(bands);
