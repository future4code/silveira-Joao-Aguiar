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

    public async findUserByEmail(email: string): Promise<UserModel | undefined>{
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

    public async findUserFollows(userId: string){
        try {
            const follows = await this.getConnection()
            .select('*')
            .from("Labook_follows")
            .where({userId})

            return follows

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async insertFollow(userId: string, followId: string){
        try {
            const follows = await this.getConnection()
            .insert({
                userId,
                followId
            })
            .into("Labook_follows")

            return follows

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async unfollowProfile(userId: string, followId: string){
        try {
            const follows = await this.getConnection()
            .delete()
            .from("Labook_follows")
            .where({userId,followId})

            return follows

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}