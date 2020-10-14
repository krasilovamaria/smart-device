'use strict';
// Открывает и закрывает popup
var popup = document.querySelector('.popup');
var btnCall = document.querySelector('.navigation__contacts-call');
var btnCloseForm = document.querySelector('.popup__btn-close');

btnCall.addEventListener('click', function () {
  if (popup.classList.contains('popup--closed')) {
    popup.classList.remove('popup--closed');
    popup.classList.add('popup--opened');
  } else {
    popup.classList.add('popup--closed');
    popup.classList.remove('popup--opened');
  }
  username.focus();
});

btnCloseForm.addEventListener('click', function () {
  popup.classList.add('popup--closed');
  popup.classList.remove('popup--opened');
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('popup--opened')) {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
      popup.classList.remove('popup--error');
    }
  }
});

popup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    if (popup.classList.contains('popup--opened')) {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
      popup.classList.remove('popup--error');
    }
  }
});

// Аккордеон в footer
var btnSection = document.querySelector('.page-footer-btn__sec');
var sectionList = document.querySelector('.page-footer__nav-list');

btnSection.addEventListener('click', function () {
  if (sectionList.classList.contains('page-footer__closed')) {
    sectionList.classList.remove('page-footer__closed');
    sectionList.classList.add('page-footer__opened');
    btnSection.classList.remove('page-footer-btn__sec');
    btnSection.classList.add('page-footer-btn__sec--opened');
  } else {
    sectionList.classList.add('page-footer__closed');
    sectionList.classList.remove('page-footer__opened');
    btnSection.classList.remove('page-footer-btn__sec--opened');
    btnSection.classList.add('page-footer-btn__sec');
  }
});

var btnContact = document.querySelector('.page-footer-btn__acc');
var contactList = document.querySelector('.page-footer-contacts__list');

btnContact.addEventListener('click', function () {
  if (contactList.classList.contains('page-footer__closed')) {
    contactList.classList.remove('page-footer__closed');
    contactList.classList.add('page-footer__opened');
    btnContact.classList.remove('page-footer-btn__acc');
    btnContact.classList.add('page-footer-btn__acc--opened');
  } else {
    contactList.classList.add('page-footer__closed');
    contactList.classList.remove('page-footer__opened');
    btnContact.classList.remove('page-footer-btn__acc--opened');
    btnContact.classList.add('page-footer-btn__acc');
  }
});

// Плавная прокрутка к якорным ссылкам
// выбираем все ссылки к якорю на странице
var linkNav = document.querySelectorAll('[href^="#"]');
// скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
var V = 0.5;
for (var i = 0; i < linkNav.length; i++) {
  // по клику на ссылку
  linkNav[i].addEventListener('click', function (e) {
    // отменяем стандартное поведение
    e.preventDefault();
    // производим прокрутку
    var w = window.pageYOffset;
    // к id элемента, к которому нужно перейти
    var hash = e.currentTarget.href.replace(/[^#]*(.*)/, '$1');
    // отступ от окна браузера до id
    var t = document.querySelector(hash).getBoundingClientRect().top;
    var start = null;
    // подробнее про функцию анимации [developer.mozilla.org]
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) {
        start = time;
      }
      var progress = time - start;
      var r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r !== w + t) {
        requestAnimationFrame(step);
      } else {
        // URL с хэшем
        location.hash = hash;
      }
    }
  }, false);
}

// localStorage
var username = popup.querySelector('[name=username]');
var phone = popup.querySelector('[name=phone]');
var popupField = popup.querySelector('[name=popup-field]');

popup.addEventListener('submit', function () {
  localStorage.setItem('username', username.value);
  localStorage.setItem('phone', phone.value);
  localStorage.setItem('popupField', popupField.value);
});

var questionaryForm = document.querySelector('.questionary-form');
var questionaryField = popup.querySelector('[name=questionary-field]');

questionaryForm.addEventListener('submit', function () {
  localStorage.setItem('username', username.value);
  localStorage.setItem('phone', phone.value);
  localStorage.setItem('questionaryField', questionaryField.value);
});

// Маска
jQuery(function ($) {
  $('input[type=tel]').mask('+ 7 (999) 999-9999');
});
