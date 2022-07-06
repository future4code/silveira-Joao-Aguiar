export enum POST_TYPE {
    NORMAL = "NORMAL",
    EVENT = "EVENT"
}

export class PostModel {
    constructor(
        private creatorId: string,
        private image: string,
        private description: string,
        private date: string,
        private type: POST_TYPE,
    ){}

    public getUserInfo(){
        return {
            creatorId: this.creatorId,
            image: this.image,
            description: this.description,
            date: this.date,
            type: this.type
        }
    }

    static toUserModel(data: any): PostModel{
        return new PostModel(data.creatorId,data.image,data.description,data.date,data.type)
    }
}