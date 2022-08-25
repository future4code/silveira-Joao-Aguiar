import { Order, OrderItem, Pizza } from "../controller/interfaces/PizzaInterfaces";
import { Database } from "./BaseDatabase"

export class PizzaDataBase extends Database {
    
    insertOrder = async (order: OrderItem[],id: string)=>{
        try {
            await Database.connection("PizzaOrders")
            .insert({
                orderID: id,
                itens: JSON.stringify(order)
            })

        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    insertPizza = async (input: Pizza)=>{
        try {
            const {name,price,ingredients} = input
            await Database.connection("Pizza")
            .insert({
                name,
                price,
                ingredients: JSON.stringify(ingredients)
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    getMenu = async ()=>{
        try {
            const menu = await Database.connection("Pizza")
            .select("*")

            return menu
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    getOrderById = async (id: string)=>{
        try {
            const order = await Database.connection("PizzaOrders")
            .select("*")
            .where({orderID: id})

            return order
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    getAllOrders = async ()=>{
        try {
            const orders =await Database.connection("PizzaOrders")
            .select("*")

            return orders

        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }
}