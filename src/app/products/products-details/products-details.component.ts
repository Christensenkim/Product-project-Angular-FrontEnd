import { Component, OnInit } from '@angular/core';
import {Product} from '../../Shared/Models/Products';
import {ProductsService} from '../../Shared/Service/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute,
              private productService: ProductsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
    }
}
