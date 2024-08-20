const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Array of background colors for each page
const backgroundColors = [
    '#f7f7f7', // Cover page background color
    '#e1f5fe', // Intro page background color
    '#f1e7fe', '#fbe4e1', '#e1f5fe', '#ffe0b2', '#e0f7fa', '#f3e5f5', 
    '#e8f5e9', '#fff3e0', '#e1f5fe', '#f1f8e9', '#fbe9e7', '#fffde7', 
    '#e3f2fd', '#f9fbe7', '#f9fbe7', '#f3e5f5', '#e1f5fe', '#f7f7f7', 
    '#f1f8e9'  // Example colors for the other pages
];

const animations = ['slide', 'fade', 'zoom', 'rotate'];

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active', 'previous', ...animations);
        if (i === index) {
            const animation = animations[i % animations.length]; // Cycle through animations
            page.classList.add(animation, 'active');
        } else if (i < index) {
            page.classList.add('previous');
        }
    });

    // Change the body background color to match the new page
    document.body.style.backgroundColor = backgroundColors[index];

    currentPage = index;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
});

showPage(0);
