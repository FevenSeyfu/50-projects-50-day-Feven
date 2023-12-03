const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeElt = document.getElementById('size')
const colorElt = document.getElementById('color')
const clearElt = document.getElementById('clear')
const context  = canvas.getContext('2d');

// inital values
let size=10
let isPressed =false;
colorElt.value = 'black';
let color = clearElt.value;
let x,y;

// handle click on canvas
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})
document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})
// function to draw circle and line
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x,y){
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2)
    context.fillStyle = color
    context.fill()
}
function drawLine(x1,y1,x2,y2){
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.strokeStyle = color
    context.lineWidth = size * 2
    context.stroke()
}

const updateSizeOnScreen=() => {
    sizeElt.innerText = size
}
// handle operators
increaseBtn.addEventListener('click',()=>{
    size += 5;
    if(size>50) size=50

    updateSizeOnScreen()
})
decreaseBtn.addEventListener('click',()=>{
    size -= 5;
    if(size<5) size=5;

    updateSizeOnScreen()
})

// handle color picker
colorElt.addEventListener('change',(e)=>color = e.target.value);
// clear screen on click
clearElt.addEventListener('click', () => context.clearRect(0,0, canvas.width, canvas.height))