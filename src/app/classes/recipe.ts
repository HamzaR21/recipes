export class Recipe{
    
   constructor(public id: number,
                public title: string,
                public summary: string,
                public dishTypes: []) {
    }
     public static fromJson(json: Object): Recipe {
        return new Recipe(
            json['id'],
            json['title'],
            json['summary'],
            json['dishTypes']
        );
    }
}