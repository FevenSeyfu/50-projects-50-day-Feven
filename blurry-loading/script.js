const container = document.querySelector('.container');
const counter = document.querySelector('.counter')

// setInterval(() => {
//         for(let i=0;i<=100;i++){
//             counter.innerHTML = i.toString()+'%';
//         }
// }, 50);

let load = 0


const blurring = () =>{
    load++

    if (load > 99) {
        clearInterval(int)
    }

    counter.innerText = `${load}%`;
    counter.style.opacity = scale(load, 0, 100, 1, 0);
    container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

let int = setInterval(blurring,20)

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}