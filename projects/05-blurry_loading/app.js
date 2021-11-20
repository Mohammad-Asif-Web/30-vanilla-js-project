const bg = document.querySelector('.bg');
const loadText = document.querySelector('.load')

let count = 0;

let num = setInterval(function loading(){
    count++;
    if(count > 99){
        clearInterval(num);
    }
    loadText.innerHTML = `${count}%`
    loadText.style.opacity = scale(count, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`
}, 30)


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
