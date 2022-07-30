import { AuthenticationData } from "../controllers/interfaces/Authenticator"
import { DogWalking } from "../controllers/interfaces/DogWalking"
import { DogWalkingDataBase } from "../data/DogWalkingDataBase"
import { CustomError } from "./errors/CustomError"
import { Authenticator } from "./services/Authenticator"


export class DogWalkingBusiness {
    constructor(
        private dogDataBase: DogWalkingDataBase,
        private authenticator: Authenticator
    ){}
    createWalk = async (input: DogWalking, token: string)=>{
        const {petNames,walkDate,duration} = input

        //validações
        if(!petNames || !walkDate || !duration){
            throw new CustomError(400,"faltando informações");
        }

        if(petNames[0] == undefined || petNames[0] == ""){
            throw new CustomError(400,"Necessário inserir ao menos um pet");
        }

        //pegar o tokenData
        const tokenData = this.authenticator.getTokenData(token)

        //tratar data do passeio
        const day = walkDate.slice(0,2)
        const month = walkDate.slice(3,5)
        const year = walkDate.slice(6,10)  
        const treatedDate =  `${year}-${month}-${day}`
        input.walkDate = treatedDate

        //calcular preço 
        const qtdPets = petNames.length
        let base = 25
        let extraBase = 15

        if(duration === 60){
            base = 35
            extraBase = 20
        }

        const price = base + extraBase * (qtdPets - 1)
        
        //criar passeio no banco de dados
        await this.dogDataBase.insertNewWalk(input,price,qtdPets,tokenData)

    }

    updateLocation = async ()=>{

    }

    startWalk = async (token: string, walkID: number, time: string)=>{
        if(!token || !time || !walkID){
            throw new CustomError(400,"Faltando informação");
        }

        const tokenData = await this.authenticator.getTokenData(token)

        if(tokenData.role !== "ADMIN"){
            throw new CustomError(401,"Acesso não autorizado");
        }

        await this.dogDataBase.startWalk(walkID,time)
        
    }

    endWalk = async (token: string, walkID: number, time: string)=>{
        //validação
        if(!token || !time || !walkID){
            throw new CustomError(400,"Faltando informação");
        }

        const tokenData = await this.authenticator.getTokenData(token)

        if(tokenData.role !== "ADMIN"){
            throw new CustomError(401,"Acesso não autorizado");
        }

        await this.dogDataBase.endWalk(walkID,time)
        
    }

}