import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ProductItemComponent } from './components/product-item.component';
import { ProductsPageComponent } from './products-page.component';
import { ProductsService } from './products.service';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [ProductsPageComponent],
  declarations: [ProductsPageComponent, ProductItemComponent],
  providers: [ProductsService],
})
export class ProductsPageModule { }
