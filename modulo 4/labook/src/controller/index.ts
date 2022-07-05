import { app } from "./app";
import { UserController } from "./UserController";

const userController = new UserController()

app.post("/user/signup", userController.signup)

app.post("/user/login", userController.login)