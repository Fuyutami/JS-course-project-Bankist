'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling


btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect()

  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  section1.scrollIntoView({behavior: 'smooth'})
})

console.log(window.pageXOffset, window.pageYOffset)


const h1 = document.querySelector('h1')



// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Selectiong elements

// const header = document.querySelector('.header')

// const message = document.createElement('div')
// message.classList.add('cookie-message')
// // message.textContent = 'We use cookies for improved functionality and analytics.'
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>>'

// header.prepend(message)

// // Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//   message.remove()
// })

// message.style.backgroundColor = "#37383d"
// message.style.width = '120%'

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'




// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reding th eheading :D')
// })

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D')
// }

// const randomInt = (min, max) => Math.floor(Math.random()* (max - min + 1) + min)
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
// console.log(randomColor()) 


// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
// })

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()

// })

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
// })

console.log(h1.children)