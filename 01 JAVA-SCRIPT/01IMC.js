//<meta charset="UTF-8">

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
    
var pesoFlavio = 70;
var alturaFlavio = 1.71;
var imcFlavio = pesoFlavio / (alturaFlavio * alturaFlavio);
mostra("O peso do Flávio é: " + Math.round(imcFlavio) + "<br>");
    
// Criar uma Função do Imc
function calculaImc(altura, peso) {
    return imc = Math.round(peso / (altura * altura));
}

var nome = prompt("Informe seu nome");
var alturaInformada = prompt(nome + " Informe a Altura");
var pesoInformado = prompt(nome + " Informe o Peso");

var imc = calculaImc(alturaInformada, pesoInformado);
mostra(nome + ": o IMC é: " + imc + "<br><br>");

if(imc < 18.5) {
    mostra("Seu peso está abaixo de recomendado");
} else if(imc > 35) {
    mostra("Seu peso está abaixo do recomendado");
} else if(imc => 18.5 && imc <= 35) {
            mostra("Você está no peso");
}