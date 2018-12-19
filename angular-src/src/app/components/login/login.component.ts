import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators  } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  post: any;
  rFrom : FormGroup;
  name :string='';
  password:string = '';
  constructor(private fb  : FormBuilder) { 
    this.rFrom = fb.group({
      name : [null ,Validators.required],
      password : [null , Validators.required]
    })
  }

  
  ngOnInit() {
  }

  login (post) :void {
    console.log('sdf',post);
    
   // this.rFrom.reset();
   
  //console.log( this.rFrom);
  }
  resetForm () 
  {
    this.rFrom.reset();
    
  }



}
