import { AuthenticationData } from "../controllers/interfaces/Authenticator"
import { DogWalking } from "../controllers/interfaces/DogWalking"
import { BaseDatabase } from "./BaseDataBase"


export class DogWalkingDataBase extends BaseDatabase {
    insertNewWalk = async (input: DogWalking,price: number,pets: number, tokenData: AuthenticationData)=>{
        const {walkDate,duration} = input
        await BaseDatabase.connection("Dog_Walking")
        .insert({
            userID: tokenData.id,
            walkDate,
            price,
            duration,
            pets
        })
    }

    updateLocation = async (tokenData: AuthenticationData , latitude:string, longitude:string)=>{
        await BaseDatabase.connection("Dog_Walking")
        .update({
            latitude,
            longitude
        })
        .where({id: tokenData.id})
    }

    startWalk = async (walkID: number ,time: string)=>{
        await BaseDatabase.connection("Dog_Walking")
        .where({walkID})
        .update({walkStart: time,status: "EM ANDAMENTO"})
        .then(data=>{
            console.log(data)
        })
        
    }

    endWalk = async (walkID: number ,time: string)=>{
        await BaseDatabase.connection("Dog_Walking")
        .where({walkID})
        .update({walkEnd: time,status: "FINALIZADO"})
    }
    
}