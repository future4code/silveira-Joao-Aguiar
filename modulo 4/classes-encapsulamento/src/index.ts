/*
EXERCICIO 1.............................................................................................................

a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?

R: o construtor serve para montar aquele objeto de acordo com suas propriedades únicas.
Para chamar um contrutor devemos usar "new nome-da-classe( propriedade_1, propriedade_2)"

b) Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe
 (dê o nome, cpf e idade que você quiser).
 Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

R: Apenas uma vez

c) Como conseguimos ter acesso às propriedades privadas de uma classe?

R: Utilizando Getters e Setters

*/

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }
  
  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

//   const joao = new UserAccount("222.444.555-77","João",24)

 
// EXERCICIO 2.............................................................................................................

class Transaction {
    description: string
    value: number
    date: string

    constructor(description: string,value: number,date: string){
        this.description = description
        this.date = date
        this.value = value
    }

}

// EXERCICIO 3.............................................................................................................

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    getAccounts(password: string){
        if(password === "labenu123"){
            return this.accounts
        }
        else{
            console.log("ACESSO NEGADO")
        }
    }
    
    mudarContas(password: string, novasContas: UserAccount[]){
        if(password === "labenu123"){
            this.accounts = novasContas
        }
        else{
            console.log("ACESSO NEGADO")
        }
    }

    excluirContas(password: string){
        if(password === "labenu123"){
            this.accounts = []
        }
        else{
            console.log("ACESSO NEGADO")
        }
    }
  }

const joao = new UserAccount("111.222.333-44","João",24)
const edi = new UserAccount("333.555.777-99","Edi",23)

const nuBank = new Bank([edi,joao])

 const contas = nuBank.getAccounts('labenu')
 const contas2 = nuBank.getAccounts('labenu123')
 console.log(contas)
 console.log(contas2)
 