const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let current = 1;

next.addEventListener('click',() =>{
    current++;
    if(current > circles.length){
        current = circles.length
    }

    change();
})

prev.addEventListener('click', ()=>{
    current--;
    if(current < 1){
        current = 1;
    }

    change();
})

function change(){

    // circles border
    circles.forEach((circle, ind) =>{
        if(ind < current){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })

    // progress line percentage
    progress.style.width = (current - 1) / (circles.length - 1) * 100 + '%';

    //  button active and disabled
    if(current === 1){
        prev.disabled = true;
    }
    else if(current === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}
