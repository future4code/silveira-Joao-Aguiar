import express from "express"
import { PizzaBusiness } from "../../business/PizzaBusiness"
import { IdGenerator } from "../../business/services/IdGenerator"
import { PizzaDataBase } from "../../data/PizzaDataBase"
import { PizzaController } from "../PizzaController"

export const pizzaRouter = express.Router()

const pizzaBusiness = new PizzaBusiness(
    new PizzaDataBase,
    new IdGenerator
)

const pizzaController = new PizzaController(pizzaBusiness)

// Criar um pedido
pizzaRouter.post("/createOrder", pizzaController.createOrder)

// Criar uma nova pizza no menu
pizzaRouter.post("/createPizza", pizzaController.createPizza)

// Menu de pizzas
pizzaRouter.get("/pizzas", pizzaController.getMenu)

// Detalhes de um pedido individual
pizzaRouter.get("/orders/:id", pizzaController.getOrderById)

// Lista de todos os pedidos
pizzaRouter.get("/allOrders", pizzaController.getAllOrders)