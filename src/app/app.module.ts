import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { AppRoutingModule } from './app-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Authentication/Login/login.component';
import {AuthGuardGuard} from './Shared/guards/auth-guard.guard';
import {AuthenticationService} from './Shared/Service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    WelcomeComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
