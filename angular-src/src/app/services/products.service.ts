import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }     from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
 private  product;
  constructor(private http: HttpClient) { }

  getProduct()
  {
  	this.http.post('http://localhost:8080/product/get-all-product',{data:false,user:333}).subscribe(result => this.product = result);
  	return this.product ;
  }
}
