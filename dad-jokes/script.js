const btn = document.querySelector('.btn');
const jokeText = document.querySelector('.text');

btn.addEventListener('click',getJokes);

getJokes();

async  function getJokes(){
    const config = {
        headers: {
          Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const resJSON = await res.json()
    jokeText.innerHTML = resJSON.joke;
}

