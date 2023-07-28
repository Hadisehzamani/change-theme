let btns = document.getElementsByClassName('btn');
let themes = document.querySelector('.themes');


let storedColor = localStorage.getItem('themeColor');

if (storedColor) {
  document.documentElement.style.setProperty('--theme-color', storedColor);
}

themes.addEventListener('click', function(e) {
    if (e.target.nodeName == 'BUTTON') {
        let color = e.target.dataset.color;
        document.documentElement.style.setProperty('--theme-color', color);
        localStorage.setItem('themeColor', color);
    }
});