//imports...............................................................................................
import express, { Request, Response } from 'express'
import cors from 'cors'
import { getMaxListeners } from 'process'
//settings...............................................................................................
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server running on Port ${PORT}`)
})
//code...................................................................................................
//Exercicio 1
app.get("/mensagem", (req: Request, res: Response) => {          
    res.status(200).send('Meu primeiro endpoint')
})

//Exercicio 2
type User = {
    id: number | string,
    name: string,
    email: string,
    Phone: string,
    website: string,
}

//Exercicio 3
let usersList: User[] = [
    {
        id: 1,
        name: 'João',
        email: 'joao@gmail.com',
        Phone: '(22)99933-4455',
        website: 'www.joaoDev.com.br',
    },
    {
        id: 2,
        name: 'Ediane',
        email: 'Edi@gmail.com',
        Phone: '(22)99977-6622',
        website: 'www.EdiDev.com.br',
    },
    {
        id: 3,
        name: 'Pedro',
        email: 'Pedro@gmail.com',
        Phone: '(22)99844-9900',
        website: 'www.PedroDev.com.br',
    }
]

//Exercicio 4
app.get("/users", (req: Request, res: Response) => {          
    res.send(usersList)
})

//Exercicio 5
type Posts = {
    userId: string | number,
    id: string | number,
    title: string,
    body: string
}