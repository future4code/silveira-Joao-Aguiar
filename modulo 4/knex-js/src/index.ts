// IMPORTS............................................................................................................
import express, {Request , Response} from 'express';
import cors from 'cors';
import knex from 'knex';
import dotenv from "dotenv";

// SETTINGS............................................................................................................
dotenv.config();
const app = express()
const PORT = 3003
app.use(express.json())
app.use(cors())
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})

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

// CODE............................................................................................................

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

//EX1 b)
  const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
      return result[0][0]
  }

  //EX1 c)
  const getActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE gender = '${gender}'
    `)
  
      return result[0][0]
  }

  const getAllActors = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)
  
      return result[0]
  }

  const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

//EX2 a)
  const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

//EX2 b)
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }

//EX2 c)
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };

// ENDPOINTS....................................................................................................

//EX3 a)
  app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      res.status(200).send(await getActorById(id))

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })

  //EX1 b)
  app.get("/userByName/:name", async (req: Request, res: Response) => {
    try {
      const name = req.params.name
      res.status(200).send(await getActorByName(name))

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })

  //EX3 b)
  app.get("/userByGender/", async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender
      res.status(200).send(await getActorsByGender(String(gender)))

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })

  app.get("/users", async (req: Request, res: Response) => {
    try {
      console.log(await getAllActors())
      res.status(200).send(await getAllActors())

    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })

//EX4
app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.dateOfBirth),
        req.body.salary
      );
  
      res.status(200).send();
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

//RESPOSTAS.....................................................................................................
/* 
Exercício 1
a) Vem junto com o array de objetos desejado, outro array cujo as informações a principio não são úteis para nós

b) Feito!
*/