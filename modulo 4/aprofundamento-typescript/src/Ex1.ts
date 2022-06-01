//Exercício 1

//a) O typescript indicará um erro dizendo que uma variavel tipo "string" não pode receber um "number"

//b) utilizamos o "union" para permitir que ambas os tipos de variavel sejam aceitos, da forma a seguir:
let union: string | number = "String"
union = 22

//d) 

enum ArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

//c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: ArcoIris
}

const pessoa1: Pessoa = {
    nome: "João",
    idade: 24,
    corFavorita: ArcoIris.VIOLETA
}

const pessoa2: Pessoa = {
    nome: "Ediane",
    idade: 23,
    corFavorita: ArcoIris.ANIL
}

const pessoa3: Pessoa = {
    nome: "Pedro",
    idade: 18,
    corFavorita: ArcoIris.VERMELHO
}

