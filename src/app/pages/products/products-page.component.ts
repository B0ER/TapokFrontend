import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductType } from './types/product.type';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit {
  public products: Array<ProductType> = [];

  constructor(
    private readonly productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}