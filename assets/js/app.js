window.addEventListener("scroll", ()=>{
    var nav = document.querySelector(".util");
    // nav.classList.add("show", window.scrollY > 200);
    if(window.scrollY > 200){
        nav.classList.add('show')
    } else {
        nav.classList.remove('show')
    }
})
  