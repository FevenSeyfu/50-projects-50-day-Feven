const smallCups = document.querySelectorAll('.cup-small');
const literSpan =  document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup()

smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=>highlightCup(idx))
})

function updateBigCup(){

}

const highlightCup = (idx) =>{
    if(idx === 7 && smallCups[idx].classList.contains('full')) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup,idx2) =>{
        idx2<=idx ? cup.classList.add('full') : cup.classList.remove('full');
    })
    updateBigCup();
}

