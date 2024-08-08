//кнопка 'показать все' для technics

function toggleVisibility() {

  var links = document.querySelectorAll('.noswiper2 .noswiper__link2');
  var lastThreeLinks = Array.from(links).slice(-3);


  var button = document.querySelector('.my-button__menu2');
  var downArrow = document.querySelector('.arrow__down2');
  var upArrow = document.querySelector('.arrow__up2');


  var areHidden = lastThreeLinks.every(link => link.classList.contains('hidden2'));


  lastThreeLinks.forEach(link => {
      link.classList.toggle('hidden2');
  });


  if (areHidden) {
      button.textContent = 'Скрыть ';
      downArrow.style.display = 'none';
      upArrow.style.display = '';
  } else {
      button.textContent = 'Показать все';
      downArrow.style.display = '';
      upArrow.style.display = 'none';
  }
}
const button = document.querySelector('.my-button__menu2');
button.addEventListener('click', toggleVisibility);
