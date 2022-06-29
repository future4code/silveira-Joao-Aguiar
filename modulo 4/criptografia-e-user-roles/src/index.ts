import { v4 } from "uuid";
import { app } from "./app";
import { signup } from "./endpoints/signUp";
import { Authenticator } from "./services/Authenticator";
import { AutenticatorData } from "./types";

const authenticator = new Authenticator()

const payload: AutenticatorData = {
    id: v4()
}

console.log(authenticator.generateToken(payload))


app.post("/users", signup)