'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn');

//Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We used cookies for improved functionality and analytics';
message.innerHTML =
  'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);
// header.before(message);
// header.after(message);

//Delete elements
document.querySelector('.btn--close-cookie');
addEventListener('click', () => message.remove());

//Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');
document
  .querySelector('.operations__header')
  .style.setProperty('font-size', '5rem');

// Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = 'minimalist logo';
logo.setAttribute('company', 'Bankist');
console.log(logo.dataset.versionNumber);

logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains('');
logo.className = 'jonas';
