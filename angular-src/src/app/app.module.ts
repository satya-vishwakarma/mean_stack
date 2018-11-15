import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { MatConfirmDialogComponent } from './components/mat-confirm-dialog/mat-confirm-dialog.component';

const appRoutes: Routes =  [
  {path:'', component: DashboardComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent}, 
  {path:'profile', component: ProfileComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'admin/add-product', component: AddProductComponent},
  {path:'admin/list-product' , component : ListProductComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,   
    ProfileComponent, 
    AddProductComponent, ListProductComponent, MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }
