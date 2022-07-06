import { PostModel } from "../model/PostModel";
import { BaseDatabase } from "./BaseDataBase";


export class PostDataBase extends BaseDatabase {
    public async insertUser(post: PostModel){
        try {
            await this.getConnection()
            .insert(post)
            .into("Labook_posts")

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }

    }
}