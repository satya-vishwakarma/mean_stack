import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { GrowlService } from './growl.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public apiUrl = "http://localhost:3000/";
  public errorMasses = "Service unavailable. please try again later";  
  constructor(private http: HttpClient , private GrowlService : GrowlService) { }

  registerUser(registerData){

    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post(this.apiUrl+'users/register', JSON.stringify(registerData), { headers: headers })
      .pipe( catchError(( res : HttpErrorResponse)=>{
       this.GrowlService.error(this.errorMasses);
        return res.error;
      } ) ,map((response: Response) => response));
    
  }
}
