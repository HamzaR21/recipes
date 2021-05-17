import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../config/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id:any;
  randomRecipe: any;
  similarRecipes: any;

  searchWords:String = "apples flour sugar eggs";
  randID: any = {
    'id':"132"
  }

  

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getRandomRecipe();
  }

  getRandomRecipe()/*: Observable<Recipe[]>*/{
    let params = new HttpParams()
    .set('apiKey',Constants.API_KEY)
    .set('number','1')

    let randomUrl =  Constants.API_ROOT_URL + Constants.API_RECIPE_ENDPOINT + Constants.API_RECIPE_RANDOM
    this.http.get(randomUrl,{params}).subscribe((data) => this.randomRecipe = (data) );

  }

  gotoDetails(id:any){
    this.router.navigate(['/details'], {state: {data: id }});
  }

  // Search
  search(){    
    this.router.navigate(['/results'], {state: {searchWords: this.searchWords }});
  }

  // Similar Recipes
  getSimilarRecipes(id:any){
    
    let params = new HttpParams()
    .set('apiKey',Constants.API_KEY)
    .set('number','9')

    let  recipeID = "/" + id + "/similar";
    let randomUrl =  Constants.API_ROOT_URL + Constants.API_RECIPE_ENDPOINT + recipeID
    //this.http.get(randomUrl,{params}).subscribe(data => this.randomRecipe = (data))
    console.log(randomUrl);
  }

}
function randID(randID: any) {
  throw new Error('Function not implemented.');
}

