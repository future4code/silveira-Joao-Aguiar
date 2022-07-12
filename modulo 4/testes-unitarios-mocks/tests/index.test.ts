//Exercicio 2

import { validarPerssonagem } from "../src";

describe("testando a função validarPerssonagem", () => {
    //a)
    test("Deve retornar falso se o nome for vazio", () => {
        const result = validarPerssonagem({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });

        expect(result).toBe(false);
    });

    //b)
    test("Deve retornar falso se a vida for 0", () => {
        const result = validarPerssonagem({
            name: "Captain America",
            life: 0,
            strength: 300,
            defense: 500,
        });

        expect(result).toBe(false);
    });

    //c)
    test("Deve retornar falso se a força for 0", () => {
        const result = validarPerssonagem({
            name: "Shazan",
            life: 100,
            strength: 0,
            defense: 500,
        });

        expect(result).toBe(false);
    });

    //d)
    test("Deve retornar falso se a defesa for 0", () => {
        const result = validarPerssonagem({
            name: "Hulk",
            life: 100,
            strength: 600,
            defense: 0,
        });

        expect(result).toBe(false);
    });

    //e)
    test("Deve retornar falso se a vida for um valor negativo", () => {
        const result = validarPerssonagem({
            name: "Batman",
            life: -10,
            strength: 300,
            defense: 500,
        });

        expect(result).toBe(false);
    });

    //f)
    test("Deve retornar verdadeiro para todos os valores válidos", () => {
        const result = validarPerssonagem({
            name: "Spider Man",
            life: 1500,
            strength: 300,
            defense: 500,
        });

        expect(result).toBe(true);
    });
})