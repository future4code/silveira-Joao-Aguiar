"use strict";
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}
class Transaction {
    constructor(description, value, date) {
        this.description = description;
        this.date = date;
        this.value = value;
    }
}
class Bank {
    constructor(accounts) {
        this.accounts = accounts;
    }
    getAccounts(password) {
        if (password === "labenu123") {
            return this.accounts;
        }
        else {
            return "ACESSO NEGADO";
        }
    }
}
const joao = new UserAccount("111.222.333-44", "João", 24);
const edi = new UserAccount("333.555.777-99", "Edi", 23);
const nuBank = new Bank([edi, joao]);
const contas = nuBank.getAccounts('labenu');
console.log(contas);
//# sourceMappingURL=index.js.map