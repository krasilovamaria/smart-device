'use strict';
var popup = document.querySelector('.popup');
var btnCall = document.querySelector('.navigation__contacts-call');
var btnCloseForm = document.querySelector('.popup__btn-close');

btnCall.addEventListener('click', function () {
  if (popup.classList.contains('.popup--closed')) {
    popup.classList.remove('popup--closed');
    popup.classList.add('popup--opened');
  } else {
    popup.classList.add('popup--closed');
    popup.classList.remove('popup--opened');
  }
});

btnCloseForm.addEventListener('click', function () {
  if (popup.classList.contains('.popup--opened')) {
    popup.classList.remove('.popup--opened');
    popup.classList.add('popup--closed');
  } else {
    popup.classList.add('popup--opened');
    popup.classList.remove('popup--closed');
  }
});
