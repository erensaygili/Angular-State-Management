import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: ProductModel[] = [];
  constructor(
    private router: Router,
    private _productService: ProductService
  ) {}
  ngOnInit(): void {
    this.listproducts()
   }

   listproducts(){
    this._productService.get(()=>this.products=this._productService.products)
   }
}
