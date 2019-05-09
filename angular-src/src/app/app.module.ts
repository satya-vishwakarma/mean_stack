import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToastyModule } from 'ng2-toasty';

/**
 *  Component imported
 */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { MatConfirmDialogComponent } from './components/mat-confirm-dialog/mat-confirm-dialog.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { SecureComponentComponent } from './components/secure-component/secure-component.component';
import { SecureComponent } from './components/secure/secure.component';
import { PublicComponent } from './components/public/public.component';
import { TokenInterceptor } from './helpers/token.interceptor';

/**
 * Define public route
 */
export const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent }
];

/**
 * Define login fuard
 */
export const SECURE_ROUTES: Routes = [
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'list-product', component: ListProductComponent, canActivate: [AuthGuard] }
];

/**
 * Application Routes
 */
const appRoutes: Routes = [
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
  { path: 'admin', component: SecureComponent, children: SECURE_ROUTES }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    AddProductComponent, ListProductComponent, MatConfirmDialogComponent, SecureComponentComponent, SecureComponent, PublicComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastyModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent]
})
export class AppModule { }
