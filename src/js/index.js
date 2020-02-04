// Dropdown actions
var themeButton = document.getElementById('theme-selection');
var themeButtonPrimary = document.getElementById('selection-button');
var lightThemeButton = document.getElementById('light-btn');
var darkThemeButton = document.getElementById('dark-btn');

themeButton.addEventListener('click', (e) => {
    document.getElementsByClassName('dropdown-menu')[0].classList.toggle('hidden');
    themeButtonPrimary.classList.toggle('active');
    themeButton.classList.toggle('active');
});

// Add dark theme
darkThemeButton.addEventListener('click', (e) => {
    document.getElementsByTagName('body')[0].classList.remove('light-theme');
    document.getElementsByTagName('body')[0].classList.add('dark-theme');
    document.getElementsByClassName('dropdown-menu')[0].classList.toggle('hidden');
    themeButton.classList.toggle('active');
    themeButtonPrimary.classList.toggle('active');

    // add active class to btn-info
    lightThemeButton.classList.remove('active');
    e.target.parentElement.classList.toggle('active');

});

// add light theme
lightThemeButton.addEventListener('click', (e) => {
    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
    document.getElementsByTagName('body')[0].classList.add('light-theme');
    document.getElementsByClassName('dropdown-menu')[0].classList.toggle('hidden');
    themeButton.classList.toggle('active');
    themeButtonPrimary.classList.toggle('active');
    
    darkThemeButton.classList.remove('active');
    e.target.parentElement.classList.toggle('active');
});