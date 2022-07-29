import { LoginInterfaceDTO } from "../controllers/interfaces/LoginInterfaceDTO";
import { PetInterfaceDTO } from "../controllers/interfaces/PetInterfaceDTO";
import { SignUpInterfaceDTO } from "../controllers/interfaces/SignUpInterfaceDTO";
import { UserDataBase } from "../data/UserDataBase";
import { CustomError } from "./errors/CustomError";
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
        let {name,email,password,role} = input

        // Validações
        if(!name || !email || !password || !role ){
            throw new CustomError(400,"Faltando informação");
        }

        const user = await this.userDataBase.getUserByEmail(email)
        if(user){
            throw new CustomError(401,"Este usuário já existe");
        }

        //hashear o password
        const hashedPassword = await this.hashManager.generateHash(password)
        input.password = hashedPassword

        //gerar id
        const id = this.idGenarator.generateId()

        //gerar token
        const token = this.authenticator.generateToken({id,role})

        //inserir no banco de dados
        await this.userDataBase.insertUser(input,id)
        return token
    }

    login = async (input: LoginInterfaceDTO)=>{
        const {email,password} = input

        // Validações
        if(!email || !password){
            throw new CustomError(400,"Faltando informação");
        }

        // pegar usuário
        const user = await this.userDataBase.getUserByEmail(email)
        if(!user){
            throw new CustomError(404,"Usuário não encontrado");
        }

        const checkPassword = await this.hashManager.compareHash(password,user.password)

        if(!checkPassword){
            throw new CustomError(401,"Senha incorreta");
        }

        //gerar token
        const token = this.authenticator.generateToken({id: user.id,role: user.role})
        return token
    }

    signupPets = async (input: PetInterfaceDTO,token: string)=>{
        const {petName,breed,details} = input

        // Validações
        if(!petName || !breed){
            throw new CustomError(400,"Faltando informação");
        }

        if(!token){
            throw new CustomError(401,"Acesso não autorizado");
        }

        // pegar token data
        const tokenData = this.authenticator.getTokenData(token)

        // gerar petID
        const petID = this.idGenarator.generateId()

        //cadastrar pet
        await this.userDataBase.InsertUserPets(input,petID,tokenData)

    }
}