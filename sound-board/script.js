const cards = document.getElementsByClassName('card ');


const onlickAddSound  = (e)=>{
    let sound = e.target.innerText;
    document.getElementById(sound).play();
}

for (const card of cards){
    card.addEventListener("click",onlickAddSound)
}