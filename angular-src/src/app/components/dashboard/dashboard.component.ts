import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { products } from '../../../config/productInterface'
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  public productList: Observable<products[]>;  
  constructor(private productsservice: ProductsService) {
  }

  ngOnInit() {
     this.productList =  this.productsservice.getProduct();
  }

}
