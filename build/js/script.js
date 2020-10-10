'use strict';
var dots = document.querySelector('.about__dots');
var more = document.querySelector('.about__more');
var btnMoreText = document.querySelector('.about__btn');

btnMoreText.addEventListener('click', function () {
  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnMoreText.innerHTML = 'Подробнее';
    more.display.style = 'none';
  } else {
    dots.style.display = 'none';
    btnMoreText.innerHTML = 'Скрыть';
    more.display.style = 'inline';
  }
});
