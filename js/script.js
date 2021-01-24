let menuBtn = document.querySelector('.menu-btn');
let menuBtn__burger = document.querySelector('.menu-btn__burger');
let nav = document.querySelector('.nav');
let home_logo = document.querySelector('.home-logo');
let social_icons = document.querySelector('.social-icons');

let showMenu = false;

menuBtn.addEventListener('click', toggleOpen);

function toggleOpen(){
    if(!showMenu){
        menuBtn__burger.classList.add('open');
        nav.classList.add('open');
        home_logo.classList.add('open');
        social_icons.classList.add('open');
        showMenu = true;
    }else if(showMenu){
        menuBtn__burger.classList.remove('open');
        nav.classList.remove('open');
        home_logo.classList.remove('open');
        social_icons.classList.remove('open');
        showMenu = false;
    }
    
}