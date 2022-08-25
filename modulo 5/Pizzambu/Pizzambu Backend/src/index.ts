import { app } from "./app";
import { pizzaRouter } from "./controller/routes/PizzaRoutes";




app.use("/pizza", pizzaRouter)