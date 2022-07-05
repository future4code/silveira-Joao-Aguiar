import { UserModel } from "../model/UserModel";
import { BaseDatabase } from "./BaseDataBase";


export class UserDataBase extends BaseDatabase {
    public async insertUser(user: UserModel){
        try {

            await this.getConnection()
            .insert(user)
            .into("Labook_users")

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    public async findUsserByEmail(email: string): Promise<UserModel | undefined>{
        try {
            const user = await this.getConnection()
            .select('*')
            .from("Labook_users")
            .where({email})

            return user[0] && UserModel.toUserModel(user[0])
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}