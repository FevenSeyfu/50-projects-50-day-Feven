const nav = document.querySelector(".navbar");

const fixNavbar = () => {
    if(window.scrollY > nav.offsetHeight +150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}

window.addEventListener('scroll',fixNavbar)