//Exercicio 2

import { compra, User } from "../src"

describe("testando o arquivo index.ts", ()=> {

    //a)
    test("Teste saldo maior do que o valor de compra", () => {
        const user: User = {
            name: "João",
            balance: 150
        }

        const result = compra(user, 40)

        expect(result).toEqual(
            {
                name: "João",
                balance: 110
            }
        )
    })

    //b)
    test("Teste saldo igual ao valor de compra", () => {
        const user: User = {
            name: "João",
            balance: 150
        }

        const result = compra(user, 150)

        expect(result).toEqual(
            {
                name: "João",
                balance: 0
            }
        )
    })

    //c)
    test("Teste saldo menor que o valor de compra", () => {
        const user: User = {
            name: "João",
            balance: 150
        }

        const result = compra(user, 300)

        expect(result).toEqual(undefined)
    })
})