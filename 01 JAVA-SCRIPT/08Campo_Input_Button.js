/* <meta charset="UTF-8">

<input/>
<button>Compare com o meu segredo</button> */

    // var segredo = Math.round(Math.random() * 10);

var segredos = [5,7,10,2]; // ARRAY

var input = document.querySelector("input"); // trazer a tag input -> caixa de texto
input.focus();

function verifica() {

    for(var posicao = 0;posicao <= segredos.length(); posicao++) {

        if(input.value == segredos[posicao]) { // segredo recebe [posicao].

        alert("Você ACERTOU!");
        break;
        } else { alert("Você ERROU!!!"); }

    }

    input.value = ""; // Vai apagar o valor do input.
    input.focus(); // Vai focar a seta do mouse.
}

var button = document.querySelector("button"); // chamar a tag button -> botão

button.onclick = verifica; // chamar a função sem () parentêses
// onclick -> quando clico no botâo