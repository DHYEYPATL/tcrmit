// Search filter for leaderboard
document.getElementById('searchBar').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#leaderboard tbody tr');
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
});

// Highlight top achievement
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#leaderboard tbody tr');
    rows.forEach(row => {
        const rank = row.cells[2].textContent.toLowerCase();
        if (rank.includes('1st')) {
            row.style.background = 'rgba(229, 9, 20, 0.2)'; // Highlight top achievement
        }
    });
});

// Sortable columns
document.querySelectorAll('#leaderboard th').forEach(header => {
    header.addEventListener('click', () => {
        const table = header.parentElement.parentElement.parentElement;
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        const index = Array.from(header.parentElement.children).indexOf(header);
        const ascending = header.classList.toggle('asc');

        rows.sort((a, b) => {
            const aText = a.children[index].textContent.trim();
            const bText = b.children[index].textContent.trim();

            return ascending
                ? aText.localeCompare(bText)
                : bText.localeCompare(aText);
        });

        rows.forEach(row => table.querySelector('tbody').appendChild(row));
    });
});
