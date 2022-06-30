import { app } from "./app";
import { UserController } from "./endpoints/UserColtroller";

const userController = new UserController()

app.get("/users/profile" , userController.getCurrentUserProfile)

app.get("/users/:id" , userController.getOtherUserProfile)

app.get("/recipe/:id" , userController.getRecipeById)

app.post("/users" , userController.signup)

app.post("/users/login" , userController.login)

app.post("/recipe" , userController.createRecipe)
