//INTERPRETAÇÃO DE CÓDIGO
//...........................................................................................................................................
/*
_____________________________________________________________________________________________________________________________________________

1)a. O código pede o usuário para digitar um numero, em seguida executa uma divisão por 2 que retorna o resto, verificando se o numero
    é par ou ímpar, se for par passa no teste se for ímpar nao passa.

  b. Para os números pares

  c. para os números ímpares
_____________________________________________________________________________________________________________________________________________

2)a. O código ultiliza de "switch and case" para comparar a resposta do usuário com a fruta tabelada, após isso, imprime o preço da
    fruta escolhida.

  b. O preço da fruta maçã é R$ 2.25

  c. O preço da fruta pêra é R$ 5 --> (preço do "default")
_____________________________________________________________________________________________________________________________________________

3)a. A primeira linha está pedindo um número para o usuário, e transformando a resposta do tipo "string" para o tipo "number"

  b. Se o usuário digitar 10, ele exibirá no console: 'Esse número passou no teste' e em seguida um erro,
    se o usuário digitar -10, ele exibirá no console apenas o erro.

  c. Haverá sempre um erro que estará no "console.log(mensagem)" pois a variável "mensagem" foi declarada dentro do bloco do "if"
    com a sintaxe "let" portanto esta variável será acessível apenas dentro do bloco onde foi declarada, então o programa dá um
    erro dizendo que a variável "mensagem" não foi definida.
_____________________________________________________________________________________________________________________________________________
*/
//ESCRITA DE CÓDIGO
//...........................................................................................................................................

//1)

//a.
    let idade = prompt("escreva sua idade")

//b.
    idade = Number(idade)

//c
    if(idade >= 18){
        console.log("Você pode dirigir")
    }
    else {
        console.log("Você não pode dirigir")
    }



//...........................................................................................................................................

//2)

    let turno =  prompt("Digite a letra correspondente a seu turno: M (matutino),V (Vespertino) ou N (Noturno).")
    turno = turno.toUpperCase()

    if (turno === "M"){
        console.log("Bom dia!")
    }
    else if (turno === "V"){
        console.log("Boa tarde!")
    }
    else {
        console.log("Boa noite!")  
    }


//...........................................................................................................................................

//3)
    turno =  prompt("Digite a letra correspondente a seu turno: M (matutino),V (Vespertino) ou N (Noturno).")
    turno = turno.toUpperCase()

    switch(turno){

        case "M":
            console.log("Bom dia!")
        break;

        case "V":
            console.log("Boa tarde!")
        break;

        case "N":
            console.log("Boa noite!")
        break;
        
        default:
            console.log("Turno não identificado")
        break;
    }

//...........................................................................................................................................

//4)

    let filme = prompt('Digite o gênero do filme').toLocaleLowerCase()
    let preco = Number(prompt('Digite o preço do filme'))

    if (filme == "fantasia" && preco < 15 ){
        console.log("Bom filme!")
    }
    else{console.log("Escolha outro filme :(")}


//...........................................................................................................................................
//DESAFIO
//...........................................................................................................................................

//1)
     filme = prompt('Digite o gênero do filme').toLocaleLowerCase()
     preco = Number(prompt('Digite o preço do filme'))

    if (filme == "fantasia" && preco < 15 ){
        let lanche = prompt('Qual lanchinho vai querer?')

        console.log("Bom filme!")
        console.log(`Aproveite o seu ${lanche}!`)
    }
    else{console.log("Escolha outro filme :(")}

//...........................................................................................................................................

//2)

let nome = prompt('Escreva seu nome completo')
let tipo = prompt('Escreva o tipo de jogo: IN (internacional); DO (doméstico);').toLocaleUpperCase().trim()
let etapa = prompt('Escreva a etapa do jogo: SF (semi-final); DT (decisão de terceiro lugar); FI  (final)').toLocaleUpperCase().trim()
let categoria = prompt('Escreva a categoria: 1, 2, 3 ou 4')
let quantidade = prompt('Qual a quantidade de ingressos?')
let precos = []

const indicarEtapa = () => {
    if (etapa === "SF"){
        precos = [1320, 880, 550, 220]
        etapa = "Semi-final"
    }
    else if (etapa === "DT"){
        precos = [660, 440, 330, 170]
        etapa = "Decisão de terceiro"
    }
    else if (etapa === "FI"){
        precos = [1980, 1320, 880, 330]
        etapa = "Final"
    }
    else{}
}

const indicarTipo = () => {
    let curPreco = precos[categoria - 1]

    if (tipo === "IN"){
        curPreco = Math.round(curPreco * 4.1)
        tipo = "Internacional"
    }
    else{
        tipo = "Nacional"
    }
    return curPreco
}

const Imprimir = () =>{

    indicarEtapa()
    let valor = indicarTipo()
    console.log('...............Dados da compra...............')
    console.log(`Nome do cliente: ${nome}`)
    console.log(`Tipo do jogo: ${tipo}`)
    console.log(`Etapa do jogo: ${etapa}`)
    console.log(`Categoria: ${categoria.toString()}`)
    console.log(`Quantidade de ingressos: ${quantidade}`)
    console.log('..................Valores....................')
    console.log(`Valor do ingresso: ${valor}`)
    console.log(`Valor total: ${(valor * quantidade)}`)
    
}

Imprimir()


//...........................................................................................................................................