import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  @ViewChild('addForm') addForm: NgForm;
  constructor(private _productService: ProductService) {}
  ngOnInit(): void {}

  addProduct() {
    if (this.addForm.valid) {
      this._productService.post(this.addForm.value,()=>this.addForm.reset())
    }
  }
}
