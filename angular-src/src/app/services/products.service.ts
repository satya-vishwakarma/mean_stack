import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { map ,catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { products } from '../../config/productInterface';
import { GrowlService } from '../services/growl.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private product = [];
  public product_list = [];
  public apiUrl = "http://localhost:3000/";
  public errorMasses = "Service unavailable. please try again later";  

  constructor(private http: HttpClient , private GrowlService : GrowlService) { }
  
  /**
   * Get products list 
   */
  getProduct(): Observable<products[]> {
    return this.http.post(this.apiUrl+'product/get-all-product', { data: false, user: 333 })
      .pipe( catchError(( res : HttpErrorResponse)=>{
        this.GrowlService.error(this.errorMasses);
        return res.error;
      } ) ,map((response: Response) => response['data']));
  }

  /**
   * Save product 
   * 
   * @param prod_data json 
   */
  saveProduct(prod_data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post(this.apiUrl+'/product/save-product', JSON.stringify(prod_data), { headers: headers })
      .pipe( catchError(( res : HttpErrorResponse)=>{
       this.GrowlService.error(this.errorMasses);
        return res.error;
      } ) ,map((response: Response) => response));
  }

  /**
   * Delete product 
   * 
   * @param id int
   */
  deletePoduct(id) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post(this.apiUrl+'product/delete-product', {primary_key : id}, { headers: headers })
      .pipe(map((response: Response) => response));
  }
}
