// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const comparar = (a,b) =>{
        return a - b
    }
    return array.sort(comparar)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let newArray = []
  for (let number of array){
    if((number % 2) === 0){
        newArray.push(number)
    }
  }
  return newArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let newArray = []
    for (let number of array){
      if(!(number % 2)){
        number = Math.pow(number,2)
          newArray.push(number)
      }
    }
    return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior;
    let maiorDiv;
    let dif;

    if (num1 > num2){
        maior = num1
        if ((num1 % num2) == 0 ){
            maiorDiv =true
        }
        else{maiorDiv = false}
        dif = num1 - num2   
    }
    else{ 
        maior = num2
        if ((num2 % num1) == 0 ){
            maiorDiv = true
        }
        else{maiorDiv = false}
        dif = num2 - num1   
    }
return {maiorNumero:maior,maiorDivisivelPorMenor:maiorDiv,diferenca:dif}

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = 0;
    let parArray = []
    for (let i = 0; i < n; i++){
        parArray.push(pares)
        pares = pares + 2
    }
    return parArray
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    let triangulo;

    if((ladoA != ladoB && ladoA != ladoC)){
        console.log("Escaleno")
        if(ladoB == ladoC){
            return  "Isósceles"
        }
        return "Escaleno"
        
    }
    else if (ladoA == ladoB && ladoA == ladoC){
        console.log("Equilátero")
        return "Equilátero"
    }
    else{
        console.log("Isósceles")
        return "Isósceles"
    }
    
    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

array.sort((a,b)=>{
    return a - b
})

let newArray = [array[array.length - 2],array[1]]

return newArray

    
  
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de 2006, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa,nome:"ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

const autorizadas = (P)=>{
    return P.filter((item,index,array)=>{
        return item.altura >= 1.5 && item.idade > 14 && item.idade < 60
    })
}

return autorizadas(pessoas)
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
    const naoAutorizadas = (P)=>{
        return P.filter((item,index,array)=>{
            return !(item.altura >= 1.5 && item.idade > 14 && item.idade < 60)
    })
}

    return naoAutorizadas(pessoas)

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

let compras;
let arrayCompras = [];
let soma = 0;
   
    for(let conta of contas){
        
        compras = conta.compras
        if(compras[0] === undefined){
                compras.push(0)
        }else{
            soma = compras.reduce((soma,i)=>{
                return soma + i
            })
        }
        soma = compras.reduce((soma,i)=>{
            return soma + i
        })

        arrayCompras.push(soma)
        conta.saldoTotal = conta.saldoTotal - soma
        compras.splice(0,compras.length)
            
        }
        console.log(contas)
        return contas
        
        
}

    


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    const compare = (x,y)=> {
        if (x.nome < y.nome)
           return -1;
        if (x.nome > y.nome)
          return 1;
        return 0;
      }

    return consultas.sort(compare)
        
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}