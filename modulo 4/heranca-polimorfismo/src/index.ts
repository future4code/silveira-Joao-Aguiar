// HERANÇA...........................................................................................................................

// EXERCICIO 1
/*
a) não é possivel pegar essa informação pois ela é privada
b) apenas uma vez, mas chamaria uma quaintidade de vezes igual ao numero de novos construtores que eu chamasse

*/
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }

      introduceYourself(): void{
        console.log(`Olá, me chamo ${this.name}, bom dia!`)
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

  const joao = new User("u1h42g1","joao@joao.bom.br","João","joao123")


  // EXERCICIO 2
  /*
  a) apenas uma vez

  b) duas vezes
  
  */
  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const edi = new Customer("5yg4lo","edi@edi.com.br","Ediane","edi123","C6bank")

  edi.introduceYourself()

  // EXERCICIO 3
  // a) Não, pois ela continua sendo pridada, tirando o acesso das classes filhas também


  // POLIMORFISMO...........................................................................................................................
  // EXERCICIO 1
  export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const client: Client = {
    name: "João",
    registrationNumber: 9,
    consumedEnergy: 200,
  
    calculateBill: () => {
      return 5;
    }
  }

  console.log(client.name,client.registrationNumber,client.consumedEnergy,client.calculateBill())

  //a) Todas, poi as informações estão públicas

// EXERCICIO 2
export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//   a) const instance = new Place("28300000")
//   R:o erro diz que eu não posso criar uma instancia de uma classe abstrata

//b) declarar uma classe filha e criar uma instância dela


// EXERCICIO 3
export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    getResidentsQuantity(){
        return this.residentsQuantity
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    getFloorsQuantity(){
        return this.floorsQuantity
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    getMachinesQuantity(){
        return this.machinesQuantity
    }
  }


// EXERCICIO 4
class ResidentialClient extends Residence {
    constructor(
        private cpf: string,
        public usedEnergy: number,
        public residentsQuantity:number,
        public cep: string
        ){
        super(residentsQuantity,cep)
    }

    public getCpf(): string {
        return this.cpf;
      }
    
      public Bill(): number {
        return this.usedEnergy * 0.75;
      }
}

// EXERCICIO 5
class CommercialClient extends Commerce {
    constructor(
        private cnpj: string,
        floorsQuantity: number,
        public usedEnergy: number,
        cep: string
    ){
        super(floorsQuantity,cep)
    }

    public Bill(): number {
        return this.usedEnergy * 0.53;
      }
    
      public getCnpj(): string {
        return this.cnpj;
      }
}

/*
a) a estrutura é a mesma

b) as propriedades e alguns detalhes da lógica sao diferentes
*/

// EXERCICIO 6
class IndustrialClinet extends Industry {
    constructor(
      public name: string,
      public consumedEnergy: number,
      private insdustryNumber: string, 
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }
  
    public Bill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }

  /*
a) Industry
  */