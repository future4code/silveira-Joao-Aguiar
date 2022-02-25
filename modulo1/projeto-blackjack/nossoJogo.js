//Projeto Blackjack
//....................................................................................................................................

let usuario 
let computador 
let userCards = []
let compCards = []

const pontos = (pointList) =>{
      let pt = pointList[0].valor + pointList[1].valor
      return pt
}

const vencedor = (ptU,ptC) =>{
   if (ptU > ptC){
      console.log('O usuário ganhou!')
   }
   else if(ptU === ptC){
      console.log('Empate!')
   }
   else{console.log('O computador ganhou!')}
}

if(confirm("Quer iniciar uma nova rodada?")){
   for(i = 0 ; i < 2 ; i++){
      usuario = comprarCarta()
      userCards.push(usuario)
      computador = comprarCarta()
      compCards.push(computador)
   }
  
   
   console.log(`Usuário - cartas: ${userCards[0].texto} ${userCards[1].texto}  - pontuação ${pontos(userCards)}`)
   console.log(`Computador - cartas: ${compCards[0].texto} ${compCards[1].texto}  - pontuação ${pontos(compCards)}`)
   vencedor(pontos(userCards),pontos(compCards))
   
}
else {console.log("O jogo acabou")}

//....................................................................................................................................