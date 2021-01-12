import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';


import { CartPageComponent } from './cart-page.component';
import { CartPageService } from './cart-page.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule
  ],
  exports: [CartPageComponent],
  declarations: [CartPageComponent],
  providers: [CartPageService],
})
export class CartPageModule { }
