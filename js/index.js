/*burger*/

let burger = document.querySelector('.header__burger-btn')
let menu = document.querySelector('.top-nav__list')
let partOfMenu = document.querySelectorAll('.top-nav__link')
let close = document.querySelector('.top-nav__close-btn')

burger.addEventListener('click',

function() {
menu.classList.toggle('top-nav__list--active');
document.body.classList.toggle('stop-scroll');
})

const closeBurger = function() {
  document.body.classList.remove('stop-scroll');
  menu.classList.remove('top-nav__list--active');
}

close.addEventListener('click', closeBurger);

partOfMenu.forEach(item => item.addEventListener('click', closeBurger));

/*search*/

let search = document.querySelector('.top-nav__search-btn');

search.addEventListener('click', function() {
  document.querySelector('.search-form').classList.add('search-form--active');
})

document.querySelector('.search-form__close-btn').addEventListener('click', function() {
  document.querySelector('.search-form').classList.remove('search-form--active');
})

document.addEventListener('click', function(e) {
  if (!e.target.closest('.top-nav__form-container')) {
    document.querySelector('.search-form').classList.remove('search-form--active');
  }
})

/*swiper*/

const container = document.querySelector('.first-section__content');
const swiper = new Swiper('.first-section__swiper', {

  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.first-section__pagination',
    type: 'bullets',
    clickable: true,
  }
});


/*tab*/

let tabsBtn = document.querySelectorAll('.about-work__btn');
let tabsItem = document.querySelectorAll('.about-work__content');


tabsBtn.forEach(function(el) {
  el.addEventListener('click', function(e) {
    let path = e.currentTarget.dataset.path;

    tabsBtn.forEach(el => el.classList.remove('about-work__btn--active'));
    e.currentTarget.classList.add('about-work__btn--active');

    tabsItem.forEach(el => el.classList.remove('about-work__content--active'));
    document.querySelector(`[data-target=${path}]`).classList.add('about-work__content--active');
  })
})

/*accordion*/

new Accordion('.questions__list', {
  duration: 600,
  elementClass:'questions__item',
  triggerClass:'questions__btn',
  panelClass:'questions__text',
  activeClass: 'ac--active',
  collapse: true
});

