import { LoginInterfaceDTO } from "../controllers/interfaces/LoginInterfaceDTO";
import { SignUpInterfaceDTO } from "../controllers/interfaces/SignUpInterfaceDTO";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";


export class UserBusiness {
    constructor(
        private authenticator: Authenticator,
        private hashManager: HashManager,
        private idGenarator: IdGenerator,
        private userDataBase: UserDataBase
    ){}

    signup = async (input: SignUpInterfaceDTO)=>{
        const {name,email,password,role} = input

        // Validações
        //hashear o password
        //gerar id
        const id = this.idGenarator.generateId()
        //gerar token

        //inserir no banco de dados
        await this.userDataBase.insertUser(input,id)
    }

    login = async (input: LoginInterfaceDTO)=>{
        const {name,email} = input
        // Validações
        // pegar usuário
        //gerar token
    }
}