let menuBtn = document.querySelector('.menu-btn');
let menuBtn__burger = document.querySelector('.menu-btn__burger');
let nav = document.querySelector('.nav');

let showMenu = false;

menuBtn.addEventListener('click', toggleOpen);

function toggleOpen(){
    if(!showMenu){
        menuBtn__burger.classList.add('open');
        nav.classList.add('open');
        showMenu = true;
        console.log('open');
    }else if(showMenu){
        menuBtn__burger.classList.remove('open');
        nav.classList.remove('open');
        showMenu = false;
    }
    
}