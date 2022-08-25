import { Order, OrderItem, Pizza } from "../controller/interfaces/PizzaInterfaces"
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
        const menu = await this.pizzaDataBase.getMenu()
        return menu
    }

    getOrderById = async (id: string)=>{
        if(!id){
            throw new CustomError(400,"Faltando ID do Pedido");                  
        }

        const order = await this.pizzaDataBase.getOrderById(id)

        return order
    }

    getAllOrders = async ()=>{
        const orders = await this.pizzaDataBase.getAllOrders()
        return orders
    }
}