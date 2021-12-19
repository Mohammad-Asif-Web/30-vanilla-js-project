const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percent = document.getElementById('percentage');
const remain = document.getElementsByClassName('remained');

fillBigCup();

smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=> highlight(idx))
})

function highlight(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }
    smallCups.forEach((cup, idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full');
        }
        else{
            cup.classList.remove('full')
        }
    })
    fillBigCup();
}

function fillBigCup(){
    const fullCup = document.querySelectorAll('.cup-small.full').length;
    console.log(fullCup);
    const totalCup = document.querySelectorAll('.cup-small').length;
    console.log(totalCup);
}
















