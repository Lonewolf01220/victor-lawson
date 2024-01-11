document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggleTheme');

    toggleThemeButton.addEventListener('click', function() {
        toggleTheme();
    });

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
    }
});
