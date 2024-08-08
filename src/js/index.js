import '../scss/style.scss'
import '../scss/swiper.scss'
import  '../scss/swiper-technics.scss'
import '../scss/swiper-price.scss'
import '../scss/mobile-menu.scss'
import '../scss/modal-tel.scss'
import '../scss/modal-chat.scss'
import '../scss/normalize.scss'
import  './brand-handler.js'
import  './swiper.js'
import  './technics-handler.js'
import  './modal-chat.js'
import  './modal-tel.js'
import  './mobile-menu.js'








// Кнопка(расскрытие текста"читать далее")


document.addEventListener("DOMContentLoaded", function() {
  const readMoreButton = document.getElementById('readMoreButton');
  const paragraphs = document.querySelectorAll('.content__text');
  const arrowsSymbol = document.querySelector('.content__symbol--arrows');
  const arrows2Symbol = document.querySelector('.content__symbol--arrows2');
  let currentIndex = 0;
  let hasSwitchedState = false;

  readMoreButton.addEventListener('click', function() {
      // Показываем или скрываем символы в зависимости от состояния кнопки
      if (!hasSwitchedState) {
          arrowsSymbol.style.display = 'inline-block'; // Показываем первый символ при первом клике
          arrows2Symbol.style.display = 'none'; // Скрываем второй символ при первом клике
      } else {
          arrowsSymbol.style.display = 'none'; // Скрываем первый символ при последующих кликах
          arrows2Symbol.style.display = 'inline-block'; // Показываем второй символ при последующих кликах
      }


      const allVisible = Array.from(paragraphs).every((paragraph, index) => index <= currentIndex);

      if (!allVisible && !hasSwitchedState) {
          currentIndex++;
          paragraphs.forEach((paragraph, index) => {
              if (index <= currentIndex) {
                  paragraph.classList.remove('hidden');
                  paragraph.classList.add('visible');
              } else {
                  paragraph.classList.add('hidden');
                  paragraph.classList.remove('visible');
              }
          });
          this.textContent = 'Читать далее';
          hasSwitchedState = true;
      } else if (!allVisible && hasSwitchedState) {
          currentIndex++;
          paragraphs.forEach((paragraph, index) => {
              if (index <= currentIndex) {
                  paragraph.classList.remove('hidden');
                  paragraph.classList.add('visible');
              } else {
                  paragraph.classList.add('hidden');
                  paragraph.classList.remove('visible');
              }
          });
          this.textContent = 'Скрыть';
      } else {
          currentIndex = 0;
          paragraphs.forEach((paragraph, index) => {
              if (index <= currentIndex) {
                  paragraph.classList.remove('hidden');
                  paragraph.classList.add('visible');
              } else {
                  paragraph.classList.add('hidden');
                  paragraph.classList.remove('visible');
              }
          });
          this.textContent = 'Читать далее';
          hasSwitchedState = false;
          arrowsSymbol.style.display = 'inline-block'; 
            arrows2Symbol.style.display = 'none';
      }
  });
});









