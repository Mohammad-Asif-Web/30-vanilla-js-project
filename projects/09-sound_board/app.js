 const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const box = document.getElementById('box');

sounds.forEach(sound =>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
    box.append(btn);
    btn.innerText = sound;

    btn.addEventListener('click', ()=>{
        stopSound();
        document.getElementById(sound).play();
    })
})

function stopSound(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}













