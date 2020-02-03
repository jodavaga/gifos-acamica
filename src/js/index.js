// Dropdown actions
var themeButton = document.getElementById('theme-selection');
var lightThemeButton = document.getElementById('light-btn');
var darkThemeButton = document.getElementById('dark-btn');

themeButton.addEventListener('click', (e) => {
    document.getElementsByClassName('dropdown-menu')[0].classList.toggle('hidden');
});

// Add dark theme
darkThemeButton.addEventListener('click', (e) => {
    document.getElementsByTagName('body')[0].classList.remove('light-theme');
    document.getElementsByTagName('body')[0].classList.add('dark-theme');
    document.getElementsByClassName('dropdown-menu')[0].classList.toggle('hidden');

});

// add light theme
lightThemeButton.addEventListener('click', (e) => {
    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
    document.getElementsByTagName('body')[0].classList.add('light-theme');
    document.getElementsByClassName('dropdown-menu')[0].classList.toggle('hidden');

});