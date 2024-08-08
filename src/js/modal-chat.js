//  модолка чат
document.addEventListener('DOMContentLoaded', function() {
  var chatMenu= document.querySelector('.footer__icon--chat');
  var popupChat = document.getElementById('myPopup-communication');
  var  overlayChat =  document.getElementById('overlay');

  chatMenu.addEventListener('click', function() {
    popupChat.classList.toggle('active-chat');
    overlayChat.classList.toggle('active-chat');
    overlayChat.addEventListener('click', function() {

      popupChat.classList.remove('active-chat');
      overlayChat.classList.remove('active-chat');

      setChatOverflow('auto');
    });

    setChatOverflow('hidden');
  });

  // Закрытие модального окна
  window.onclick = function(event) {
    if (event.target == popupChat || event.target.closest('.popup__close-btn')) {
      popupChat.classList.remove('active-chat');
      overlayChat.classList.remove('active-chat');
      setChatOverflow('auto');
    }
  }

  // Закрытие модального окна при нажатии на иконку закрытия
  var closeButton2 = popupChat.querySelector('.popup__close-btn');
  if (closeButton2) {
    closeButton2.addEventListener('click', function() {
      popupChat.classList.remove('active-chat');
      overlayChat.classList.remove('active-chat');
      setChatOverflow('auto');
    });
  } else {
    console.error('Не найден элемент для закрытия модального окна');
}
var activeOverlay1 = popupChat.querySelector('.overlay');
 if(activeOverlay1){
  activeOverlay1.addEventListener('click', function() {

    popupChat.classList.remove('active-chat');
    overlayChat.classList.remove('active-chat');
    setChatOverflow('auto');
  });


 }
});

const setChatOverflow = (state) => document.documentElement.style.overflow = state;
