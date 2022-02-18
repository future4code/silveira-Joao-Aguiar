//INTERPRETAÇÃO DE CÓDIGO
//......................................................................................................
/* 
_______________________________________________________________________________________________________
1) 10
   10 5
_______________________________________________________________________________________________________
2) 10 10 10
_______________________________________________________________________________________________________
3) O código grava quantas horas o usuário trabalha e quanto recebe por dia, para calcular quanto
recebe por hora.
--> sugestão para variáveis:
    horasTrabalho
    salarioDia
_______________________________________________________________________________________________________
*/
//ESCRITA DE CÓDIGO
//......................................................................................................
//1)

let nome;
let idade;
console.log(typeof nome ,typeof idade);

/* o console imprimiu "undefined" pois a variável nao foi atribuida a nenhum valor, portanto
nao tem nada armazenado nela */

nome = prompt("Qual é o seu nome?");
idade = prompt("Ok! agora me diga sua idade");

console.log(typeof nome ,typeof idade);

/* O console ientificou as variáveis como "string" pois quando escrevemos no "prompt" ele retorna
o valor em string independente se ccolocarmos nimeros ou apenas palavras */

console.log('Olá', nome,',você tem:', idade, 'anos!');
//......................................................................................................
//2)

let perguntaA = 'Na sua cidade faz calor?';
let perguntaB = 'Você gosta de chocolate?';
let perguntaC = 'você está usando alguma peça de roupa da cor vermelha?';

let temperatura = prompt(perguntaA);
let chocolate = prompt(perguntaB);
let roupa = prompt(perguntaC);

console.log(perguntaA,'-',temperatura);
console.log(perguntaB,'-',chocolate);
console.log(perguntaC,'-',roupa);
//......................................................................................................
//3)
let a = 10;
let b = 25;

console.log("O valor inicial de a é", a);
console.log("O valor inicial de b é", b);

let save = a
    a = b
    b = save

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);
//......................................................................................................
//DESAFIO

let valX = prompt('escreva o primeiro número');
let valY = prompt('escreva segundo número');

resA = Number(valX) + Number(valY);
resB = Number(valX) * Number(valY);

console.log("A soma dos números é:", resA.toString());
console.log("A multiplicação dos números é:", resB.toString());
//......................................................................................................
