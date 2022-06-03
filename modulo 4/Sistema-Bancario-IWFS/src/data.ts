export type Extracts = {
    value: number,
    date: string,
    description: string
}

export type User = {
    name: string,
    cpf: number,
    date: string,
    balance: number,
    extract: Extracts[]
}

export let users: User[] =[
    {
        name: "João Marcos",
        cpf: 12198876590,
        date: "28/12/1997",
        balance: 100,
        extract: [
            {
                value: 5,
                date: "03/06/2022",
                description: "Comprou uma barra de chocolate"
            },
            {
                value: 30,
                date: "01/06/2022",
                description: "Comprou uma camiseta"
            }
        ]
    },
    {
        name: "Ediane",
        cpf: 32464586712,
        date: "17/12/1998",
        balance: 250,
        extract: [
            {
                value: 150,
                date: "02/06/2022",
                description: "Comprou um sapato"
            },
            {
                value: 30,
                date: "28/05/2022",
                description: "Comprou uma skin de jogo"
            }
        ]
    }
] 