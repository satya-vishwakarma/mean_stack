import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { products } from '../../../config/productInterface';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(
    private productsservice: ProductsService,
    private dialogservice: DialogService) { }

  listData: any;
  listData_2: any;
  displayedColumns: string[] = ['productName', 'discription', 'image', 'price', 'action'];
  public productList: Observable<products[]>;
  ngOnInit() {

    this.datatable();
  }

  deleteProduct($key) {
    this.dialogservice.openConfirmDialog({ msg: 'Are you sure to delete this record ?' })
      .afterClosed()
      .subscribe(res => {
        if (res == true) {         
          return this.productsservice.deletePoduct($key).subscribe(response => {
            if (response['success'] == true) {
              this.datatable();
            }
          });          
        }
      });
  }
  
  datatable() {
    this.listData = this.productsservice.getProduct();
  }

}
