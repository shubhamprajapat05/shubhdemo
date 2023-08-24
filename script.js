const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('active');
    }
});