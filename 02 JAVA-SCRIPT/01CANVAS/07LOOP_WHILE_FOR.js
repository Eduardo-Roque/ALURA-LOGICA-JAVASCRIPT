//<html><canvas width="600" height="400"></canvas></html>
function desenhaQuadrado(x, y, largura, tamanho, cor) {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, largura, tamanho);

    pincel.fillStroke = "black";
    pincel.strokeRect(x, y, largura, tamanho);
}

// WHILE
var x = 0;
while(x < 600) {
    desenhaQuadrado(x, 0, 50, 50, "green");
    desenhaQuadrado(x, 50, 50, 50, "blue");
    desenhaQuadrado(x, 50, 50, 50, "yellow");

    x = x + 50
}

// FOR
for(var x = 0;x < 600; x = x + 50) {
    desenhaQuadrado(x, 100, 50, 50, "grey");
    desenhaQuadrado(x, 150, 50, 50, "red");
    desenhaQuadrado(x, 200, 50, 50, "orange");
}