import { app } from "./app";
import { PostController } from "./PostController";
import { UserController } from "./UserController";

const userController = new UserController()
const postController = new PostController()

app.post("/user/signup", userController.signup)

app.post("/user/login", userController.login)

app.post("/post", postController.post)