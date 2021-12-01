const jokeEl = document.getElementById('jokes');
const button = document.getElementById('btn');

button.addEventListener('click', getJokes)

function getJokes(){
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => {
        jokeEl.innerText = `" ${data.joke} "`
    });
}


