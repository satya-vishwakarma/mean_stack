import { Injectable } from '@angular/core';
import { HttpClient   } from '@angular/common/http';
import 'rxjs/add/operator/catch';

 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:3000/api/';
  constructor(private http :HttpClient) { }

  postRequest(routeName,data){
    return this.http.get(this.url + routeName);

  }
}
