//<html><canvas width="600" height="400"></canvas></html>

    // tarefa será fazer uma bolinha pulsar, ou seja, seu raio deve ter tamanho
    // mínimo de 20 e tamanho máximo de 30.

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

// ANIMAÇÃO - PULSAR O CIRCULO
var x = 20;
sentidoX = 1;
function atualizaTela() {
    limpaTela();
    desenhaCirculo(x, 50, raio, "blue");

    if(x > 600) {
        sentidoX = -1;
    } else if(x > 600) {
        sentidoX = +1;
    }

    x = x + sentidoX;
}
setInterval(atualizaTela, 20);

    /* RESPOSTA
    var raio = 19;
    var fatorCrescimento = 0;

    function atualizaTela() {
        limpaTela();
        if (raio > 30) {
        fatorCrescimento = -1;
        } else if (raio < 20) {
        fatorCrescimento = 1;
        }
        raio = raio + fatorCrescimento;
        desenhaCirculo(300, 200, raio, 'blue');
    }
    setInterval(atualizaTela, 20); */