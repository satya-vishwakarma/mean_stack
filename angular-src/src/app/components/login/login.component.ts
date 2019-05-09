import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { GrowlService } from 'src/app/services/growl.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  post: any;
  rFrom: FormGroup;
  name = '';
  password = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private growlService: GrowlService
  ) {
    this.rFrom = fb.group({
      name: [null, Validators.required],
      password: [null, Validators.required]
    });
  }


  ngOnInit() {
  }

  login(post) {
    const user = {
      username: post.name,
      password: post.password
    };

    this.authService.authenticate(user)
      .subscribe(data => {
        if (data['success']) {
          this.authService.storeUserData(data['token'], data['user']);
          this.growlService.success('User login successfully');
          this.growlService.Redirect('/dashboard');
          return data;
        } else {
          this.growlService.error('User Name or password is incorrect please try again...');
        }
      });
  }

  resetForm () {
   this.rFrom.reset();
   this.rFrom.markAsUntouched();
  }
}
