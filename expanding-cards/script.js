let cards = document.getElementsByClassName('card');

const removeExpand= () => {
    for (const card of cards){
        card.classList.remove('expand');
        card.childNodes[1].style.visibility = 'hidden';
    };
}
for (const card of cards){
    card.addEventListener("click",(e) =>{
        removeExpand();
        e.target.classList.add('expand');
        e.target.childNodes[1].style.visibility = 'visible';
    });
}

