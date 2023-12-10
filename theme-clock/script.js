const body = document.body;
const toggleBtn = document.querySelector('.theme-toggle')

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

const date = document.querySelector('.date')
const time = document.querySelector('.time')
const dateNum = document.createElement('span');
dateNum.classList.add('dateNum');

toggleBtn.addEventListener('click',()=>{
    body.classList.toggle('dark');
    minute.classList.toggle('dark');
    hour.classList.toggle('dark');
    date.classList.toggle('dark');
    time.classList.toggle('dark');
    dateNum.classList.toggle('dark');
    toggleBtn.classList.toggle('theme-toggle--toggled')
})
    
setInterval(()=>{
    let d,hr,min,sec;
    let hr_rotation,min_rotation,sec_rotation;

    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    let day = d.toLocaleDateString('default', {weekday: 'long'});
    let month = d.toLocaleString('default', {month: 'long'});
    
    time.innerHTML = d.toLocaleTimeString('default',{
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    })

    dateNum.innerHTML = d.getDate();
    date.innerHTML = day + ' , ' + month.slice(0,3)
    date.appendChild(dateNum);
    hr_rotation = 30 * hr + min/2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);