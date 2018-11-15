import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { products } from '../../../config/productInterface';
import {DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private productsservice: ProductsService ,private dialogservice : DialogService) { }

  listData: any;
  displayedColumns: string[] = ['productName','discription','image','price', 'action'];
  public productList: Observable<products[]>;  
  ngOnInit() {
    
    this.listData = this.productsservice.getProduct();
  }

  deleteProduct() {
    this.dialogservice.openConfirmDialog();
  }

}
