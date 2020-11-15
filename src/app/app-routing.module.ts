import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductsDetailsComponent} from './products/products-details/products-details.component';
import {ProductCreateComponent} from './products/product-create/product-create.component';
import {ProductUpdateComponent} from './products/product-update/product-update.component';
import {AuthGuardGuard} from './Shared/guards/auth-guard.guard';
import {LoginComponent} from './Authentication/Login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: WelcomeComponent, canActivate: [AuthGuardGuard]},
  {path: 'product/:id', component: ProductsDetailsComponent, canActivate: [AuthGuardGuard]},
  {path: 'create', component: ProductCreateComponent, canActivate: [AuthGuardGuard]},
  {path: 'product-update/:id', component: ProductUpdateComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
