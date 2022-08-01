import { CustomError } from "../business/errors/CustomError"
import { AuthenticationData } from "../controllers/interfaces/Authenticator"
import { DogWalking } from "../controllers/interfaces/DogWalking"
import { LocationInterfaceDTO } from "../controllers/interfaces/LocationInterfaceDTO"
import { BaseDatabase } from "./BaseDataBase"


export class DogWalkingDataBase extends BaseDatabase {
    insertNewWalk = async (input: DogWalking,price: number,pets: number, tokenData: AuthenticationData)=>{
        try {
            
        const {walkDate,duration} = input
        await BaseDatabase.connection("Dog_Walking")
        .insert({
            userID: tokenData.id,
            walkDate,
            price,
            duration,
            pets
        })

        } catch (error: any) {
            throw new CustomError(500,error.sqlMessage); 
        }
    }

    getWalks = async ()=>{
        try {

            const walks = await BaseDatabase.connection("Dog_Walking")
            .select("*")

            return walks

        } catch (error: any) {
            throw new CustomError(500,error.sqlMessage); 
        }
    }

    getUserWalks = async (userID: string)=>{
        try {

            const walks = await BaseDatabase.connection("Dog_Walking")
            .select("*")
            .where({userID})
               
            return walks

        } catch (error: any) {
            throw new CustomError(500,error.sqlMessage); 
        }
    }

    updateLocation = async (input: LocationInterfaceDTO, walkID: number)=>{
        try {
            const {latitude,longitude} = input
            await BaseDatabase.connection("Dog_Walking")
        .where({walkID})
        .update({
            latitude,
            longitude
        })

        } catch (error: any) {
            throw new CustomError(500,error.sqlMessage); 
        }
    }

    startWalk = async (walkID: number ,time: string)=>{
        try {
            
            await BaseDatabase.connection("Dog_Walking")
        .where({walkID})
        .update({walkStart: time,status: "EM ANDAMENTO"})
        .then(data=>{
            console.log(data)
        })

        } catch (error: any) {
            throw new CustomError(500,error.sqlMessage); 
        }
        
    }

    endWalk = async (walkID: number ,time: string)=>{
        try {
            
            await BaseDatabase.connection("Dog_Walking")
        .where({walkID})
        .update({walkEnd: time,status: "FINALIZADO"})

        } catch (error: any) {
            throw new CustomError(500,error.sqlMessage); 
        }
    }
    
}