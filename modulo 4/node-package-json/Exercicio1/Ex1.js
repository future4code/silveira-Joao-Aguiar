
//a) 
// => R: utilizando a sintaxe process.argv[2]

//b)

const nome = process.argv[2]
let idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos!`)

//C 
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade += 7}`)