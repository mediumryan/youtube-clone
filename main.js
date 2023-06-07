const leftTitle = document.querySelector('.left-title');
const leftTitleBtn = document.querySelector('.left-title-btn');

leftTitleBtn.addEventListener(('click'), () => {
  leftTitle.classList.toggle('more');
  leftTitleBtn.classList.toggle('rotate');
})
