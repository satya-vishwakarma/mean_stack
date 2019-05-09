import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { GrowlService } from '../../../services/growl.service';
import { Router } from '@angular/router';
import { Customvalidators } from '../../../shered/custom.validators';

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
    private growlService: GrowlService,
    private router: Router
  ) {

  }
  public submitted = false;
  public product = [];
  protected uploadFiles: File = null;
  ngOnInit() {
    this.product_form = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', [Validators.required , Validators.minLength(2)]]
    }, {
      validator: Customvalidators.isNumber.bind(this)
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
    const formData = new FormData();
    formData.append('files', this.uploadFiles);
    formData.append('desccription' , product_data.desc);
    formData.append('price' , product_data.price);
    formData.append('title' , product_data.title);

     this.productsservice.saveProduct(formData)
      .subscribe(
        return_data => {
        if (return_data['success']) {
          this.growlService.success('Product save successfully.....');
          this.growlService.Redirect('/admin/list-product');
        }
      });
  }


  /**
   * File change event
   * @param event Object
   */
  fileChangeEvent(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.uploadFiles = <File>event.target.files[i];
      }
    }
  }

}
