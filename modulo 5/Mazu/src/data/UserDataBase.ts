import { AuthenticationData } from "../controllers/interfaces/Authenticator"
import { LoginInterfaceDTO } from "../controllers/interfaces/LoginInterfaceDTO"
import { PetInterfaceDTO } from "../controllers/interfaces/PetInterfaceDTO"
import { SignUpInterfaceDTO } from "../controllers/interfaces/SignUpInterfaceDTO"
import { BaseDatabase } from "./BaseDataBase"


export class UserDataBase extends BaseDatabase {
    insertUser = async (input: SignUpInterfaceDTO, id:string)=>{
        const {name,email,password,role} = input
        try {

            await this.getConnection()
            .insert({
                id,
                name,
                email,
                password,
                role
            }).into("Dog_Walking_Users")

        } catch (error: any) {
            throw new Error(error.sqlMessage);  
        }
    }

    InsertUserPets = async(input: PetInterfaceDTO,petID: string,tokenData: AuthenticationData)=>{
        try {
            const {petName,breed,details} = input
            await this.getConnection()
            .insert({
                petID,
                userID: tokenData.id,
                petName,
                breed,
                details
            }).into("Dog_Walking_UserPets")

        } catch (error: any) {
            throw new Error(error.sqlMessage);  
        }
    }

    getUserByEmail = async(email: string)=>{
        try {

            const user = await this.getConnection()
            .select("*")
            .from("Dog_Walking_Users")
            .where({ email })

            return user && user[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage);  
        }
    }
}