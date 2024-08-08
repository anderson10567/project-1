
// телефон

document.addEventListener('DOMContentLoaded', function() {
  var phoneMenu= document.querySelector('.footer__icon--phone');
  var popupTel = document.getElementById('myPopup-telephone');
  var  overlayTel =  document.getElementById('overlay');

  phoneMenu.addEventListener('click', function() {
    popupTel.classList.toggle('active-tel'); // Отображаем модальное окно
    overlayTel.classList.toggle('active-tel');
    overlayTel.addEventListener('click', function() {

      popupTel.classList.remove('active-tel');
      overlayTel.classList.remove('active-tel');

      setJsOverflow('auto');
    });

    setJsOverflow('hidden');
  });

  // Закрытие модального окна
  window.onclick = function(event) {
    if (event.target == popupTel || event.target.closest('.popup__close-btn')) {
      popupTel.classList.remove('active-tel');
      overlayTel.classList.remove('active-tel');
      setJsOverflow('auto');
    }
  }

  // Закрытие модального окна при нажатии на иконку закрытия
  var closeButton1 = popupTel.querySelector('.popup__close-btn');
  if (closeButton1) {
    closeButton1.addEventListener('click', function() {
      popupTel.classList.remove('active-tel');
      overlayTel.classList.remove('active-tel');
      setJsOverflow('auto');
    });
  } else {
    console.error('Не найден элемент для закрытия модального окна');
}
var activeOverlay2 = popupTel.querySelector('.overlay');
 if(activeOverlay2){
  activeOverlay2.addEventListener('click', function() {

    popupTel.classList.remove('active-tel');
    overlayTel.classList.remove('active-tel');
    setJsOverflow('auto');
  });


 }
});

const setJsOverflow = (state) => document.documentElement.style.overflow = state;

