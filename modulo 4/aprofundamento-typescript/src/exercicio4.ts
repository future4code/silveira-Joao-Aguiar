//Exercicio 4

//a)
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) usaria o comando tsc exercicio4.ts

//c) sim eu setaria o comando "start" no package.json para trasnpilar e criaria o tscongig.ts, desse modo
//o typescript criaria um arquivo em javascript na pasta build

//d) Sim, se o tsconfig.ts e as pastas src e build estiverem configuradas, basta rodar o comando tsc e todos
//os arquivos na pasta src serão transpilados para a pasta build