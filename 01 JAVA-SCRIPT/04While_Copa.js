//<meta charset="UTF-8">

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var anoCopa = 1930;
while(anoCopa <= 2016) {

    mostra(anoCopa);
    anoCopa = anoCopa + 4;
}

mostra("FIM!!!");