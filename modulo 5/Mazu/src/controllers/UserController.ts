import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SignUpInterfaceDTO } from "./interfaces/SignUpInterfaceDTO";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ){}
    
    signup = async (req: Request, res: Response)=> {
        try {
        const {name,email,password,role} = req.body

        const input: SignUpInterfaceDTO = {
            name,
            email,
            password,
            role
        }

        await this.userBusiness.signup(input)
        res.status(201).send("Usuário criado com sucesso")

        } catch (error: any) {
            res.status(error.statusCode).send(error.message)
        }

        
    }

    login = (req: Request, res: Response)=> {
        try {
            
        } catch (error:any) {
            
        }
    }
}