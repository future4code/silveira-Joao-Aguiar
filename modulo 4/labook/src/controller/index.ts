import { app } from "./app";
import { PostController } from "./PostController";
import { UserController } from "./UserController";

const userController = new UserController()
const postController = new PostController()

app.get("/post/:id", postController.getPost)

app.get("/feed", postController.getAllPosts)

app.post("/user/signup", userController.signup)

app.post("/user/login", userController.login)

app.post("/follow/:id", userController.follow)

app.delete("/unfollow/:id", userController.unfollow)

app.post("/post", postController.post)