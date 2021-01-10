import { NgModule } from '@angular/core';
import { ProductItemComponent } from './components/product-item.component';

import { ProductsPageComponent } from './products-page.component';

@NgModule({
  imports: [],
  exports: [ProductsPageComponent],
  declarations: [ProductsPageComponent, ProductItemComponent],
  providers: [],
})
export class ProductsPageModule { }
