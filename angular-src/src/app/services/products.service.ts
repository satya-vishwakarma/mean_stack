import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { products } from '../../config/productInterface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
 private  product=[];
 public  product_list=[];
  constructor(private http: HttpClient) { }

  getProduct() : Observable<products[]>
  {
  return this.http.post('http://localhost:3000/product/get-all-product',{data:false,user:333})
    .pipe(map((response:Response )=>response['data']));
  }

  saveProduct(prod_data) :void
  {
    var header = {
      options: {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    }
    let header= new Headers({'Content-Type': 'application/x-www-form-urlencoded' });



    console.log(JSON.stringify(prod_data)+'thissssssssssssssssssssssssssss');
    this.http.post('http://localhost:3000/product/save-product' , JSON.stringify(prod_data) , header)
    .pipe(map((response:Response )=>response)).subscribe(product_list=> {
      this.product.push(this.product_list);
    });
  
  }
}
