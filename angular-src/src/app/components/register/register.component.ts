import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customvalidators } from '../../shered/custom.validators';

import { UsersService } from '../../services/users.service';
import { GrowlService } from 'src/app/services/growl.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  hide2 = true;
  submitted = false;
  regForm: FormGroup;
  userName: string = '';
  email: string = '';
  phone: number = null;
  newPassword: string = '';
  confirmPassoword: string = '';
  constructor(
    private regF: FormBuilder,
    private usersService: UsersService,
    private GrowlService: GrowlService) {
    this.regForm = regF.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      newPassword: [null, Validators.required],
      confirmPassoword: [null, [Validators.required]]
    }, {
        validator: customvalidators.passwordMatch.bind(this)
      });
  }

  ngOnInit() {
  }

  get f() { return this.regForm.controls; }

  register(form_value) {

    var register_data = {
      name: form_value.userName,
      username: form_value.userName,
      email: form_value.email,
      //   phone: form_value.phone,
      password: form_value.newPassword
    }
    this.usersService.registerUser(register_data).subscribe(return_data => {
      if (return_data['success']) {
        this.GrowlService.success(return_data['msg']);
        this.GrowlService.Redirect('/login');
       // this.regForm.reset();
      }
    });
    this.submitted = true;

  }

}