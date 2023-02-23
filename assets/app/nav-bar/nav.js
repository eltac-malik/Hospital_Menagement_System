
var mobMenu = document.querySelector('.hc-nav-list-drop');
var removeBtn = document.querySelector('#hc-remove-mob');
var mobMenuBtn = document.querySelector('.hc-mob-bar')
removeBtn.addEventListener('click', ()=>{
    mobMenu.style.left = '-350px'
    removeBtn.style.transform = 'rotate(-90deg)'

})
mobMenuBtn.addEventListener('click', ()=>{
    mobMenu.style.left = '0'
    removeBtn.style.transform = 'rotate(90deg)'
})
