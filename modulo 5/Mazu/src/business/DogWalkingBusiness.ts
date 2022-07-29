import { DogWalking } from "../controllers/interfaces/DogWalking"
import { DogWalkingDataBase } from "../data/DogWalkingDataBase"
import { Authenticator } from "./services/Authenticator"


export class DogWalkingBusiness {
    constructor(
        private dogDataBase: DogWalkingDataBase,
        private authenticator: Authenticator
    ){}
    createWalk = async (input: DogWalking, token: string)=>{
        const {petNames,walkDate,walkStart,duration} = input
        //validações

        //pegar o tokenData
        const tokenData = this.authenticator.getTokenData(token)

        //tratar data do passeio

        //calcular preço 
        //( 30 minutos para 1 cachorro custa R$25, sendo cada cachorro adicional R$15 )
        //( 60 minutos para 1 cachorro custa R$35, sendo cada cachorro adicional R$20 )

        //calcular o tempo do serviço
        //( inicio = walkStart e fim = walkStart + duration )

        //criar passeio no banco de dados

    }

    updateLocation = async ()=>{

    }

    startWalk = async ()=>{
        
    }

    endWalk = async ()=>{
        
    }
}