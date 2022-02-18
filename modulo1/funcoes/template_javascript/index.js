//INTERPRETAÇÃO DE CÓDIGO
//.............................................................................................................................................
/*
_______________________________________________________________________________________________________________________________________________

1) a.10
     50

   b. A função ainda será executada e os resultados ainda serão 10 e 50, apenas não serão impressos no console
_______________________________________________________________________________________________________________________________________________

2) a. Esta função capta uma frase do usuário e em seguida trasforma todos os caracteres em minúsculo e procura a palavra "cenoura"
    após isso ele retorna true se a palavra "cenoura" estiver na frase e false se nao estiver.
    
   b. i. true
      ii. true
      iii. false
_______________________________________________________________________________________________________________________________________________
*/
//.............................................................................................................................................
//ESCRITA DE CÓDIGO
//.............................................................................................................................................

//1)

//a.
function info(){
    return "Eu sou João Marcos, tenho 24 anos, moro em Itaperuna e sou estudante."
}

//b.
let nome = prompt("Digite seu nome")
let idade = +prompt("Digite sua idade")
let cidade = prompt("Digite sua cidade")
let profissao = prompt("Digite sua profissão")

function infoUsuario(nome,idade,cidade,profissao){
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(infoUsuario(nome,idade,cidade,profissao))

//.............................................................................................................................................

//2) 

//a.
let num1 = +prompt("Digite um número")
let num2 = +prompt("Digite outro número")

function somarNumeros(num1,num2){
    return num1 + num2
}

console.log("Soma dos números:",somarNumeros(num1,num2))

//b.
 num1 = +prompt("Digite um número")
 num2 = +prompt("Digite outro número")

function comparar(num1,num2){
    return num1 >= num2
}

console.log("O primeiro número é maior ou igual que o segundo?",comparar(num1,num2))

//c.
let num = +prompt("Digite um número")

function par(num){
    return (num % 2) === 0
}

console.log("Seu numero é par?",par(num))

//d.
let msg = prompt("Digite uma mensagem")

function formatar(msg){
    msg = msg.toUpperCase()
    console.log("tamanho da frase:",msg.length)
    console.log("sua mensagem formatada:",msg)   
}

formatar(msg);


//.............................................................................................................................................

//3)

let N1 = +prompt("Digite um número para as operações")
let N2 = +prompt("Digite mais um número para as operações")

function soma(n1,n2){
   return n1 + n2
}

function subtracao(n1,n2){
    return n1 - n2
 }

 function divisao(n1,n2){
    return n1 / n2
 }

 function multiplicacao(n1,n2){
    return n1 * n2
 }

 console.log(`Numeros usados: ${N1} e ${N2}`);
 console.log('soma:',soma(N1,N2));
 console.log('diferença:',subtracao(N1,N2));
 console.log('multiplicação:',multiplicacao(N1,N2));
 console.log('divisão:',divisao(N1,N2));

//.............................................................................................................................................
//DESAFIO
//.............................................................................................................................................

//1)
N1 = +prompt("Escreva um numero para o primeiro parâmetro")
N2 = +prompt("Escreva um numero para o segundo parâmetro")

//a.
const escreverParametros =(params)=>{
    console.log("Resultado:", params)
}

//b.
const somarParametos = (n1,n2)=>{
    let result = n1 + n2;
    escreverParametros(result);
}

somarParametos(N1,N2)

//.............................................................................................................................................

//2)
let cat1 = +prompt("Escreva o valor do primeiro cateto");
let cat2 = +prompt("Escreva o valor do segundo cateto");

const pitagoras = (cat1,cat2,hipotenusa)=>{
    hipotenusa = Math.sqrt((cat1*cat1) + (cat2*cat2))
    return hipotenusa
}

console.log("O valor da hipotenusa é:", pitagoras(cat1,cat2))

//.............................................................................................................................................
