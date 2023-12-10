const boxes = document.querySelectorAll('.box')
const nav = document.querySelector(".nav")

const fixNavbar = () => {
    if(window.scrollY > nav.offsetHeight +150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}

const checkBoxes = () =>{
    const bottomTrigger = window.innerHeight/5*4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < bottomTrigger){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}

window.addEventListener('scroll',fixNavbar)
window.addEventListener('scroll', checkBoxes)