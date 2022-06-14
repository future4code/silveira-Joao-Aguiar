import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

// SETTINGS..................................................................................................................
dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

// CODE..................................................................................................................

 // EX1

//  a)..........................................................................................
// export default async function selectAllUsers(userName: string):Promise<any> {
//     const result = await connection.raw(`
//        SELECT *
//        FROM aula49_exercicio
//        WHERE name = ${userName}
//     `)
 
//     return result[0]
//  }

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
//        const userName = req.query.name
//        const users = await selectAllUsers(userName)
 
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No users found")
//        }
 
//        res.status(200).send(users)
       
//     } catch (error: any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }

//  b)..........................................................................................
//   export default async function selectAllUsers(userType: string):Promise<any> {
//     const result = await connection.raw(`
//        SELECT *
//        FROM aula49_exercicio
//        WHERE type = ${userType}
//     `)
     
//     return result[0]
//  }
    
// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     try {
//        const userName = req.query.name
//        const users = await selectAllUsers(userName)
     
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No users found")
//        }
     
//        res.status(200).send(users)
           
//     } catch (error: any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }

// EX2..........................................................................................
// export default async function selectAllUsers(order: string, sort: string):Promise<any> {
//     const result = await connection.raw(`
//        SELECT *
//        FROM aula49_exercicio;
//        ORDER BY ${order} OR ${sort}
//     `)
 
//     return result[0]
//  }

// export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
//     const order =  req.query.order == "type"? "type" : "email" || "name"? "name" : "email"
//     const sort =  req.query.sort == "DESC"? "DESC" : "ASC"
//     try {
//        const users = await selectAllUsers(order,sort)
 
//        if(!users.length){
//           res.statusCode = 404
//           throw new Error("No users found")
//        }
 
//        res.status(200).send(users)
       
//     } catch (error: any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }

// EX3..........................................................................................
// export default async function selectAllUsers(size: number, page: number):Promise<any> {
    //     const result = await connection.raw(`
    //        SELECT *
    //        FROM aula49_exercicio;
    //        LIMIT ${size}
    //        OFFSET ${size * (page -1)}
    //     `)
     
    //     return result[0]
    //  }
    
    // export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    //     const size =  Number(req.query.size)
    //     const page =  Number(req.query.page)
    //     try {
    //        const users = await selectAllUsers(size,page)
     
    //        if(!users.length){
    //           res.statusCode = 404
    //           throw new Error("No users found")
    //        }
     
    //        res.status(200).send(users)
           
    //     } catch (error: any) {
    //        console.log(error)
    //        res.send(error.message || error.sqlMessage)
    //     }
    //  }
// EX4..........................................................................................
export default async function selectAllUsers(order: string, sort: string,size: number, page: number):Promise<any> {
    const result = await connection.raw(`
       SELECT *
       FROM aula49_exercicio;
       ORDER BY ${order} OR ${sort}
       LIMIT ${size}
       OFFSET ${size * (page -1)}
    `)
 
    return result[0]
 }

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    const order =  req.query.order == "type"? "type" : "email" || "name"? "name" : "email"
    const sort =  req.query.sort == "DESC"? "DESC" : "ASC"
    let size =  Number(req.query.size)
    let page =  Number(req.query.page)
    try {
        if(size < 1 || isNaN(size)){
            size = 1
        }

        if(page < 1 || isNaN(page)){
            page = 1
        }
        
       const users = await selectAllUsers(order,sort,size,page)
        
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

// SERVER..................................................................................................................
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});