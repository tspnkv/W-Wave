let podcastMore = document.querySelector('.podcast__btn');
let podcast = document.querySelectorAll('.podcast__item');
let podcastNone = document.querySelector('.podcast__item-none')

podcastMore.addEventListener('click',

function(){

podcast.forEach(function(el) {
  el.classList.toggle('podcast-item--visible');
  el.classList.remove('podcast__item-none');
});

podcastMore.remove()

});

$(".accordion").accordion({
  heightStyle: "content",
});

    new JustValidate('.form', {
            rules: {

              message: {
                required:true,
                minLength: 5,
                maxLength: 60
              },

              name: {
                required:true,
                minLength: 2,
                maxLength: 30
              },

              mail: {
                required: true,
                email: true
              },
            },

            messages: {
              message: {
                required: 'Ошибка',
              },
              name: {
                required: 'Ошибка',
              },
              mail: {
                required: 'Ошибка',
              },
            },

          });

let navSearch = document.querySelector('.header__search-item');
let menuNode = document.querySelector('.search-bar');
let form = document.querySelector('.header__search-item')
let exit = document.querySelector('.header__search-item-exit');

const element = document.querySelector('select');
 const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

navSearch.addEventListener('click',  function (){
    navSearch.classList.remove('header__nav-search--active');
    menuNode.classList.toggle('search-bar--active');
    form.style.display = "none";
    exit.style.display = "block";
  });

  exit.addEventListener('click', function (){
    form.style.display = "block";
    exit.style.display = "none";
    menuNode.classList.toggle('search-bar--active');
  })

  document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
        btn.classList.remove('tabs-nav__btn--active')
      });
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });

const btnsLogin = document.querySelectorAll('.header__btn');
const menuLogin = document.querySelector('.header-btn-menu');
const exitLogin = document.querySelector('.btn-menu-exit');
const body = document.querySelector('body')

btnsLogin.forEach(btnLogin => {
  btnLogin.addEventListener('click',  () => {
    menuLogin.classList.add('header-btn-menu-active');
    body.classList.add('disable-scroll')
  })
})

exitLogin.addEventListener('click', () => {
  menuLogin.classList.remove('header-btn-menu-active');
  body.classList.remove('disable-scroll')
});


const burger = document.querySelector('.burger-btn');
const menu = document.querySelector('.burger');
const exitBurger = document.querySelector('.exit-burger');
const heroDescr = document.querySelector('.hero__descr');
const heroBtn = document.querySelector('.hero__btn')

burger.addEventListener('click', () => {
  menu.classList.add('burger__menu-active')
  heroDescr.classList.add('hero__descr--active')
  heroBtn.classList.add('hero__btn--active')
})

exitBurger.addEventListener('click', () => {
  menu.classList.remove('burger__menu-active')
  heroDescr.classList.remove('hero__descr--active')
  heroBtn.classList.remove('hero__btn--active')
});


const button = document.querySelector('.btn-opened');
const buttonMenu = document.querySelector('.btn-descr-opened');
const plus = document.querySelector('.btn-opened-svg-one');
const esc = document.querySelector('.btn-opened-svg-two')

button.addEventListener('click', () => {
  buttonMenu.classList.add('btn-descr-opened--active');
  esc.classList.add('btn-opened-svg-two--active');
  plus.remove()

})

esc.addEventListener('click', () => {
  buttonMenu.classList.remove('btn-descr-opened--active');

  buttonMenu.remove();
});




