import { Component, OnInit } from '@angular/core';
import {Product} from '../../Shared/Models/Products';
import {ProductsService} from '../../Shared/Service/products.service';
import {AuthenticationService} from '../../Shared/Service/authentication.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  username: string;
  errormessage: string = '';

  constructor(private productService: ProductsService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        listOfProducts => {
      this.products = listOfProducts;
    },
        error => {this.errormessage = error.message;
        });
  }

  delete(id: number): void {
    this.productService.deleteProduct(id);
  }
}
