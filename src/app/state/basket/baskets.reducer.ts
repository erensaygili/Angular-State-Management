import { createAction, createReducer, on, props } from '@ngrx/store';
import { BasketModel } from 'src/app/models/basket.model';
import * as BasketAction from './basket.action';
export const initialState: BasketModel[] = [];

export const BasketReducer = createReducer(
  initialState,
  on(BasketAction.addBasket, (state, { basket }) => {
    return [...state, basket];
  })
);
