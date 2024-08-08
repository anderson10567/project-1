// модалка для мобил-меню


document.addEventListener('DOMContentLoaded', function() {
  var burgerMenu = document.querySelector('.header__icon--burger');
  var popup = document.getElementById('myPopup');
  var  overlay =  document.getElementById('overlay');

  burgerMenu.addEventListener('click', function() {
    popup.classList.toggle('active'); // Отображаем модальное окно
    overlay.classList.toggle('active');
    overlay.addEventListener('click', function() {

      popup.classList.remove('active');
      overlay.classList.remove('active');

      setHtmlOverflow('auto');
    });


    setHtmlOverflow('hidden');
  });

  // Закрытие модального окна
  window.onclick = function(event) {
    if (event.target == popup || event.target.closest('.header-phone__icon--burger')) {
      popup.classList.remove('active');
      overlay.classList.remove('active');
      setHtmlOverflow('auto');
    }
  }

  // Закрытие модального окна при нажатии на иконку закрытия
  var closeButton = popup.querySelector('.header-phone__icon--burger ');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      popup.classList.remove('active');
      overlay.classList.remove('active');
      setHtmlOverflow('auto');
    });
  } else {
    console.error('Не найден элемент для закрытия модального окна');
}
var activeOverlay = popup.querySelector('.overlay');
 if(activeOverlay){
  activeOverlay.addEventListener('click', function() {

    popup.classList.remove('active');
    overlay.classList.remove('active');
    setHtmlOverflow('auto');
  });


 }
});

const setHtmlOverflow = (state) => document.documentElement.style.overflow = state;







