document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Simpan preferensi user di localStorage agar saat refresh tema tidak berubah
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        htmlElement.setAttribute('data-theme', currentTheme);
        themeToggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDark = htmlElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            htmlElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
});