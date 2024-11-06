const toggleButton = document.getElementById('toggleMode');
const icon = document.getElementById('icon');
const currentMode = localStorage.getItem('mode');

if (currentMode === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    toggleButton.prepend(icon);
    logo.src = 'logo_bq_dark.png';
} else {
    logo.src = 'logo_bq_light.png';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        logo.src = 'logo_bq_dark.png';
        localStorage.setItem('mode', 'dark');
    } 
    else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        logo.src = 'logo_bq_light.png';
        localStorage.setItem('mode', 'light');
    }
     
    toggleButton.prepend(icon);
});