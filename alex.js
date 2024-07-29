
const closeButton = document.querySelector('.close_button');
const headerLabel = document.querySelector('.animated-button1');

closeButton.addEventListener('click', function() {
  document.querySelector('.right_menu').style.right = '100vw';
});

headerLabel.addEventListener('click', function() {
  document.querySelector('.right_menu').style.right = '0';
});

const leftcloseButton = document.querySelector('.close_button_left');
const leftheaderLabel = document.querySelector('.animated-button');

leftcloseButton.addEventListener('click', function() {
  document.querySelector('.left_menu').style.left = '100vw';
});

leftheaderLabel.addEventListener('click', function() {
  document.querySelector('.left_menu').style.left = '0';
});

