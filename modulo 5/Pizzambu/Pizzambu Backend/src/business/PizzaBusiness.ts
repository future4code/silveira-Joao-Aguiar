import { OrderItem, Pizza } from "../controller/interfaces/PizzaInterfaces"
import { PizzaDataBase } from "../data/PizzaDataBase"
import { CustomError } from "./errors/CustomError";
import { IdGenerator } from "./services/IdGenerator"

export class PizzaBusiness {
    constructor(
        private pizzaDataBase: PizzaDataBase,
        private idGenerator: IdGenerator
    ){}

    createOrder = async (input: OrderItem[])=>{
        if(!input){
            throw new CustomError(400,"Faltando informação");        
        }

        const id = this.idGenerator.generateId()

        await this.pizzaDataBase.insertOrder(input,id)
    }

    createPizza = async (input: Pizza)=>{
        const {name,price,ingredients} = input
        if(!input || !name || !price || !ingredients){
            throw new CustomError(400,"Faltando informação");         
        }

        await this.pizzaDataBase.insertPizza(input)
    }

    getMenu = async ()=>{

    }

    getOrderById = async (id: string)=>{
        if(!id){
            throw new CustomError(400,"Faltando ID do Pedido");                  
        }

        await this.pizzaDataBase.getOrderById(id)
    }

    getAllOrders = async ()=>{

    }
}