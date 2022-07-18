
export class UserModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
    ){}

    public getUserInfo(){
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
        }
    }

    static toUserModel(data: any): UserModel{
        return new UserModel(data.id,data.name,data.email,data.password)
    }
}