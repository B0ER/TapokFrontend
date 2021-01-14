import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { IClientAuthorizeCallbackData, IPayPalConfig, NgxPaypalComponent, PayPalScriptService } from 'ngx-paypal';

import { CartPageService } from './cart-page.service';
import { ProductType } from './types/product.type';
import { APP_ENV } from "../../../environments/environment.injector";
import { EnvironmentType } from "../../../environments/environment.type";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['cart-page.component.css'],
})

export class CartPageComponent implements OnInit {
  public payPalConfig: IPayPalConfig;

  public products: ProductType[] = [];

  constructor(
    @Inject(APP_ENV) private readonly environment: EnvironmentType,
    private readonly cartPageService: CartPageService,
    private readonly toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cartPageService.getCartProducts().subscribe(products => this.products = products);
    this.initPaypalConfig();
  }


  initPaypalConfig() {
    this.payPalConfig = {
      currency: 'RUB',
      clientId: this.environment.paypal.clientId,
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'buynow',
        layout: 'vertical'
      },
      createOrderOnClient: (data) => {
        return this.cartPageService.createOrderOnClient(this.products);
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data: IClientAuthorizeCallbackData) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

        this.cartPageService.saveTransaction(data.id).subscribe(() => {
          this.toastr.info('Your order has been accepted!');
          this.products = [];
        });
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.toastr.error('Retry please!');
      },
      onError: err => {
        console.log('OnError', err);
        this.toastr.error('Retry please!');
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  validateCount($event: Event, product: ProductType) {
    if (product.count < 1) {
      product.count = 1;
      return;
    }
    else if (product.count > product.storeCount) {
      product.count = product.storeCount;
      return;
    }

    this.cartPageService.saveProductCount(product).subscribe();
  }

  deleteOnClick($event: Event, product: ProductType) {
    this.cartPageService.deleteFromCart(product).subscribe(() => {
      const productIndex = this.products.indexOf(product);
      if (productIndex > -1) {
        this.products.splice(productIndex, 1);
      }
    });
  }
}
