import * as bcrypt from "bcrypt"

export class HashManager {
    public async hash(text: string): Promise<string>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(text,salt)
    }

    public async comparePasswords(text: string, hash: string): Promise<Boolean> {
        return bcrypt.compare(text,hash)
    }
}