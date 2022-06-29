import { UserModel } from "../entities/UserModel";
import { BaseDatabase } from "./baseDataBase";

export class UserDataBase extends BaseDatabase {

    public async insertUser(User: UserModel){
        try {
            const {id,name,email,password,role} = User.getUserInfo()
            await this.getConnection()
            .insert({
                id,name,email,password,role
            }).into("Cookenu_users")

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async findUserByEmail(email:string): Promise<UserModel | undefined>{
       try {
        const user = await this.getConnection()
        .select('*')
        .from("Cookenu_users")
        .where({
            email
        })

        return user[0] && UserModel.toUserModel(user[0]);
               
       } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);      
       }
    }
}