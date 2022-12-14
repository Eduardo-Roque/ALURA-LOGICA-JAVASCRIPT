//<html><canvas width="600" height="400"></canvas></html>

    /*  - Para a Tecla ALT, fazemos evento.altKey.
        - E SE VOCÊ USA LINUX, USE evento.ctrlKey.
    */
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    console.log(x + ',' + y + "   RAIO= " + raio);

    if (evento.shiftKey && raio < 40) { // quando clicar com SHIFT

           raio = raio + 10;
    }

    if (evento.altKey) { // quando clicar com ALT

        raio = raio - 5;
    }

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

tela.onclick = desenhaCirculo;