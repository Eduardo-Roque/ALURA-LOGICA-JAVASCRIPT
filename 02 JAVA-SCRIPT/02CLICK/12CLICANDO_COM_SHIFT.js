//<html><canvas width="600" height="400"></canvas></html>

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var raio = 10; // tamanho do círculo

// FUNÇÃO DE QUANDO EU CLICAR JUNTO COM SHIFT AUMENTE O RAIO DO CÍRCULO.
function desenhaCirculo(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  // var raio = 10; raio que ficava só em 10 e não somava.

  //console.log(x + ',' + y);

  if (evento.shiftKey) { // evento de quando eu clico com Shift -> true

    raio = raio + 20; // cada vez que aperto Shift ele aumenta o raio em 20!
  }

  pincel.fillStyle = 'blue';
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();

  console.log(raioSoma);
}

tela.onclick = desenhaCirculo;