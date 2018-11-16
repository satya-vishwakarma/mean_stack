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


  saveProduct(prod_data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post('http://localhost:3000/product/save-product', JSON.stringify(prod_data), { headers: headers })
      .pipe(map((response: Response) => response));
  }

  deletePoduct(id) {
    console.log(id);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post('http://localhost:3000/product/delete-product', {primary_key : id}, { headers: headers })
      .pipe(map((response: Response) => response));
  }
}
