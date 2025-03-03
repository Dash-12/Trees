// script.js
function searchTree() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const treeCards = document.querySelectorAll('.tree-card');

    treeCards.forEach(card => {
        const treeName = card.getAttribute('data-name').toLowerCase();
        if (treeName.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}