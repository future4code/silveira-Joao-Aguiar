import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInterfaceDTO } from "./interfaces/LoginInterfaceDTO";
import { PetInterfaceDTO } from "./interfaces/PetInterfaceDTO";
import { SignUpInterfaceDTO } from "./interfaces/SignUpInterfaceDTO";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ){}
    
    signup = async (req: Request, res: Response)=> {
        try {
        const {name,email,password,role,city,district,number} = req.body

        const input: SignUpInterfaceDTO = {
            name,
            email,
            city,
            district,
            number,
            password,
            role
        }

        const token = await this.userBusiness.signup(input)
        res.status(201).send({
            token,
            message:"Usuário criado com sucesso"
        })

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

    login = async (req: Request, res: Response)=> {
        try {

        const {name,email,password,role} = req.body

        const input: LoginInterfaceDTO = {
            email,
            password,
        }

        const token = await this.userBusiness.login(input)
        res.status(201).send({
            token,
            message:"Usuário encontrado"
        })

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

    signupPets = async (req: Request, res: Response)=>{
        try {
            const token = String(req.headers.auth)
            const {petName,breed,details} = req.body
    
            const input: PetInterfaceDTO = {
                petName,
                breed,
                details
            }
            
            await this.userBusiness.signupPets(input,token)

            res.status(201).send({
                message:`seu pet: ${petName} foi cadastrado com sucesso!`
            })
    
            } catch (error: any) {
                res.status(error.statusCode || 400).send(error.message)
            }
    }
}