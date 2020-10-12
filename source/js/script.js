'use strict';
// Открывает и закрывает popup
var popup = document.querySelector('.popup');
var btnCall = document.querySelector('.navigation__contacts-call');
var btnCloseForm = document.querySelector('.popup__btn-close');

btnCall.addEventListener('click', function () {
  if (popup.classList.contains('.popup--closed')) {
    popup.classList.remove('popup--closed');
    popup.classList.add('popup--opened');
  } else {
    popup.classList.add('popup--opened');
    popup.classList.remove('popup--closed');
  }
});

btnCloseForm.addEventListener('click', function () {
  if (popup.classList.contains('.popup--opened')) {
    popup.classList.remove('.popup--opened');
    popup.classList.add('popup--closed');
  } else {
    popup.classList.add('popup--closed');
    popup.classList.remove('popup--opened');
  }
});

// Аккордеон в footer
var btnFooter = document.querySelector('.page-footer-button');
var moreSection = document.querySelector('.page-footer__nav-list');

btnFooter.addEventListener('click', function () {
  if (moreSection.classList.contains('.page-footer--closed')) {
    moreSection.classList.remove('.page-footer--closed');
    moreSection.classList.add('page-footer--opened');
    btnFooter.style.backgroundImage = 'url("../img/icon-minus.svg")';
  } else {
    moreSection.classList.add('page-footer--opened');
    moreSection.classList.remove('page-footer--closed');
    btnFooter.style.backgroundImage = 'url("../img/icon-plus.svg")';
  }
});

var btnFooterContact = document.querySelector('.page-footer-btn__acc');
var moreContact = document.querySelector('.page-footer-contacts__list');

btnFooterContact.addEventListener('click', function () {
  if (moreContact.classList.contains('.page-footer--closed')) {
    moreContact.classList.remove('page-footer--closed');
    moreContact.classList.add('page-footer--opened');
    btnFooterContact.style.backgroundImage = 'url("../img/icon-minus.svg")';
  } else {
    moreContact.classList.add('page-footer--opened');
    moreContact.classList.remove('page-footer--closed');
    btnFooterContact.style.backgroundImage = 'url("../img/icon-plus.svg")';
  }
});

// localStorage
var username = popup.querySelector('[name=username]');
var phone = popup.querySelector('[name=phone]');

popup.addEventListener('submit', function (evt) {
  if (!username.value || !phone.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem('username', username.value);
    localStorage.setItem('phone', phone.value);
  }
});
