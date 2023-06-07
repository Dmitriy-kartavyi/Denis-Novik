function scrollToHome (element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}
let buttonHome = document.querySelector('.about__home')
let scrollHome = document.querySelector('#home')
buttonHome.addEventListener('click', () => {
  scrollToHome(scrollHome)
  buttonSkills.classList.remove ('bold')
  buttonPortfolio.classList.remove ('bold')
  buttonContacts.classList.remove ('bold')
  buttonAbout.classList.remove('bold')
  buttonHome.classList.add ('bold')
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock')
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
}
})
//----------------------
function scrollToAbout (element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}
let buttonAbout = document.querySelector('.about__botton')
let scrollAbout = document.querySelector('#about')
buttonAbout.addEventListener('click', () => {
  scrollToAbout(scrollAbout)
  buttonHome.classList.remove ('bold')
  buttonSkills.classList.remove ('bold')
  buttonPortfolio.classList.remove ('bold')
  buttonContacts.classList.remove ('bold')
  buttonAbout.classList.add('bold')
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock')
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
} 
})
//---------------------------
function scrollToSkills (element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}
let buttonSkills = document.querySelector('.about__skills')
let scrollSkills = document.querySelector('#skills')
buttonSkills.addEventListener('click', () => {
  scrollToSkills(scrollSkills)
  buttonPortfolio.classList.remove ('bold')
  buttonContacts.classList.remove ('bold')
  buttonAbout.classList.remove('bold')
  buttonHome.classList.remove ('bold')
  buttonSkills.classList.add ('bold')
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock')
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
}
})
//--------------------------------
function scrollToPortfolio (element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}
let buttonPortfolio = document.querySelector('.about__portfolio')
let scrollPortfolio = document.querySelector('#portfolio')

buttonPortfolio.addEventListener('click', () => {
  scrollToPortfolio(scrollPortfolio)  
  buttonContacts.classList.remove ('bold')
  buttonAbout.classList.remove('bold')
  buttonHome.classList.remove ('bold')
  buttonSkills.classList.remove ('bold')
  buttonPortfolio.classList.add ('bold')
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock')
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
}
})
//----------------
function scrollToContacts (element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}
let buttonContacts = document.querySelector('.about__contacts') 
let scrollContacts = document.querySelector('#contacts')
buttonContacts.addEventListener('click', () => {
  scrollToContacts(scrollContacts)
  buttonAbout.classList.remove('bold')
  buttonHome.classList.remove ('bold')
  buttonSkills.classList.remove ('bold')
  buttonPortfolio.classList.remove ('bold')
  buttonContacts.classList.add ('bold')
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock')
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
}
})
//------------Меню----------------

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');
if (iconMenu) { 
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

//-------------------------------------
