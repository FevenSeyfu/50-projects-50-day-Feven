const cards = document.getElementsByClassName('card ');

const onlickAddSound  = (e)=>{
    console.log(e.target.innerText)
}
for (const card of cards){
    card.addEventListener("click",onlickAddSound)
}