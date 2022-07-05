import { UserDataBase } from "../data/UserDataBase";
import { loginInputDTO } from "../model/types/loginInputDTO";
import { signupInputDTO } from "../model/types/signupInputDTO";
import { UserModel } from "../model/UserModel";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

export class UserBusiness {
    public async signup(input: signupInputDTO){

        //validação
        const {name,email,password} = input

        if(!name || !email || !password){
            throw new Error("Campos inválidos");

        }

        //conferir se usuário existe
        const checkUser = await new UserDataBase().findUsserByEmail(email)
        if(checkUser){
            throw new Error("Usuáro já cadastrado");

        }
        //criar um id para o usuário
        const id = new IdGenerator().generate()

        //hashear o password
        const hashPassword = await new HashManager().hash(password)

        //criar o user no banco
        const user = new UserModel(
            id,
            name,
            email,
            hashPassword
        )

        await new UserDataBase().insertUser(user)

        // criar o token
        const token = new Authenticator().generateToken({id})
        return token
    }

    public async login(input: loginInputDTO){
        
        //validação
        //encontrar usuário pelo email
        //

    }
}