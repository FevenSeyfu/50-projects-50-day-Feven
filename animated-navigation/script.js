const btn = document.getElementById('toggel');
const nav = document.getElementById('nav')

btn.addEventListener('click',(e)=>{
    nav.classList.toggle('active')
})