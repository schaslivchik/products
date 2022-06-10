/**
 * button, menu
 */
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