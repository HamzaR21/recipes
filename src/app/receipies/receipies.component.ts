import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../classes/recipe';
import { Constants } from '../config/constants';

@Component({
  selector: 'app-receipies',
  templateUrl: './receipies.component.html',
  styleUrls: ['./receipies.component.css']
})
export class RECEIPIESComponent implements OnInit {
  id: any;
  recipeInformation: any;
  recipeInstructions: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.getRecipeDetails(history.state.data);
    this.getRecipeInstructions(history.state.data);

    console.log(history.state.data)
  }

  getRecipeDetails(id:any) {
    let params = new HttpParams()
    .set('apiKey',Constants.API_KEY)
    .set('includeNutrition','false')
    
    let recipeID = "/" + id + "/information";
    let informationsUrl = Constants.API_ROOT_URL + Constants.API_RECIPE_ENDPOINT + recipeID;
    this.http.get(informationsUrl,{params}).subscribe(recipes => this.recipeInformation = recipes);
  }

   getRecipeInstructions(id:any) {
    let params = new HttpParams()
    .set('apiKey',Constants.API_KEY)
    
    let recipeID = "/" + id + "/analyzedInstructions";
    let informationsUrl = Constants.API_ROOT_URL + Constants.API_RECIPE_ENDPOINT + recipeID;
    this.http.get(informationsUrl,{params}).subscribe(recipes => this.recipeInstructions = recipes);
  }
  

}
