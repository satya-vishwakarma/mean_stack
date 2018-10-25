import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { products } from '../../config/productInterface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private product = [];
  public product_list = [];

  constructor(private http: HttpClient) { }

  getProduct(): Observable<products[]> {
    return this.http.post('http://localhost:3000/product/get-all-product', { data: false, user: 333 })
      .pipe(map((response: Response) => response['data']));
  }


  saveProduct(prod_data){
    //var headers = new HttpHeaders();
    //headers.set('Content-Type', 'application/json');
    //console.log(headers, headers.get('Content-Type'));
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    this.http.post('http://localhost:3000/product/save-product', JSON.stringify(prod_data), { headers: headers })
    .subscribe( (head : HttpHeaders) => { 
      console.log(head.get('Content-Type'));
    });

  }
}
