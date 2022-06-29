export class UserModel {
    constructor(
        private name: string,
        private nickname: string,
        private email: string,
        private password: string
    ){}

    public getUserInfo(){
        return{
            name: this.name,
            nickname: this.nickname,
            email: this.email,
            password: this.password
        }
    }
}