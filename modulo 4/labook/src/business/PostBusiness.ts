import { PostDataBase } from "../data/PostDataBase";
import { PostModel } from "../model/PostModel";
import { postInputDTO } from "../model/types/PostInputDTO";
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
            throw new Error("Campos inválidos");
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
        await new PostDataBase().insertUser(post)
    }
}