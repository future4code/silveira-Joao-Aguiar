import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import cors from "cors"
import axios from 'axios'
import { baseUrl } from "./BaseUrl";
import { AddressInfo } from "net";

// SETTINGS
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

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });

// CODE
type user = {
	id: string;
	name: string;
	email: string;
}


//EX1

//a) GET
//b) Promise<any[]>
//c)
const getInscritos = async (): Promise<user[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res: any) => {
        return {
          id: res.id,
          name: res.name,
          email: res.email
        };
      });
  };

//EX2

//a) com arrow function fica assim: const getSubscribers = async (): Promise<user[]> => {}
//   função normal fica assim: async function  getSubscribers  Promise<any[]> {}
//b) Feito

//EX3

//a) Não
//b) 
//c) Feito

//EX4

//a) Promise<void>
//b) 
const criarNoticia = async (title: string,content: string,date: number): Promise<void> =>{
    await axios.put(`${baseUrl}/news`, {
        title: title,
        content: content, 
        date: date
      });
}

//EX5
// const enviarNotificacoes = async (
//   users: user[],
//   message: string
// ): Promise<void> => {

//   try {
// 		for (const user of users) {
// 	    await axios.post(`${baseUrl}/notifications`, {
// 	      subscriberId: user.id,
// 	      message
// 	    });
// 	  }

// 	  console.log("Notificações enviadas com sucesso");
// 	} catch {
// 		console.log("Erro ao enviar notificações");
// 	}
// };

//EX6

//a) Promisse.all recebe um array de promisses e retorna outra promisse para resolver um array de respostas
//b) Aumenta bastante a performace do código
//c) 
const enviarNotificacoes = async (
  users: user[],
  message: string
): Promise<void> => {

	try {
	  const promises = users.map(user =>{
	    return axios.post(`${baseUrl}/notifications`, {
	      subscriberId: user.id,
	      message: message,
	    })
	  })
	
	  await Promise.all(promises);

	} catch {
		console.log("Error");
	}
};


const main = async ()=>{
    try {
        const subscribers = await getInscritos()
    } catch (err: any) {
        
    }
}

main()