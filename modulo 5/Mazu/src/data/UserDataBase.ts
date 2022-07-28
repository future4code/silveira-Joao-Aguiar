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

    InsertUserPets = async()=>{
        try {
            
        } catch (error: any) {
            
        }
    }

    getUserByEmail = async()=>{
        try {
            
        } catch (error: any) {
            
        }
    }
}