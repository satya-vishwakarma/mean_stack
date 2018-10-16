import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productsservice :ProductsService) { 
    var data = 	this.productsservice.getProduct();
    console.log(data);
   }

  ngOnInit() {
  }

}
