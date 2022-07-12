const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = e.target.value
    const label = e.target.nextElementSibling
    label.innerHTML = value
})