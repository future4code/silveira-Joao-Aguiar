//imports
import express, { Request, request, Response, response } from 'express'
import cors from 'cors'

//settings
const app = express()
const PORT = 3003
app.use(express.json())
app.use(cors())

//localhost
app.listen(PORT,()=>{
    console.log(`Server is running in http://localhost:${PORT}`)
})

//Exercicio 1
app.get('/ping',(req: Request, res: Response)=>{
    res.send('pong 🏓')
} )

//Exercicio 2
type Tasks = {
    userId: number | string,
    id: number | string,
    title: string,
    completed: boolean
}

//Exercicio 3
let tarefas: Tasks[] = [
    {
        userId: 1,
        id: 1,
        title: 'lavar louça',
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: 'varrer a casa',
        completed: true
    }
]

//Exercicio 4
app.get('/concluidos',(req: Request, res: Response)=>{
    res.send(tarefas.filter(tarefa=>{
        return tarefa.completed === true
    }))
})

app.get('/a-fazer',(req: Request, res: Response)=>{
    res.send(tarefas.filter(tarefa=>{
        return tarefa.completed === false
    }))
})

//Exercicio 5
app.post('/add-tarefa',(req: Request, res: Response)=>{
    const nomeNovaTarefa = req.body.title
    const novaTarefa: Tasks = {
        userId: 1,
        id: Date.now(),
        title: nomeNovaTarefa,
        completed: false
    }
    tarefas.push(novaTarefa)
    res.send(tarefas)
})

//Exercicio 6
app.put('/feito/:id',(req: Request, res: Response)=>{
   const idTarefa = req.params.id
   const status: boolean = req.body.completed
   tarefas.map(tarefa=>{
       if(idTarefa === String(tarefa.id)){
           tarefa.completed = status
       }
   })
   res.send(tarefas)
})

//Exercicio 7
app.delete('/delete-tarefa/:id',(req: Request, res: Response)=>{
    const idTarefa = req.params.id
    const status: boolean = req.body.completed
    tarefas.map((tarefa,i)=>{
        if(idTarefa === String(tarefa.id)){
            tarefas.splice(i,1)
        }
    })
    res.send(tarefas)
 })

//Exercicio 8