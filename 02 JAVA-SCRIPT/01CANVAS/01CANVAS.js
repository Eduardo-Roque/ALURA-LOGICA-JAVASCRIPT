// <html><canvas width="600" height="400"></canvas></html>

var tela = document.querySelector("canvas"); // chamei o canvas
var pincel = tela.getContext("2d"); // criei o pincel para 2d

pincel.fillStyle = "lightgrey"; // Estilo da cor.
pincel.fillRect(0, 0, 600, 400); // Dimensão da cor.

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200, 400);

// Criando um Retângulo.
pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();
    
// Criando um Circulo
pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill();

// STROKE - BORDA
pincel.fillStroke = "black";
pincel.strokeRect(0, 0, 50, 50);