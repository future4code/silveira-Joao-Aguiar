// IMPORTS
import express, { Request, Response } from 'express';
import cors from 'cors';
import knex from "knex";
import dotenv from "dotenv";

// SETTINGS
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

// CODE 

const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movies
    `)
  
      return result[0]
  }

app.get("/movies", async (req: Request, res: Response)=>{
    try {
        res.status(200).send( await getAllMovies())
    } catch (err: any) {
        res.status(500).end()
    }
})

// RESPOSTAS
/* 
EXERCÍCIO 1 (1:N)

a) É o campo que estabelece o relacionamento entre duas tabelas

b) CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating VALUES
("84673","Muito bom!!!", 7.5,"003");

SELECT * FROM Rating

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`silveira-21814397-joao-aguiar`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0.140 sec
    R: O DB não deixa pois nao existe o filme com esse id na tabela que esta sendo relacionada

d) ALTER TABLE Movies DROP COLUMN avaliacao;

e) Error Code: 1054. Unknown column 'avaliacao' in 'where clause'
    R: como não há mais uma coluna 'avaliacao', o DB não acha o item na tabela para ser deletado

EXERCÍCIO 2 (N:M)

a) Esta tabela irá receber numa coluna o id do ator e na outra coluna o id do filme em que o ator participa


b) CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast VALUES
("002","005"),
("003","002"),
("004","003"),
("002","001"),
("1","004"),
("003","002");

SELECT * FROM MovieCast


c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`silveira-21814397-joao-aguiar`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
    R: COmo o Ator nao existe o DB não consegue fazer a relação do dados

d) Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. Cannot use range access on index 'PRIMARY' due to type or collation conversion on field 'id'
 To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.	0.140 sec
    R: Como estamos com o "Safe Mode" ativado, então ele não permite que eu delete um item que esteja sendo usado em uma tabela ralacioal

EXERCÍCIO 3 (INNER JOIN)

a)


b)


c)


d)
*/