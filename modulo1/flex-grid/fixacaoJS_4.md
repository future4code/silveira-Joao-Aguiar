function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  
  let qtd = 0
  
  for (let item of arrayDeNumeros){
    if (numeroEscolhido == item){
      qtd++
    }
  }
  
  if(qtd == 0){
      return 'Número não encontrado'
    }
    else{
      return `O número ${numeroEscolhido} aparece ${qtd}x`
    }
}