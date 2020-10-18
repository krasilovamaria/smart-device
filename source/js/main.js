'use strict';

var popup = document.querySelector('.popup');
var btnCall = document.querySelector('.navigation__contacts-call');
var btnCloseForm = document.querySelector('.popup__btn-close');
var body = document.querySelector('body');

btnCall.addEventListener('click', function () {
  if (popup.classList.contains('popup--closed')) {
    popup.classList.remove('popup--closed');
    popup.classList.add('popup--opened');
    body.style.overflow = 'hidden';
  } else {
    popup.classList.add('popup--closed');
    popup.classList.remove('popup--opened');
    body.style.overflow = 'scroll';
  }
  username.focus();
});

btnCloseForm.addEventListener('click', function () {
  popup.classList.add('popup--closed');
  popup.classList.remove('popup--opened');
  body.style.overflow = 'scroll';
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('popup--opened')) {
      popup.classList.add('popup--closed');
      popup.classList.remove('popup--opened');
      popup.classList.remove('popup--error');
      body.style.overflow = 'scroll';
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

// скролл
var linkNav = document.querySelectorAll('[href^="#"]');
var V = 0.5;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) {
    e.preventDefault();
    var w = window.pageYOffset;
    var hash = e.currentTarget.href.replace(/[^#]*(.*)/, '$1');
    var t = document.querySelector(hash).getBoundingClientRect().top;
    var start = null;
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

$('input[type=tel]').mask('+ 7 (999) 999-9999');

// аккордеон
var list = document.querySelector('.page-footer__nav-list');
var btnList = document.querySelector('.page-footer-btn__sec');
var listContact = document.querySelector('.page-footer-contacts__list');
var btnListContact = document.querySelector('.page-footer-btn__acc');

list.classList.remove('page-footer__nojs');
listContact.classList.remove('page-footer__nojs');
btnList.style.display = 'none';
btnListContact.style.display = 'none';

var init = function () {
  var element = document.getElementsByClassName('page-footer__accordeon__heading');
  for (var k = 0, elemLength = element.length; k < elemLength; k++) {
    element[k].addEventListener('click', toggleSlide, false);
  }
};

var toggleSlide = function (e) {
  removeClass();
  var elem = e.target;
  elem.classList.add('page-footer__accordeon__heading_active');
};

var removeClass = function () {
  var elementRemovedClass = document.getElementsByClassName('page-footer__accordeon__heading');
  var elementLength = elementRemovedClass.length;

  for (var j = 0; j < elementLength; j++) {
    elementRemovedClass[j].classList.remove('page-footer__accordeon__heading_active');
  }
};

init();
