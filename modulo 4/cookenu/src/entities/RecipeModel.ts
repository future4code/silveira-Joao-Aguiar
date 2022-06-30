
export class RecipeModel {
    constructor(
        private creatorId: string,
        private date: string,
        private title: string,
        private description: string
    ){}

    public getRecipeInfo(){
        return {
            creatorId: this.creatorId,
            date: this.date,
            title: this.title,
            description: this.description   
        }
    }

    static toRecipeModel(data: any): RecipeModel{
        return new RecipeModel(data.creatorId,data.date,data.title,data.description)
    }
}