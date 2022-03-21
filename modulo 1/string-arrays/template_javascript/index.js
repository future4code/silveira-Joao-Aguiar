//INTERPRETAÇÃO DE TEXTO
//..............................................................................................................................................
/*
________________________________________________________________________________________________________________________________________________
  1)

  a. undefined
  b. null
  c. 11
  d. 3
  e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  f. 9
________________________________________________________________________________________________________________________________________________

 2)

 a. SUBI NUM ÔNIBUS EM MIRROCOS 27
________________________________________________________________________________________________________________________________________________
*/

//ESCRITA DE CÓDIGO
//..............................................................................................................................................

//1)

let nome = prompt('Digite seu nome');
let email = prompt('Digite seu email');

console.log (`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);

//..............................................................................................................................................

//2)

let comidas = ['strogonnof', 'hambúrguer','sorvete','brigadeiro','churrasco'];

    //a.
    console.log(comidas);

    //b.
    console.log('essas são minhas 5 comidas preferidas:');
    console.log('1. '+comidas[0]);
    console.log('2. '+comidas[1]);
    console.log('3. '+comidas[2]);
    console.log('4. '+comidas[3]);
    console.log('5. '+comidas[4]);

    //c.
    let comidaUser = prompt('Qual sua comida preferida?')

    comidas[1] = comidaUser;

    console.log('Lista atualizada no item "2":');
    console.log('1. '+comidas[0]);
    console.log('2. '+comidas[1]);
    console.log('3. '+comidas[2]);
    console.log('4. '+comidas[3]);
    console.log('5. '+comidas[4]);

//..............................................................................................................................................

//3)

    //a.
    let listaDeTarefas = []

    //b.
    let tarefa = prompt('Escreva a tarefa n° 1');
    listaDeTarefas.push(tarefa);
    tarefa = prompt('Escreva a tarefa n° 2');
    listaDeTarefas.push(tarefa);
    tarefa = prompt('Escreva a tarefa n° 3');
    listaDeTarefas.push(tarefa);

    //c.
    console.log(listaDeTarefas);

    //d.
    tarefa = +prompt('digite o numero da tarefa já realizada (1, 2 ou 3)');

    //e.
    listaDeTarefas.splice(tarefa-1,1);

    //f.
    console.log(listaDeTarefas);

//..............................................................................................................................................






