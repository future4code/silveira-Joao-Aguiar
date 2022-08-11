import { Request, Response } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";
import { OrderItem, Pizza } from "./interfaces/PizzaInterfaces";

export class PizzaController {
    constructor(
        private pizzaBusiness: PizzaBusiness
    ){}

    createOrder = async (req: Request, res: Response)=>{
        try {
            const { pizzas } = req.body

            const input: OrderItem[] = pizzas
            
            await this.pizzaBusiness.createOrder(input)
            res.status(201).send("Pedido realizado com sucesso")
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message)
        }
    }

    createPizza = async (req: Request, res: Response)=>{
        try {
            const { name, price, ingredients } = req.body

            const input: Pizza = {
                name,
                price,
                ingredients
            }

            await this.pizzaBusiness.createPizza(input)
            res.status(201).send("Pizza criada com sucesso")

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message)
        }
    }

    getMenu = async (req: Request, res: Response)=>{
        try {
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message) 
        }
    }

    getOrderById = async (req: Request, res: Response)=>{
        try {
            const id = String(req.params.id)

             await this.pizzaBusiness.getOrderById(id)
            res.status(200).send("Pedido encontrado com sucesso")

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message) 
        }
    }

    getAllOrders = async (req: Request, res: Response)=>{
        try {
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message) 
        }
    }
}