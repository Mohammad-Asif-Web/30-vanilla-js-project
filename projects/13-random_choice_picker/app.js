const text = document.getElementById('text');
const tagEl = document.querySelector('.tags');

text.focus();

text.addEventListener('keyup', (e)=>{
    createContent(e.target.value)
})

function createContent(input){
    const tags = input.split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())
    console.log(tags);
    tagEl.innerHTML = '';

    tags.forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('tag');
        tagEl.append(span);
        span.innerText = tag
    });
    

}

