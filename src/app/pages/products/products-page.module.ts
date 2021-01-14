import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';

import { ProductItemComponent } from './components/product-item.component';
import { ProductItemService } from './components/product-item.service';
import { ProductsPageComponent } from './products-page.component';
import { ProductsService } from './products.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [ProductsPageComponent],
  declarations: [ProductsPageComponent, ProductItemComponent],
  providers: [ProductsService, ProductItemService],
})
export class ProductsPageModule { }
