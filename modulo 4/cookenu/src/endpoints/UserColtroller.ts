import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { UserModel } from "../entities/UserModel";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

export class UserController {
    public async signup(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body
            const passwordCheck = String(password)
            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            if (!name || !email || !password || !role) {
                res.statusCode = 422
                throw new Error("Uma ou mais informações faltando no cadastro")
            }

            if (passwordCheck.length < 6) {
                res.statusCode = 400
                throw new Error("A senha precisa conter no mínimo 6 caracteres");
            }

            const userDataBase = new UserDataBase()
            const user = await userDataBase.findUserByEmail(email)

            if (user) {
                res.statusCode = 404
                throw new Error("Usuário já cadastrado");
            }

            const hashManager = new HashManager()
            const hashPassword = await hashManager.hash(password)

            const newUser = new UserModel(id, name, email, hashPassword, role)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id, role })

            await new UserDataBase().insertUser(newUser)
            res.status(201).send({ message: "Usuário cadastrado com sucesso", token })

        } catch (error: any) {
            res.status(res.statusCode).send(error.message)
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 422
                throw new Error("Uma ou mais informações faltando")
            }

            const userDataBase = new UserDataBase()
            const user = await userDataBase.findUserByEmail(email)

            if (!user) {
                res.statusCode = 409
                throw new Error("Usuário não encontrado, favor realizar o cadastro");
            }

            const userInfo = user.getUserInfo()
            const hashManager = new HashManager()
            const validatePassword = await hashManager.comparePasswords(password, userInfo.password)


            if (!validatePassword) {
                res.statusCode = 401
                throw new Error("Email ou senha incorretos")
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id: userInfo.id, role: userInfo.role })

            res.status(200).send({message:"Usuário logado com sucesso",token})

        } catch (error: any) {
            res.status(res.statusCode).send(error.message)
        }
    }
}