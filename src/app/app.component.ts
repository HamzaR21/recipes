import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from './config/constants';
import { Recipe } from './classes/recipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchWords:String = "apples flour sugar";
  keyWordsArray:any;

  test:string = "KO";
  randomRecipe: any;
  recipeInformation:Recipe;
  searchResults:any;

  constructor(private http: HttpClient){}

  ngOnInit() {
    // this.getRandomRecipe();

    
  }

  // Get Recipe Details:
  getRecipe(id:any='716356'): Observable<Recipe[]> {
    let params = new HttpParams()
    .set('apiKey',Constants.API_KEY)
    .set('includeNutrition','false')
    
    let recipeID = "/" + id + "/information";
    let informationsUrl = Constants.API_ROOT_URL + Constants.API_RECIPE_ENDPOINT + recipeID;
    return this.http.get(informationsUrl,{params}).pipe(map((json: Object) => [json].map(jsonItem => Recipe.fromJson(jsonItem))));
  }
  getRecipeDetails(){    
    this.getRecipe().subscribe(recipes => this.recipeInformation = recipes[0])
  }
  //
  // Get Random Recipe
  getRandomRecipe()/*: Observable<Recipe[]>*/{
    let params = new HttpParams()
    .set('apiKey',Constants.API_KEY)
    .set('number','1')

    let randomUrl = "../assets/random.json" //Constants.API_ROOT_URL + Constants.API_RECIPE_ENDPOINT + Constants.API_RECIPE_RANDOM
    return this.http.get(randomUrl,{params}).subscribe(data => this.randomRecipe = (data))
    
  }
  // TODO: Autocomplete 
  getAutocomplete(id:any='716356'){}

  // Search
  search(){
     let params = new HttpParams()
      .set('apiKey',Constants.API_KEY)

      let searchUrl = '../assets/search.json' // Constants.API_ROOT_URL + Constants.API_RECIPE_ENDPOINT + Constants.API_RECIPE_SEARCH
      this.keyWordsArray = this.searchWords.split(' ');

      // this.keyWordsArray.forEach(word => {
      //   params = params.append('ingredients',word);
      // });

      this.http.get(searchUrl,{params}).subscribe(data => this.searchResults = (data))

  }





}
