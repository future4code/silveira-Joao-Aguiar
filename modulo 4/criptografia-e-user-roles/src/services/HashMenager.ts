import * as bcrypt from "bcryptjs";

export class HashMenager {
    public async generateHash(text: string){
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(text, salt);
        return result;
      }

    public async compareHash(text:string,hash: string): Promise<boolean>{
        return bcrypt.compare(text, hash);
      }
}