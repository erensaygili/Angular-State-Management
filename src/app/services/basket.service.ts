import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Stores } from '../state/stores';
import * as BasketAction from '../state/basket/basket.action';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  api = 'http://localhost:3000/baskets';
  baskets: BasketModel[] = [];
  constructor(
    private _http: HttpClient,
    private store: Store<Stores['baskets']>
  ) {}

  post(model: BasketModel) {
    this._http
      .post<any>(this.api, model)
      .subscribe((res) =>
        this.store.dispatch(BasketAction.addBasket({ basket: model }))
      );
  }

  getList(callback: () => void) {
    this._http.get<any>(this.api).subscribe((res) => {
      this.baskets = res;
      callback();
    });
  }
}
