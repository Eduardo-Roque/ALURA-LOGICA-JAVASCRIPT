//<html><canvas width="600" height="400"></canvas></html>

function desenhaQuadrado(x, y, largura, tamanho, cor) {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.fillRect(x,y,largura,tamanho);

    pincel.fillStroke = "black";
    pincel.strokeRect(x, y, largura, tamanho);
}

desenhaQuadrado(0, 0, 50, 50, "red");
desenhaQuadrado(0, 50, 50, 50, "blue");
desenhaQuadrado(0, 100, 50, 50, "black");