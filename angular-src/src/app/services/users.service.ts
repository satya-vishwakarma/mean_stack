import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { GrowlService } from './growl.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public apiUrl = environment.apiUrl;
  public errorMasses = "Service unavailable. please try again later";  
  constructor(private http: HttpClient , private GrowlService : GrowlService) { }

  registerUser(registerData){
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post(this.apiUrl+'users/register', JSON.stringify(registerData), { headers: headers })
      .pipe( catchError(( res : HttpErrorResponse)=>{
        console.log(res.status);
       this.GrowlService.error(this.errorMasses);
        return res.error;
      } ) ,map((response: Response) => response));
    
  }
}
