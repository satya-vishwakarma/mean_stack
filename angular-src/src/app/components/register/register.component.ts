import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customvalidators } from '../../shered/custom.validators';

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
  userName = '';
  email = '';
  phone: number = null;
  newPassword = '';
  confirmPassoword = '';
  constructor(
    private regF: FormBuilder,
    private usersService: UsersService,
    private growlService: GrowlService) {
    this.regForm = regF.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(6) , Validators.pattern('[0-9]+')]],
      newPassword: [null, Validators.required],
      confirmPassoword: [null, [Validators.required]]
    }, {
        validator: Customvalidators.passwordMatch.bind(this)
      });
  }

  ngOnInit() {
  }

  get f() { return this.regForm.controls; }

  register(form_value) {

    const register_data = {
      name: form_value.userName,
      username: form_value.userName,
      email: form_value.email,
      //   phone: form_value.phone,
      password: form_value.newPassword
    };
    this.usersService.registerUser(register_data).subscribe(return_data => {
      if (return_data['success']) {
        this.growlService.success(return_data['msg']);
        this.growlService.Redirect('/login');
       // this.regForm.reset();
      }
    });
    this.submitted = true;

  }

}
