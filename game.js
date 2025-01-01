document.addEventListener('DOMContentLoaded', () => {
    const cardDeck = document.querySelector('.card-deck');
    const playArea = document.querySelector('.play-area');
    const scoreBoard = document.querySelector('.score-board');

    const cards = [
        { type: 'prefix', text: 'un-', class: 'prefix' },
        { type: 'root', text: 'happy', class: 'root' },
        { type: 'suffix', text: '-ness', class: 'suffix' },
        { type: 'wildcard', text: 'Wildcard', class: 'wildcard' }
    ];

    function createCard(card) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', card.class);
        cardElement.textContent = card.text;
        cardDeck.appendChild(cardElement);
    }

    cards.forEach(createCard);

    // Add drag-and-drop functionality
    // Add scoring logic
    // Add wildcard actions
});