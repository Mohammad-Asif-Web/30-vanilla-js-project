const text = document.getElementById('text');
const tagEl = document.querySelector('.tags');

text.focus();

text.addEventListener('keyup', (e) =>{
    update(e.target.value);
})

function update(input){
    const tags = input.split(',')
    .filter(tag => tag.trim() !== '');
    console.log(tags);
    
    tagEl.innerHTML = '';
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = tag;
        tagEl.append(span)
    });

}
