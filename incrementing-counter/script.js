const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{
    counter.innerText = 0
    const updateCounter = () =>{        
        let target = +counter.getAttribute('data-target');
        let count = +counter.innerText
        const inc = target/100;
        if(count<target){
            counter.innerText = `${Math.ceil(count + inc)}`
            setTimeout(updateCounter, 1)
        }
    }
    updateCounter()
})