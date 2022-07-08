import { PostModel } from "../model/PostModel";
import { BaseDatabase } from "./BaseDataBase";


export class PostDataBase extends BaseDatabase {
    public async insertPost(post: PostModel){
        try {
            await this.getConnection()
            .insert(post)
            .into("Labook_posts")

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    public async getPostbyId(postId: number){
        try {
            const post = await this.getConnection()
            .select("*")
            .from("Labook_posts")
            .where({id: postId})

            return post[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getAllPosts(){
        try {
            const posts = await this.getConnection()
            .select("*")
            .from("Labook_posts")
        
            return posts

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }

    }
}