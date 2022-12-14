// <html><canvas width="600" height="400"></canvas></html>

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

    /* - FUNÇÂO QUE A PÁGINA ME INFORMA ONDE CLIQUEI.

    function exibeAlerta(evento) {
        alert("Cliquei");
        console.log(evento);
    }
    tela.onclick = exibeAlerta; */

/*-----------------------------------------------------*/

    /* - FUNÇÂO QUE A PÁGINA ME INFORMA PELO X e Y.

    function exibeAlertaXeY(evento) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        alert("X= " + x + " Y= " + y);
    }
    tela.onclick = exibeAlertaXeY; */

// - FUNÇÃO DE QUANDO CLICAR A TELA CRIARÁ UM BOLINHA AZUL
function exibeCirculo(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();

    console.log("X= " + x + " Y= " + y);
}
tela.onclick = exibeCirculo;