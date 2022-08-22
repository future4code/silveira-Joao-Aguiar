import { AuthenticationData } from "../../controllers/interfaces/Authenticator";

import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class Authenticator {
    public generateToken = (payload: AuthenticationData): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: process.env.AUTH_EXPIRES_IN }
        )

        return token;
    };

    public getTokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any;
        return { 
            id: payload.id,
            role: payload.role
         };
    };
};