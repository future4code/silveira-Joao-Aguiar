import express, { Request, Response } from 'express';
import cors from 'cors';
import { users , User} from './data';

const app = express()
const PORT = 3003
app.use(express.json())
app.use(cors())

app.listen(PORT,()=>{
console.log(`server running on http://localhost:${PORT}`)
})

//Exercício 1
//a) método Get
//b) '/users'
app.get('/users', (req: Request, res: Response)=>{
    res.send(users)
})

//Exercício 2
//a) por query params pois é mais prático em pesquisas que não sejam por seriais aleatórios como o id
//b) Utilizando o enum
app.get('/users/type', (req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const queryType = req.query.type
        if(!queryType){
            throw new Error('Verifique se a query params "type" foi passada corretamente')
        }

        const searchUsers = users.filter((user)=>{
            return queryType === user.type
        })

        if(searchUsers[0] == undefined){
            errorCode = 404
            throw new Error('Nenhum usuário encontrado')
        }
        res.status(200).send(searchUsers)
        
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

//Exercício 3
//a) Ainda o query params
//b) Feito!
app.get('/users/name', (req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const queryName = req.query.name
        if(!queryName){
            throw new Error('Verifique se a query params "name" foi passada corretamente')
        }

        const searchUsers = users.filter((user)=>{
            return queryName === user.name
        })

        if(searchUsers[0] == undefined){
            errorCode = 404
            throw new Error('Nenhum usuário encontrado')
        }
        res.status(200).send(searchUsers)
        
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

//Exercício 4
// usando o PUT deu o mesmo resultado que o POST
// Não, pois o PUT é utilizado para editar algum conteuro e naocriar um do zero 

app.post('/users',(req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const {name,email,type,age} = req.body
        if(!name || !email || !type || !age){
            errorCode = 422
            throw new Error('Está faltando informação no corpo da requisição')
        }
        if(typeof (name || email || type) != 'string'){
            errorCode = 400
            throw new Error('verifique se "name","email" ou "type" estão sendo enviados como String')
        }
        if((isNaN(age))){
            errorCode = 400
            throw new Error('verifique se "age" está sendo enviado como Number')
        }
        const newUser: User = {
            id: Date.now(),
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(201).send(users)       
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})



