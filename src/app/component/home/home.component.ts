import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basket.model';
import { ProductModel } from 'src/app/models/product.model';
import * as BasketAction from '../../state/basket/basket.action';
import { Stores } from 'src/app/state/stores';
import { ProductService } from 'src/app/services/product.service';
import { BasketService } from 'src/app/services/basket.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: ProductModel[] = [];
  constructor(
    private _productService: ProductService,
    private _basketService: BasketService
  ) {}
  ngOnInit(): void {
    this.listproducts();
  }

  listproducts() {
    this._productService.get(
      () => (this.products = this._productService.products)
    );
  }

  //her add tuşuna bastığımız da [Baskets] Add Count action u tetikliyor
  //buda basket reducer içerisindeki action
  addBasket(product: ProductModel) {
    let basketModel = new BasketModel();
    basketModel.quantity = 1;
    basketModel.product = product;
    this._basketService.post(basketModel);
  }
}
