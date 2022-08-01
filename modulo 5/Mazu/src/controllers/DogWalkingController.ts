import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";
import { DogWalking } from "./interfaces/DogWalking";
import { LocationInterfaceDTO } from "./interfaces/LocationInterfaceDTO";

export class DogWalkingController {
    constructor(
        private dogBusiness: DogWalkingBusiness
    ){}

    createWalk = async (req: Request, res: Response) => {
        try {

            const { petNames, walkDate,duration } = req.body
            const token = String(req.headers.auth)

            const input: DogWalking = {
                petNames,
                walkDate,
                duration
            }

            await this.dogBusiness.createWalk(input, token)
            res.status(201).send({message: "Passeio criado com sucesso!"})

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message)
        }
    }

    updateLocation = async (req: Request, res: Response) => {
        try {
            
            const {walkID,latitude,longitude} = req.body
            const token = String(req.headers.auth)

            const input: LocationInterfaceDTO = {
                walkID,
                latitude,
                longitude
            }

            await this.dogBusiness.updateLocation(input,token)

            res.status(200).send({message: "Localização atualizada"})

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message)
        }
        
    }

    getWalks = async (req: Request, res: Response) => {
        try {

        const token = String(req.headers.auth)
        const walks = await this.dogBusiness.getWalks(token)
        res.status(200).send({message: "Passeios encontrados com sucesso", walks})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message)
        }
    }

    getUserWalks = async (req: Request, res: Response) => {
        try {
            
        const token = String(req.headers.auth)
        const walks = await this.dogBusiness.getUserWalks(token)
        res.status(200).send({message: "Passeios encontrados com sucesso", walks})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message)
        }
    }


    startWalk = async (req: Request, res: Response) => {
        try {
            const {time,walkID} = req.body
            const token = String(req.headers.auth)
            await this.dogBusiness.startWalk(token,walkID,time)
            res.status(200).send({message: "Passeio iniciado"})
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message)
        }
    }

    endWalk = async (req: Request, res: Response) => {
        try {
            const {time,walkID} = req.body
            const token = String(req.headers.auth)
            await this.dogBusiness.endWalk(token,walkID,time)
            res.status(200).send({message: "Passeio finalizado"})
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message)
        }
    }
}