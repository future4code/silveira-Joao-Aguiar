
export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
export class UserModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ){}

    public getUserInfo(){
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role
        }
    }

    static toUserModel(data: any): UserModel{
        return new UserModel(data.id,data.name,data.email,data.password,data.role)
    }
}