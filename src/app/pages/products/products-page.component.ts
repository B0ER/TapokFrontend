import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductsService } from './products.service';
import { ProductType } from './types/product.type';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit {
  public isLogged: boolean = false;
  public products: Array<ProductType> = [];

  constructor(
    private readonly authService: AuthService,
    private readonly productsService: ProductsService
  ) { }

  ngOnInit() {
    this.authService.isLogged.subscribe((isLogged) => {
      this.isLogged = isLogged;
    });

    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}