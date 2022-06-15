
import { AddressInfo } from "net";
import { connection } from './data/connection';
import { app } from "./app";
import { getCepInfo } from "./endpoints/getCepInfo";
import { createUserAddress } from "./endpoints/createUserAddress";
// CODE............................................................................................................

app.get('/endereco/:cep', getCepInfo)

app.post('/users',createUserAddress)

// SERVER..........................................................................................................
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});