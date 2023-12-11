const upBtn = document.getElementById('up')
const downBtn =  document.getElementById('down')
const slideContainer = document.querySelector('.container')
const leftSlide = document.querySelector('.left-slider')
const rightSlide = document.querySelector('.right-slider')
const slideLength =  rightSlide.querySelectorAll('div').length

let activeSlideIdx = 0

leftSlide.style.top = `-${(slideLength-1) *100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = slideContainer.clientHeight
    if(direction === 'up'){
        activeSlideIdx++
        if(activeSlideIdx>slideLength-1){
            activeSlideIdx =0
        }
    } else if(direction === 'down'){
        activeSlideIdx--
        if(activeSlideIdx < 0){
            activeSlideIdx =slideLength -1;
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIdx * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`
}