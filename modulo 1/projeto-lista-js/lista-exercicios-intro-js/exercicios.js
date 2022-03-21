// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(alt,larg) {
  // implemente sua lógica aqui
  alt = +prompt("Digite a altura")
  larg = +prompt("Digite a largura")

  let result = alt * larg

  console.log(result)
}

// EXERCÍCIO 02
function imprimeIdade(anoInicial,anoAtual) {
  // implemente sua lógica aqui
  anoAtual = +prompt('Digite o ano atual')
  anoInicial = +prompt('Digite o ano de seu nascimento')
  

  let idade = anoAtual - anoInicial

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let imc = peso / Math.pow(altura,2)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite seu nome")
  idade = prompt("Digite sua idade")
  email = prompt("Digite seu email")
  email = email.trim()

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  // implemente sua lógica aqui
  cor1 = prompt('Escreva uma cor')
  cor2 = prompt('Escreva sua segunda cor')
  cor3 = prompt('Escreva sua terceira cor')
  let lista = []

  lista.push(cor1)
  lista.push(cor2)
  lista.push(cor3)
  console.log(lista)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let qtd = custo / valorIngresso
  return qtd
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.length
  string2 = string2.length

  return string1 == string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[(array.length - 1)]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let saveData = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = saveData

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let regrex = new RegExp(string1,"gi")
  let compare = regrex.test(string2)
  return compare

}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual,anoInicial,emissaoIdt) {
  // implemente sua lógica aqui
  anoAtual = +prompt("Digite o ano atual")
  anoInicial = +prompt("Digite o ano de nascimento")
  emissaoIdt = +prompt("Digite o ano de emissão da carteira")

  let res;
  let idade = anoAtual - anoInicial
  let dataEmissao = anoAtual - emissaoIdt

  console.log(idade)
  console.log(dataEmissao)
 

  if (idade <= 20) {
    res =  dataEmissao >= 5
    console.log(res)
  }
  else if (idade > 20 && idade <= 50){
    res =  dataEmissao >= 10
    console.log(res)
  }
  else  {
    res = dataEmissao >= 15
    console.log(res)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}