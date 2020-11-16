import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../Shared/Service/products.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id: number;
  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    color: new FormControl(''),
    ptype: new FormControl(''),
    createdDate: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private router: Router) { }

  ngOnInit(): void {
    /*this.id = +this.route.snapshot.paramMap.get('id');
    const product = this.productService.getProductById(this.id);
    this.productForm.patchValue({
      name: product.name,
      price: product.price,
      color: product.color,
      ptype: product.ptype,
      createdDate: product.createdDate
    });*/
  }

  Save(): void {
    const product = this.productForm.value;
    product.id = this.id;
    this.productService.updateProduct(product);
    /*this.productForm.reset();
    this.router.navigateByUrl('');*/
  }

}
