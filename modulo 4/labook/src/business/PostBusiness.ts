import { PostDataBase } from "../data/PostDataBase";
import { PostModel } from "../model/PostModel";
import { postInputDTO } from "../model/types/postInputDTO";
import { Authenticator } from "../services/Authenticator";

export class PostBusiness {
    public async post(input: postInputDTO,token: string){

        //validações
        const {image,description,type} = input
        if(!token){
            throw new Error("Erro de Autenticação");
        }
        const creatorId = new Authenticator().getTokenData(token)

        if(!image || !description || !type){
            throw new
             Error("Campos inválidos");
        }

        //definir data de criação
        const date = new Date(Date.now()).toISOString()
        const today = date.slice(0,10)

        //criar do post
        const post = new PostModel(
            creatorId.id,
            image,
            description,
            today,
            type
        )

        //criar post no banco
        await new PostDataBase().insertPost(post)
    }

    public async getPost(postId: number, token: string) {
        // validações
        if(!postId){
            throw new Error("Faltando uma id");
        }

        if(!token){
            throw new Error("Não autorizado"); 
        }

        // pegar post no banco
        const post = await new PostDataBase().getPostbyId(postId)
        return post
    }

    public async getAllPosts(token: string) {
        // validações
        
        if(!token){
            throw new Error("Não autorizado"); 
        }

        // pegar post no banco
        const posts = await new PostDataBase().getAllPosts()
        return posts
    }
}