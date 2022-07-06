import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { postInputDTO } from "../model/types/PostInputDTO";


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
}