import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { GrowlService } from '../../../services/growl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product_form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsservice: ProductsService,
    private GrowlService: GrowlService,
    private router: Router
  ) {

  }
  public submitted = false;
  public product = [];
  ngOnInit() {
    this.product_form = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
  get f() {
    return this.product_form.controls;
  }
  addProduct(product_data) {
    this.submitted = true;
    if (this.product_form.invalid) {
      return;
    }

    var prod_d = {
      title: product_data.title,
      desccription: product_data.desc,
      image: product_data.image,
      price: product_data.price
    };

    var return_data = this.productsservice.saveProduct(prod_d)
      .subscribe(return_data => {
        if (return_data['success']) {
          this.GrowlService.success('Product save successfully.....');
          this.GrowlService.Redirect('/admin/list-product');
        }
      });
  }
}
