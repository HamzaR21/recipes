import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  readonly ROOT_URL = "https://jsonplaceholder.typicode.com/"
  title = 'recipes';
  userID: number;
  posts: Observable<any>;

  constructor(private http: HttpClient){}

  getData(){
    let headers = new HttpHeaders().set('AUTH','token');
    let params = new HttpParams().set('userId', this.userID.toString());

    this.posts = this.http.get(this.ROOT_URL + 'posts',{params,headers})
  }
}
