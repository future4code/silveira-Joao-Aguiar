function criarArrayNomesAnimais() {
    let nomesAnimais = []
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    
    animais.map((item,index,array)=>{
      nomesAnimais.push(item.nome)
    })
    
    return nomesAnimais
}