const container = document.querySelector('.container');
const para = document.getElementById('p');

let count = 0;
window.addEventListener('keydown', (event)=>{
    count++;
    container.innerHTML = `
    <div class="text">
            ${event.key} <small>event.key</small>
        </div>
        <div class="text">
            ${event.keyCode} <small>event.keyCode</small>
        </div>
        <div class="text">
            ${event.code} <small>event.code</small>
        </div>
    `
    
    para.innerText = '"You have pressed ' + count + ' words"';
    
})