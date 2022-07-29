import express from "express"
import { Authenticator } from "../../business/services/Authenticator"
import { HashManager } from "../../business/services/HashManager"
import { IdGenerator } from "../../business/services/IdGenerator"
import { UserBusiness } from "../../business/UserBusiness"
import { UserDataBase } from "../../data/UserDataBase"
import { UserController } from "../UserController"

export const userRoute = express.Router()

const userBusiness = new UserBusiness(
    new Authenticator(),
    new HashManager(),
    new IdGenerator(),
    new UserDataBase()
)

const userController = new UserController(userBusiness)

userRoute.post("/signup", userController.signup)

userRoute.post("/login", userController.login)

userRoute.post("/signupPets", userController.signupPets)
