"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    introduceYourself() {
        console.log(`Olá, me chamo ${this.name}, bom dia!`);
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
}
const joao = new User("u1h42g1", "joao@joao.bom.br", "João", "joao123");
class Customer extends User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
}
const edi = new Customer("5yg4lo", "edi@edi.com.br", "Ediane", "edi123", "C6bank");
edi.introduceYourself();
const client = {
    name: "João",
    registrationNumber: 9,
    consumedEnergy: 200,
    calculateBill: () => {
        return 5;
    }
};
console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill());
//# sourceMappingURL=index.js.map