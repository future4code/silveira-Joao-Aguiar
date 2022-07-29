import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";
import { DogWalking } from "./interfaces/DogWalking";

export class DogWalkingController {
    constructor(
        private dogBusiness: DogWalkingBusiness
    ){}

    createWalk = async (req: Request, res: Response) => {
        try {

            const { petNames, walkDate,walkStart,duration } = req.body
            const token = String(req.headers.auth)

            const input: DogWalking = {
                petNames,
                walkDate,
                walkStart,
                duration
            }

            await this.dogBusiness.createWalk(input, token)
            res.status(201).send({message: "Passeio criado com sucesso!"})

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message)
        }
    }

    updateLocation = async (req: Request, res: Response) => {

    }

    startWalk = async (req: Request, res: Response) => {

    }

    endWalk = async (req: Request, res: Response) => {

    }
}