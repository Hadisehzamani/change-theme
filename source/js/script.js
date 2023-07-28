let btns = document.getElementsByClassName('btn')
let themes = document.querySelector('.themes')

themes.addEventListener('click', function(e){
    if(e.target.nodeName == 'BUTTON'){
        let color = e.target.dataset.color
        document.documentElement.style.setProperty('--theme-color', color)
    }
})