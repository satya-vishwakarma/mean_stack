import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import  { customvalidators } from '../../shered/custom.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  hide2 = true;
  submitted = false;
  regForm : FormGroup;
  userName:string = '';
  email : string = '';
  phone : number =  null ;
  newPassword : string = '';
  confirmPassoword:string = '';
  constructor(private regF : FormBuilder) {
    this.regForm = regF.group ({
      userName : [null , Validators.required],
      email : [null , [Validators.required,Validators.email]],
      phone : [null , Validators.required],
      newPassword : [ null ,Validators.required],
      confirmPassoword : [null , [Validators.required]]
    },{
      validator : customvalidators.passwordMatch.bind(this)
    });
   }

  ngOnInit() {
  }

  get f() { return this.regForm.controls; }

  register()
  {
    this.submitted = true;

  }

}
