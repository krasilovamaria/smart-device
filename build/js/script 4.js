'use strict';
var dots = document.querySelector('.about__dots');
var more = document.querySelector('.about__more');
var btnMoreText = document.querySelector('.about__btn');

btnMoreText.addEventListener('click', function () {
  if (more.style.display === 'none') {
    dots.style.display = 'none';
    btnMoreText.innerHTML = 'Подробнее';
    more.display.style = 'block';
  } else {
    dots.style.display = 'none';
    btnMoreText.innerHTML = 'Скрыть';
    more.display.style = 'block';
  }
});
