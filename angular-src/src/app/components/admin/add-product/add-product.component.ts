import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit { product_form: FormGroup;

  constructor(private formBuilder: FormBuilder,private productsservice: ProductsService ) { }
   public submitted =false;
   public product  = [];
  ngOnInit() {
    this.product_form = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }
  get f() {
    return this.product_form.controls;
   }
  addProduct(product_data) {    
    this.submitted = true;
    console.log(product_data);
  if (this.product_form.invalid) {
      return;
  }

    var prod_d = {
      title: product_data.title,
      desccription: product_data.desc,
      image: product_data.image,
      price: '234234'
    };
 return this.productsservice.saveProduct(prod_d);
  //console.log(product_data);


  }

}
