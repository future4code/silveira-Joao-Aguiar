import {Request , Response} from 'express'
import { connection } from '../data/connection'
import axios from 'axios'
import { getCepInfo } from './getCepInfo'

export const createUserAddress = async (req: Request, res: Response) =>{
    try{
        const {User,CEP,Numero} = req.body

        const address = await axios.get(`https://viacep.com.br/ws/${CEP}/json/`)

        await connection('users_address').insert({
        User,
        User_ID: String((Math.random() + 1).toString(36).substring(7)),
        CEP,
        Logradouro: address.data.logradouro,
        Numero,
        Complemento: address.data.complemento,
        Bairro: address.data.bairro,
        Cidade: address.data.localidade,
        Estado: address.data.uf
       })
       console.log(address.data)
        res.status(200).send("tudo certo")
    }
    catch (err: any){
        res.status(400).send(err.message)
    }
}