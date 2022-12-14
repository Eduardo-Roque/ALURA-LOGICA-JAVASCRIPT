//<html><canvas width="600" height="400"></canvas></html>

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

// ANIMAÇÃO DE TROCA DE CORES
var cores = ["blue", "orange", "red", "green"]
var indiceCorAtual = 0;

function mudaCor() {
    limpaTela();
    indiceCorAtual++;

    if(indiceCorAtual > cores.length) {
        indiceCorAtual = 0; // volta para a primeira cor.
    }
}
setInterval(mudaCor, 400);

// RAIO
var raio = 20;
function aumentaRaio() {
    limpaTela();
    raio++;

    if(raio > 30) {
        raio = -1;
    }
}
setInterval(aumentaRaio, 20);

// ANIMAÇÃO
var x = 20;
sentidoX = 1;
function atualizaTela() {
    limpaTela();
    desenhaCirculo(x, 50, raio, cores[indiceCorAtual]);

    if(x > 600) {
        sentidoX = -1;
    } else if(x > 600) {
        sentidoX = +1;
    }

    x = x + sentidoX;
}
setInterval(atualizaTela, 20);