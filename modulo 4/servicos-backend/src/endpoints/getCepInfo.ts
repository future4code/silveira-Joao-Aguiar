import {Request , Response} from 'express'
import axios from 'axios'
import { Info } from '../types'

export const getCepInfo = async (req: Request, res: Response) =>{
    try{
        const cep = req.params.cep
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Info = {
            Logradouro: result.data.logradouro,
            Bairro: result.data.bairro,
            Cidade: result.data.localidade,
            Estado: result.data.uf
        }
        res.send(address)
    }
    catch (err: any){
        res.status(400).send(err.message)
    }
}