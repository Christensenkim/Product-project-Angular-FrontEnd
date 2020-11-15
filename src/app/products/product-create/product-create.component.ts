import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductsService} from '../../Shared/Service/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    color: new FormControl(''),
    ptype: new FormControl(''),
    createdDate: new FormControl('')
  });

  constructor(private productService: ProductsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  Save(): void {
    const product = this.productForm.value;
    this.productService.createProduct(product);
    this.productForm.reset();
    this.router.navigateByUrl('');
  }
}
