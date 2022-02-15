//INTERPRETAÇÃO DE CÓDIGO
//...............................................................................................................
/*
_________________________________________________________________________________________________________________
1) a. false
   b. false
   c. true
   d. boolean
_________________________________________________________________________________________________________________
2) Sim, função "prompt" retornará uma "string" concatenando os dois numeros digitados 
   Ex:. 10 + 10 imprimiria 1010
_________________________________________________________________________________________________________________
3) Minha sugestão seria para que ele convertesse as variaveis para numeros uzando o método "Number()"
 para então depois soma-los.
_________________________________________________________________________________________________________________*/
//ESCRITA DE CÓDIGO
//...............................................................................................................

//1)

let idadeUser = prompt("Qual a sua idade?");
let idadeAmigo = prompt("Qual a idade do seu melhor amigo ou amiga?");

idadeUser = Number(idadeUser);
idadeAmigo = Number(idadeAmigo);

let difIdade = idadeUser - idadeAmigo;
let comparador = idadeUser > idadeAmigo;

console.log('Sua idade é maior do que a do seu melhor amigo?', comparador)
console.log('a diferença de idade entre vocês é:',difIdade)

//...............................................................................................................

//2) 

let numPar = prompt('Insira um número par');
numPar = numPar % 2;
console.log('O resultado é:', numPar);

/* Comentário1: O resultado sempre será "0" se o numero inserido for par, pois todo 
numero par dividido por dois tem como resto "0" */

/* Comentário2: O resultado sempre será "1" pois todo número impar dividido por 2
tem como resto "1" */

//...............................................................................................................

//3)

let idadeAno = prompt("Quantos anos você tem?");

console.log('Sua idade em meses é:',(idadeAno * 12));
console.log('Sua idade em dias é:',(idadeAno * 365));
console.log('Sua idade em horas é:',(idadeAno * 8760));

//...............................................................................................................

//4)

let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');
let comp1 = num1 > num2;
let comp2 = num1 === num2;
let comp3 = (num1 % num2) === 0;
let comp4 =(num2 % num1) === 0;

console.log('O primeiro numero é maior que o segundo?',comp1);
console.log('O primeiro numero é igual ao segundo?',comp2);
console.log('O primeiro numero é divisível pelo segundo?',comp3);
console.log('O segundo numero é divisível pelo primeiro?',comp4);

//...............................................................................................................
// ---> DESAFIO <---
//...............................................................................................................

//1)

let kelvin;
let fahrenheit;
let celsius;

//a)
fahrenheit = 77;
kelvin = (fahrenheit - 32)*(5/9) + 273.15;
console.log('77 °F são',kelvin.toString(),'K');

//b)
celsius = 80;
fahrenheit = celsius*(9/5) + 32;
console.log('80 °C são',fahrenheit.toString(),'°F');

//c)
celsius = 30;
fahrenheit = celsius*(9/5) + 32;
kelvin = (fahrenheit - 32)*(5/9) + 273.15;
console.log('30 °C são',kelvin.toString(),'K e', fahrenheit.toString(),'°F');

//d)
celsius = prompt('Digite uma temperatura em °C');
fahrenheit = celsius*(9/5) + 32;
kelvin = (fahrenheit - 32)*(5/9) + 273.15;
console.log( celsius.toString(),'°C são',kelvin.toString(),'K e', fahrenheit.toString(),'°F');

//...............................................................................................................

//2)

let kWatt;
let valor

//a)
kWatt =280;
valor = kWatt * 0.05;
console.log('Uma residência que consome 280 Kw/h pagará:',valor,'reais por hora');

//b) 
valor = valor - (valor * 0.15);
console.log('Com desconto de 15% a mesma residência pagará:',valor,'reais por hora');

//...............................................................................................................

//3)

//a)
let lb = 20;
let kg = lb * 0.453592;
console.log(lb.toString(),'lb equivalem a',kg.toString(),'kg');

//b)
let oz = 10.5;
kg = oz * 0.02834950000001049;
console.log(oz.toString(),'oz equivalem a',kg.toString(),'kg');

//c)
let mi = 100
let m = mi / 0.000621371;
console.log(mi.toString(),'mi equivalem a',m.toString(),'m');

//d)
let ft = 50;
m = ft / 3.28084;
console.log(ft.toString(),'ft equivalem a',m.toString(),'m');

//e)
let gal = 103.56;
let l = gal * 0.264172;
console.log(gal.toString(),'gal equivalem a',l.toString(),'l');

//f)
let xic = 450;
l = xic / 6;
console.log(xic.toString(),'xic equivalem a',l.toString(),'l');

//g)
lb = prompt('Digite o número de lbras que deseja converper para quilo-gramas:')
kg = lb * 0.453592;
console.log(lb.toString(),'lb equivalem a',kg.toString(),'kg');

//...............................................................................................................

