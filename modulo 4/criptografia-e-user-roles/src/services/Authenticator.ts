import * as jwt from "jsonwebtoken"
import { AutenticatorData } from "../types";

export class Authenticator {
    public generateToken(payload: AutenticatorData){
        return jwt.sign(
            payload,
            "SuperSenha",
            {
                expiresIn: "5h"
            }
        )
    }

   public getTokenData(token: string){
        const tokenData = jwt.verify(token,"SuperSenha")
        return tokenData
    }
}