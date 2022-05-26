//Exercício 2

//a)

type Stats = {
     maior: number,
    menor: number,
    media: number
}
function obterEstatisticas(numeros: number[]):Stats {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([4,5,2,8,5,1]))