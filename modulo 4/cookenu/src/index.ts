import { app } from "./app";
import { UserController } from "./endpoints/UserColtroller";

const userController = new UserController()

app.post("/users" , userController.signup)
app.post("/users/login" , userController.login)