// Sample games data
const games = [
    { name: 'Minesweeper', link: 'minesweeper/index.html' },
    { name: 'Stacker', link: '/Sticker-Stacker/index.html' },
    { name: 'Ducker', link: 'Ducker/index.html' },
];

document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('gameContainer');

    // Create cards dynamically
    games.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<h3>${game.name}</h3>`;
        
        // Add click event to navigate to the specific game
        card.addEventListener('click', function () {
            window.location.href = game.link;
        });

        gameContainer.appendChild(card);
    });
});
