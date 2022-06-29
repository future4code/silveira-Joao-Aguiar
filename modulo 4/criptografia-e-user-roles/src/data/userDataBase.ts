import { createConnection } from "net";
import { UserModel } from "../model/userModel";
import { BaseDatabase } from "./baseDataBase";


export class userDataBase extends BaseDatabase {
        public async insertUser(user: UserModel) {
                try {
                        const { name, nickname, email, password } = user.getUserInfo()

                        await this.getConnection()
                                .insert({ name, nickname, email, password })
                                .into("User_bcrypt")

                } catch (error: any) {
                        console.log(error.sqlMessage)
                        throw new Error("Erro ao criar usuário")
                }
        }
}