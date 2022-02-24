//INTERPRETAÇÃO DE CÓDIGO
//...........................................................................................................................................
/*
_____________________________________________________________________________________________________________________________________________

1)a. [{ nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }]
_____________________________________________________________________________________________________________________________________________

2)a. [Amanda Rangel ,Laís Petra ,Letícia Chijo]
_____________________________________________________________________________________________________________________________________________

3)a. [{ nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" }]
_____________________________________________________________________________________________________________________________________________
*/
//ESCRITA DE CÓDIGO
//...........................................................................................................................................

//1)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a
 const dogName = pets.map((pet,i,arr) => {
    return pet.nome
 })

 console.log (dogName)

 //b
 const salsicha = pets.filter((pet,i,arr) =>{
     return pet.raca === "Salsicha"
 })

 console.log (salsicha)

 //c
 const separarPoodle = pets.filter((pet,i,arr) => {
    return pet.raca ==="Poodle"
 })
 const mensagem = separarPoodle.map((pet,i,arr) =>{
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
 })

 console.log(mensagem)

//...........................................................................................................................................

//2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a
 const itemName = produtos.map((item,i,arr) => {
    return item.nome
 })
 console.log(itemName)

 //b
 const gerarArray = produtos.map((item,i,arr) =>{
     return {nome:item.nome,preco:(item.preco - (item.preco * 0.05))}
 })
 console.log(gerarArray)

 //c
 const bebidas = produtos.filter((item,i,arr) =>{
     return item.categoria ==="Bebidas"
 })
 console.log(bebidas)

 //d
 const ype = produtos.filter((item,i,arr) =>{
     return item.nome.includes("Ypê")
 })
 console.log(ype)

 //e
 const mensagemYpe = ype.map((item,i,arr) =>{
     return `Compre ${item.nome} por ${item.preco}`
 })
 console.log(mensagemYpe)
 

//...........................................................................................................................................
//DESAFIO
//...........................................................................................................................................

//1)

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a
 const nomesPokemon = pokemons.map((pokemon,i,arr) =>{
    return pokemon.nome
 })
 
 console.log(nomesPokemon.sort())

 //b
 const tipoPokemons = pokemons.map((pokemon,i,arr) =>{
     return pokemon.tipo
 })

 let tiposFiltrados = [...new Set(tipoPokemons)]
 console.log(tiposFiltrados)


//...........................................................................................................................................
