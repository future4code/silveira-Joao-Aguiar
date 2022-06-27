import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { v4 } from "uuid"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

// Code..................................................................................................................

// Exercicio 1

// a) sim, pois nao precisamos nos limitar a apenas os numeros,
//  mas também podemos contar com letras e simbolos, 
//  tornando o id ainda mais único e mais seguro

// b)

export function generateV4Id(): string {
    return v4();
  }

  //Exercicio 2

  //a) O código acima cria um novo Usuário em uma tabela de usuários no banco de dados

  //b) CREATE TABLE users_autentication_intro (  
  //     id VARCHAR(255) UNIQUE NOT NULL,
  //     email VARCHAR(255) UNIQUE NOT NULL,
  //     password VARCHAR(255)
  //  );

  //c)
  const userTableName = "users_autentication_intro";
  const createUser = async (id: string, email: string, password: string) => {
    await connection
      .insert({
        id,
        email,
        password,
      })
      .into(userTableName);
  };

// Exercicio 3
import * as jwt from "jsonwebtoken";


  // a) Setta o dado vindo do .env como string
  // b) 
  const expiresIn = "1min";
 function generateToken (input: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

type AuthenticationData = {
  id: string;
}

// Exercicio 4

// a)

app.post("/user/entrar", async (req: Request, res: Response) => {
    try {
//b)....................................................................................
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
//c)....................................................................................
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const id = generateV4Id();
  
    
      await createUser(id, userData.email, userData.password);
  
      const token = generateToken({
        id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

//Exercicio 5

//a)
const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });
 
    return result[0];
   }


 

// Server..................................................................................................................
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
