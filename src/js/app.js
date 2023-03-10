import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

// form range slider
let slider = document.getElementById('form-slider');
let sliderValue = document.querySelector('.form__slider__value');
sliderValue.innerHTML = slider.value + '%';

slider.oninput = function() {
    sliderValue.innerHTML = this.value + '%';
}


// toggle custom select
let select = document.querySelector('.js-form-select'),
    selectScreen = document.querySelector('.js-form-screen'),
    options = document.querySelectorAll('.form__option');

select.addEventListener('click', e => {
    select.classList.toggle('is-open');
});

options.forEach(item => {
    item.addEventListener('click', e => {
        selectScreen.innerHTML = e.target.innerHTML;
        selectScreen.setAttribute('data-name', e.target.innerHTML.trim());

        options.forEach(option => {
            option.classList.remove('is-active');
            item.classList.add('is-active');
        });
    });
});

document.addEventListener('click', e => {
    if (!e.target.closest('.js-form-select')) {
        select.classList.remove('is-open');
    }
});


// burger menu toggler

const burgerBtn = document.querySelector('.js-hamburger'),
      navbar = document.querySelector('.js-header__nav'),
      body = document.querySelector('body');

burgerBtn.addEventListener('click', (e) => {
    burgerBtn.classList.toggle('is-active');
    navbar.classList.toggle('is-open');
    body.classList.toggle('is-overflow');
});


// gsap animations
gsap.registerPlugin(ScrollTrigger);

let elementsBundle = document.querySelectorAll('.js-animate-bundle'),
    elementsToLeft = document.querySelectorAll('.js-animate-left'),
    elementsToRight = document.querySelectorAll('.js-animate-right'),
    elementToOpacity = document.querySelector('.js-animate-opacity');

gsap.to(elementToOpacity, {
    scale: 1,
    duration: 1
});

gsap.from(elementsBundle, {
    autoAlpha: 0,
    x: '-500',
    delay: 0.4,
    duration: 0.8,
    stagger: 0.17,
});


elementsToLeft.forEach( (el)=> {
    gsap.from(el, {
    autoAlpha: 0,
    xPercent: 100,
    duration: 1.1,
    stagger: 2,
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    }
  });
});

elementsToRight.forEach( (el)=> {
    gsap.from(el, {
    autoAlpha: 0,
    xPercent: -100,
    duration: 1.1,
    stagger: 2,
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    }
  });
});