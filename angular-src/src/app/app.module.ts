import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes =  [
  {path:'', component: DashboardComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent}, 
  {path:'profile', component: ProfileComponent},
  {path:'dashboard', component: DashboardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,   
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
