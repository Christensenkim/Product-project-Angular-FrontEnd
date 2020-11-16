import { Injectable } from '@angular/core';
import {Product} from '../Models/Products';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getProducts(): Observable<Product[]>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Product[]>('https://productprojekt.azurewebsites.net/api/product/', httpOptions);
  }

  getProductById(id: number): Observable<Product>{
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Product>('https://productprojekt.azurewebsites.net/api/product/' + id, httpOptions);
  }

  createProduct(product: Product): void {

  }

  updateProduct(product: Product): void {

  }

  deleteProduct(id: number): Observable<Product[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    this.http.delete('https://localhost:44317/api/product/' + id, httpOptions);
    return this.getProducts();
  }
}
