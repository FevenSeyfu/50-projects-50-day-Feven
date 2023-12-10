const content = document.querySelector('.container');
const close = document.getElementById('close');
const open = document.getElementById('open');

open.addEventListener('click',()=> content.classList.add('show-nav'))
close.addEventListener('click',()=> content.classList.remove('show-nav'))