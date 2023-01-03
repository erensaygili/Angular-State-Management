import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { NavbarComponent } from './component/layouts/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { BasketReducer } from './state/basket/baskets.reducer';
import { Reducers } from './state/reducers';
import { ProductComponent } from './component/product/product.component';
import { ProductAddComponent } from './component/product/product-add/product-add.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    ProductAddComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(Reducers.baskets),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
