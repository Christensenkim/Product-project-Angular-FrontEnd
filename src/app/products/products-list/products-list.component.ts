import { Component, OnInit } from '@angular/core';
import {Product} from '../../Shared/Models/Products';
import {ProductsService} from '../../Shared/Service/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  constructor(private productService: ProductsService) { }

  products: Product[];

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(listOfProducts => {
      this.products = listOfProducts;
    });
  }

  delete(id: number): void {
    this.productService.deleteProduct(id);
  }
}
