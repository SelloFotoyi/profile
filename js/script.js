const actitivities = document.querySelector('#skills-header');
const pos = actitivities.getBoundingClientRect();
const activitiesPos = Math.ceil(pos.y);
const counters = document.querySelectorAll('.counter');
const speed = 1000;

window.addEventListener('scroll', () => {
  const scrollPos = Math.ceil(window.scrollY);
  if (scrollPos >= activitiesPos) {
    count();
  }
});

const count = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 10);
      } else {
        count.innerText = target;
      }
    };

    updateCount();
  });
};

const mobile_menu_burger = document.querySelector('.mobile-nav__menu');
mobile_menu_burger.addEventListener('click', toggleMenu);
const nav = document.querySelector('.nav');
const nav_items = document.querySelectorAll('.nav__item');
nav_items.forEach((nav_item) => {
  nav_item.addEventListener('click', toggleMenu);
});

function toggleMenu() {
  if (mobile_menu_burger.classList.contains('open')) {
    mobile_menu_burger.classList.remove('open');
    nav.classList.remove('open');
  } else {
    mobile_menu_burger.classList.add('open');
    nav.classList.add('open');
  }
}
