import { Injectable } from '@angular/core';

@Injectable()
export class Constants{   
   public static readonly API_ROOT_URL = "https://api.spoonacular.com";
   public static readonly API_KEY = "1eb5f85b86d74deea92ba2cfacb09a6b";
   public static readonly API_RECIPE_ENDPOINT = "/recipes";
   public static readonly API_RECIPE_RANDOM = "/random";
   public static readonly API_RECIPE_SEARCH = "/findByIngredients";
   
}