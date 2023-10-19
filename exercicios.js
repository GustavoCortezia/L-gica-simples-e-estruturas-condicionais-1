
// ----------------------- EXERCICIO 1 -----------------------------

const idade = 19;

document.write("Minha idade é "+ idade + " anos <br><br>");


// ----------------------- EXERCICIO 2 -----------------------------

const num1 = 10;
const num2 = 2;
let soma = num1 + num2;

document.write("O resultado da soma de " + num1 + " e " + num2 + " é " + soma + "<br><br>");

// ----------------------- EXERCICIO 3 -----------------------------

const total = 149.90;
const parcelas = 24;
const valmensal = total/parcelas;
document.write("O valor total da compra foi R$" + total.toString().replace("." , ",") + "<br>");
document.write("Forma de pagamento:"+parcelas+"x de R$"+valmensal.toFixed(2).toString().replace(".", ",") + "<br><br>");


// ----------------------- EXERCICIO 4 -----------------------------

const min = 120;
const seg = min * 60;

document.write(min + " minutos equivale à " + seg + " segundos. <br><br>");


// ----------------------- EXERCICIO 5 -----------------------------

const aluno = "Gustavo";
const nota1 = 10;
const nota2 = 3;
const nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

document.write("O aluno " + aluno + " ficou com média " + media.toFixed(2).replace("." , ",") + "<br><br>");


// ----------------------- EXERCICIO 6 -----------------------------

let valA = 10;
let valB = 20; 
let valC = valA;

valA = valB;
valB = valC;

document.write("valA= "+ valA + "<br>" + "valB= " + valB + "<br><br>");


// ----------------------- EXERCICIO 7 -----------------------------

const totalVotos = 1000 // Number(prompt("Total de votos: "));

const brancos = 100 //Number(prompt("Votos em branco: "));
const nulos = 200 //Number(prompt("Votos nulos: "));
const validos = 700 //Number(prompt("Votos válidos: "));

document.write("TOTAL DE VOTOS: "+totalVotos+ "<br> Votos em branco: " +brancos/totalVotos * 100 + "% <br>" + "Votos nulos: " + nulos/totalVotos * 100 + "% <br>" + "Votos validos: "+validos/totalVotos * 100 + "% <br><br>");


// ----------------------- EXERCICIO 8 -----------------------------

numero1 = 10; //Number(prompt("numero1: "));
numero2 = 12; //Number(prompt("numero2: "));

if (numero1 > numero2) {
    document.write("O primeiro é maior<br><br>");
} 
if(numero1 < numero2) {
    document.write("O segundo é maior<br><br>");
}
if(numero1 === numero2) {
    document.write("Os dois são iguais<br><br>");
}

// ----------------------- EXERCICIO 9 -----------------------------   

const macas = 30; //Number(prompt("maças: "));
let preco;

if (macas < 12) {
    preco = 0.30;
}

if(macas >= 12) {
    preco = 0.25;
}

const totalMacas = preco * macas;

document.write("Total de maças: " + macas + "<br> Preço total: R$" + totalMacas.toFixed(2).replace(".", ",") + "<br><br>");


// ----------------------- EXERCICIO 10 -----------------------------

const nome1 = "Gustavo";
const idade1 = 19;
const nascimento = 2023 - idade1;

document.write("Nome: " + nome1 + " // Idade: " + idade1+ " // Nasceu em: " +nascimento+ "<br><br>");


// ----------------------- EXERCICIO 11 -----------------------------

const numero = 10;

if (numero % 2 === 0) {
    alert(numero + " é par");
    // document.write(numero + " é par!<br><br>");

} else {
    alert(numero + " é ímpar");
    // document.write(numero + " é ímpar! <br><br>");
}

// ----------------------- EXERCICIO 12 -----------------------------

const anoAtual = 2023;
const anoNascimento = 2008;

if(anoAtual - anoNascimento >= 16){
    // document.write("Pode Votar");
    console.log("Pode votar");
}

else{
    // document.write("Não pode votar");
    console.log("Não pode votar");
}