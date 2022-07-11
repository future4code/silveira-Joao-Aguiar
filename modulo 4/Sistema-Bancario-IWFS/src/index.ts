// IMPORTS..............................................................................................................
import express, { Request, Response } from 'express'
import cors from 'cors'
import { User, users } from './data'

// SETTINGS.............................................................................................................
const app = express()
const PORT = 3003
const DATE = new Date()
const stringfyDate = JSON.stringify(DATE)
app.use(express.json())
app.use(cors())
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})

// CODE.................................................................................................................

app.get('/users', (req: Request, res: Response) => {
    res.send(users)
})

app.get('/users/balance', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const {name,cpf} = req.query
        if(!name || !cpf){
            errorCode = 422
            throw new Error("Faltando nome ou CPF");
        }
        if(isNaN(Number(cpf))){
            errorCode = 422
            throw new Error("Verifique se o CPF está sendo passado corretamente");          
        }
        const currUser = users.filter(user=>{
            return ((user.name === name) && (user.cpf === Number(cpf)))
        })
        if(currUser[0] === undefined){
            errorCode = 404
            throw new Error("Usuáruo não encontrado");
        }

        res.status(200).send(String(currUser[0].balance))
        
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
    
})

app.post('/users', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const { name, cpf, date } = req.body

        if (!name || !cpf || !date) {
            errorCode = 422
            throw new Error('Por favor verifique se todos os campos estão preenchidos')
        }

        if (isNaN(cpf)) {
            errorCode = 422
            throw new Error('Verifique se o CPF está sendo passado corretamente');
        }

        users.forEach(user => {
            if (cpf === user.cpf) {
                errorCode = 409
                throw new Error('Este CPF ja está cadastrado no sistema')
            }
        })

        const userBornYear: string = date.slice(6,10)
        const currYear: string = String(DATE).slice(11,15)
        const userAge: number = Number(currYear) - Number(userBornYear)
        if(userAge < 18){
            errorCode = 451
            throw new Error('O usuário precisa ser maior de 18 anos para se cadastrar no sistema')
        }

        const newUser: User = {
            name: String(name),
            cpf,
            date: String(date),
            balance: 0,
            extract: []
        }

        users.push(newUser)
        res.status(201).send("Usuário cadastrado com sucesso!")

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

app.post('/users/:cpf', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const {cpf} = req.params
        let {description,date,value} = req.body

        if(!description || !value){
            errorCode = 422
            throw new Error('Por favor verifique se todos os campos estão preenchidos')
        }

        if(!date){
            date = `${stringfyDate.slice(9,11)}/${stringfyDate.slice(6,8)}/${stringfyDate.slice(1,5)}`
        }

        if (isNaN(value)) {
            errorCode = 422
            throw new Error('Verifique se o Valor está sendo passado corretamente');
        }

        const newPayment = {
            description,
            date,
            value
        }

        const currUser = users.map(user=>{
             if(user.cpf === Number(cpf)){
                 if(value > user.balance){
                     errorCode = 401
                     throw new Error("Saldo insuficiente!");      
                 }
                 else{
                    user.extract.push(newPayment)
                    user.balance -= value
                 }
                 return user
             }
        })

        if(currUser[0] === undefined){
            errorCode = 404
            throw new Error("Usuáruo não encontrado");
        }

        
        res.status(201).send("Pagamento efetuado com sucesso")

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

app.put('/users', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const {name,cpf,value} = req.body
        if(!name || !cpf || !value){
            errorCode = 422
            throw new Error('Por favor verifique se todos os campos estão preenchidos')
        }
        if (isNaN(cpf)) {
            errorCode = 422
            throw new Error('Verifique se o CPF está sendo passado corretamente');
        }
        if (isNaN(value)) {
            errorCode = 422
            throw new Error('Verifique se o Valor está sendo passado corretamente');
        }

        const currUser = users.filter(user=>{
            return ((user.name === name) && (user.cpf === Number(cpf)))
        })

        if(currUser[0] === undefined){
            errorCode = 404
            throw new Error("Usuáruo não encontrado");
        }

        const currBalance: number = currUser[0].balance
        const newBalance: number = currBalance + value
        users.map(user=>{
            if((user.name === name) && (user.cpf === Number(cpf))){
                user.balance = newBalance
            }
        })
        res.status(200).send(String(newBalance))
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

app.put('/users/transfer', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const {nameUser,cpfUser,value ,nameDestiny,cpfDestiny} = req.body
        if(!nameUser || !cpfUser || !value || !nameDestiny || !cpfDestiny){
            errorCode = 422
            throw new Error('Por favor verifique se todos os campos estão preenchidos')
        }
        if (isNaN(cpfUser) || isNaN(cpfDestiny)) {
            errorCode = 422
            throw new Error('Verifique se o CPF do usuário ou do Destinatário estão sendo passados corretamente');
        }
        if (isNaN(value)) {
            errorCode = 422
            throw new Error('Verifique se o Valor está sendo passado corretamente');
        }

        const currUser = users.map(user=>{
            if((user.name === nameUser) && (user.cpf === Number(cpfUser))){
                if(value > user.balance){
                    errorCode = 401
                    throw new Error("Saldo insuficiente!")
                }else{
                    user.balance -= value
                }
                return user
            }
        })

        const destinyUser = users.map(user=>{
            if(((user.name === nameDestiny) && (user.cpf === Number(cpfDestiny)))){
                user.balance += value
                return user
            }
        })

        if(currUser[0] == undefined){
            errorCode = 404
            throw new Error("Usuáruo não encontrado");
        }

        if(destinyUser[1] == undefined){
            errorCode = 404
            throw new Error("Destinatário não encontrado");
        }

        
        res.status(200).send("Transferência feita com sucesso")
    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})







