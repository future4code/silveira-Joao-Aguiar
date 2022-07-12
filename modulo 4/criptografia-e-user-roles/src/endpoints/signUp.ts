import { Request, Response } from "express";
import { userDataBase } from "../data/userDataBase";
import { UserModel } from "../model/userModel";
import { HashMenager } from "../services/HashMenager";

export async function signup(req: Request, res: Response) {
    try {

        const { name, nickname, email, password } = req.body
         
        if(!name || !nickname || !email || !password){
            res.statusCode = 400
            throw new Error("Faltando uma ou mais informações");
        }

        const hashMenager: HashMenager = new HashMenager()

        const encryptedPassword = hashMenager.generateHash(password)
        console.log(encryptedPassword)

        const newUser = new UserModel(name, nickname, email, password)

        await new userDataBase().insertUser(newUser)
        res.status(201).send("Usuário criado com sucesso")

    } catch (error: any) {
        res.status(res.statusCode).send(error.message)
    }

}