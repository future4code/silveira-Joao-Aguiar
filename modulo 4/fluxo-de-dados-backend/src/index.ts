// IMPORTS........................................................................................................
import express, { Request, Response } from "express";
import cors from "cors";
import { listaProdutos } from "./data";

// SETTINGS.......................................................................................................
const app = express()
const PORT = 3003
app.use(express.json())
app.use(cors())
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

// CODE...........................................................................................................

// Exercicio 1
app.get('/teste',(req: Request, res: Response)=>{
    res.send('Está funcionando')
})

// Exercicio 2
// Arquivo data.ts criado!

// Exercicio 3
app.post('/add-produto',(req: Request, res: Response)=>{
    try{

        const nomeNovoProduto = req.body.name
        const precoNovoProduto = req.body.price

        if(!nomeNovoProduto || !precoNovoProduto){
            throw new Error("err1")
        }
        if(typeof nomeNovoProduto != "string"){
            throw new Error("err2")
        }
        if(isNaN(precoNovoProduto)){
            throw new Error("err3")
        }
        if(precoNovoProduto <= 0){
            throw new Error("err4")
        }

        const novoProduto = {
        id: String(Date.now()),
        name: nomeNovoProduto,
        price: precoNovoProduto
        }
        listaProdutos.push(novoProduto)

        res.status(200).send(listaProdutos)

    }catch(err: any){
        res.status(400).end(err)
        console.log(err.message)
    }
})

// Exercicio 4
app.get('/produtos',(req: Request, res: Response)=>{
    res.send(listaProdutos)
})

// Exercicio 5
app.put('/mudar-preco/:id', (req: Request, res: Response)=>{
    try{
        const novoPreco = req.body.newPrice

        if(!novoPreco){
            throw new Error()
        }

        if(isNaN(novoPreco)){
            throw new Error()
        }

        if(novoPreco <= 0){
            throw new Error()
        }

        const idProduto = req.params.id

        const produtoAtual = listaProdutos.filter(item=>{
        return item.id === idProduto
        })

        if(produtoAtual[0] === undefined){
            throw new Error()
        }

        produtoAtual[0].price = novoPreco

        res.status(200).send(produtoAtual)

    }catch(err: any){
        res.status(400).end()
    }
})

// Exercicio 6
app.delete('/delete-produto/:id',(req: Request, res: Response)=>{
    try {
        const idProduto = req.params.id
        let checkedId = false
        listaProdutos.forEach((item,i)=>{
            if(item.id === idProduto){
            listaProdutos.splice(i,1)
            checkedId = true
            }
        })

        if(checkedId = false){
            throw new Error()
        }

        res.status(200).send(listaProdutos)
        
    } catch (err: any) {
        res.status(400).end()
    }
})

// Exercicio 7
// Feito no Ex 3

// Exercicio 8
// Feito no Ex 5

// Exercicio 9
// Feito no Ex 6