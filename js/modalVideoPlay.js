const btnsPlay = document.querySelectorAll('.btn-play')
const video = document.querySelectorAll('video');
const btnClose = document.querySelectorAll('.btn-close')

btnsPlay.forEach(e => {
  e.addEventListener('click', function () {
    e.nextElementSibling.querySelector('video').play()
  })
})
btnClose.forEach(e => {
  e.addEventListener('click', function () {
    e.nextElementSibling.querySelector('video').pause()
  })
})
document.addEventListener("keydown", function (event) {
  if (event.which === 27) {
    video.forEach(e => e.pause());
  }
})

const btnMenu = document.querySelector('.menu-sm-btn ');
const menuMobile = document.querySelector('.nav')

btnMenu.addEventListener('click', function(){
  this.classList.toggle('btn-danger')
  menuMobile.classList.toggle('active-menu')
  if( this.innerText === 'Close'){
    this.innerText = 'Menu'
  } else {
    this.innerText = 'Close'
  }
})
