const toggleMenu = function() {
  document.getElementById('toggleMenuContent').classList.toggle('show');
};

const changeColor = function(color, tekst) {
  document.body.style.backgroundColor = color;
  document.getElementById('chosenColor').innerHTML = tekst;
  document.getElementById('toggleMenuContent').classList.remove('show');
};
