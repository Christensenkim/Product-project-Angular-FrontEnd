import { Injectable } from '@angular/core';
import {Product} from '../Models/Products';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getProducts(): Observable<Product[]>{
    debugger;
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authenticationService.getToken());
    return this.http.get<Product[]>('https://localhost:44317/api/product', httpOptions);
    debugger;
  }

  getProductById(id: number): Product{
    return this.products.find(cust => cust.id === id);
  }

  createProduct(product: Product): void {

  }

  updateProduct(product: Product): void {
    const productToUpdate = this.products.find(prod => product.id === prod.id);
    const index = this.products.indexOf(productToUpdate);
    this.products[index] = product;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(prod => prod.id !== id);
  }
}
