import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { postInputDTO } from "../model/types/postInputDTO";


export class PostController {
    public async post(req: Request,res: Response){
        try {
            
            const token = String(req.headers.auth)
            const {image,description,type} = req.body
    
            const input: postInputDTO = {
                image,
                description,
                type
            }

            await new PostBusiness().post(input,token)
            res.status(201).send("Post criado com sucesso")

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public async getPost(req: Request,res: Response){
        try {
            
            const token = String(req.headers.auth)
            const postId = Number(req.params.id)

            const post = await new PostBusiness().getPost(postId,token)
            res.status(201).send(post)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public async getAllPosts(req: Request,res: Response){
        try {
            const token = String(req.headers.auth)

            const posts = await new PostBusiness().getAllPosts(token)
            res.status(201).send(posts)

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}