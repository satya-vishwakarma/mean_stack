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
  constructor(private http: HttpClient) { }

  getProduct(): Observable<products[]> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post('http://localhost:3000/product/get-all-product', { data: false, user: 333 }, { headers: headers })
      .pipe(map((response: Response) => response['data']));
  }
}