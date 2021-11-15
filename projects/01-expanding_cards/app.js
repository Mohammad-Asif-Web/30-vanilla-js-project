const allCard = document.querySelectorAll('.card');
const cards = Array.from(allCard);
console.log(cards);

cards.map((card) =>{
    card.addEventListener('click', ()=>{
        removeActiveClass();
        card.classList.add('active');
    })
})

function removeActiveClass(){
    cards.map(card =>{
        card.classList.remove('active');
    })
}

