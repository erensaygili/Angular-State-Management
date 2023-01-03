import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  api = 'http://localhost:3000/products';
  products: ProductModel[] = [];

  constructor(private _httpService: HttpClient) {}

  post(model: ProductModel, callback: () => void) {
    this._httpService.post(this.api, model).subscribe((res) => callback());
  }
  get(callback: () => void) {
    this._httpService.get<ProductModel[]>(this.api).subscribe((res) => {
      this.products = res;
      callback();
    });
  }
}
