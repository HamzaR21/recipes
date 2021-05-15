import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Constants } from '../config/constants';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
 results: Object;
 words:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.words = history.state.searchWords;
    this.search(history.state.searchWords);
  }
  search( searchWords:String){
    let keyWordsArray:any;
    let params = new HttpParams()
      .set('apiKey',Constants.API_KEY)

      let searchUrl = Constants.API_ROOT_URL + Constants.API_RECIPE_ENDPOINT + Constants.API_RECIPE_SEARCH
      keyWordsArray = searchWords.split(' ');

      keyWordsArray.forEach(word => {
        params = params.append('ingredients',word);
      });

      this.http.get(searchUrl,{params}).subscribe(
        data => this.results = (data)
        )
  }

}
