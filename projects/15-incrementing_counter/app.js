const counters = document.querySelectorAll('.counter');

counters.forEach(counter =>{
    counter.innerText = '0';

    function updatecounter(){
        // Number() can convert any string to integer value.
        const dataTarget = Number(counter.getAttribute('data-target'))

        //counter innerText has been converted to integer value due to Number() and that is 0.
        const textNum = Number(counter.innerText);
        console.log(textNum);

        const numDivider = dataTarget / 200;
        console.log(numDivider);

        if(textNum < dataTarget){
            //Math.ceil() gives a non-zero integer value
            counter.innerText = `${Math.ceil(textNum + numDivider)}`
            setTimeout(updatecounter, 5);
        }
        else{
            counter.innerText = dataTarget;
        }
    }
    updatecounter();

})


