const body = document.body;
const toggleBtn = document.querySelector('.theme-toggle')

toggleBtn.addEventListener('click',()=>{
    body.classList.toggle('dark');
    toggleBtn.classList.toggle('theme-toggle--toggled')
})