const boxes = document.querySelectorAll('.box')

// getBoundingClientRect = return an elements size and postion relative to viewport

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

window.addEventListener('scroll', checkBoxes)