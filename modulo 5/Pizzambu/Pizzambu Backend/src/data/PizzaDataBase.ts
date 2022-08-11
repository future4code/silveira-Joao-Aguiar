import { OrderItem, Pizza } from "../controller/interfaces/PizzaInterfaces";
import { Database } from "./BaseDatabase"

export class PizzaDataBase extends Database {
    
    insertOrder = (input:OrderItem[],id: string)=>{
        try {
            
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    insertPizza = (input: Pizza)=>{
        try {
            
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    getMenu = ()=>{
        try {
            
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    getOrderById = (id: string)=>{
        try {
            
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }

    getAllOrders = ()=>{
        try {
            
        } catch (error: any) {
            throw new Error(error.sqlMessage);
        }
    }
}