import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { IPayPalConfig, NgxPaypalComponent } from 'ngx-paypal';

import { CartPageService } from './cart-page.service';
import { ProductType } from './types/product.type';
import { APP_ENV } from "../../../environments/environment.injector";
import { EnvironmentType } from "../../../environments/environment.type";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})

export class CartPageComponent implements OnInit {
  @ViewChild("paypalref") paypalComponent: NgxPaypalComponent;

  public payPalConfig: IPayPalConfig;

  public products: ProductType[] = [
    { id: "ID!1", title: "TITLE!", count: 1, storeCount: 2, imageUrl: "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg", price: 100 },
    { id: "ID!2", title: "TITLE!", count: 1, storeCount: 2, imageUrl: "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg", price: 100 },
    { id: "ID!3", title: "TITLE!", count: 1, storeCount: 2, imageUrl: "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg", price: 100 }
  ];

  constructor(
    @Inject(APP_ENV) private readonly environment: EnvironmentType,
    private readonly cartPageService: CartPageService
  ) { }

  ngOnInit() {
    // this.cartPageService.getCartProducts().subscribe(products => this.products = products);
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
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        // this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick data:', data);
        data = ["some"];
        console.log('onClick data:', data);
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

    //TODO: save count in cart request

    console.log($event);
    console.log(product.id);
    console.log(product.count);
  }

  onApprove(data, actions) {
    console.log('Transaction Approved:', data);

    // Captures the trasnaction
    return actions.order.capture().then(details => {

      console.log('Transaction completed by', details);

      // Call your server to handle the transaction
      return Promise.reject('Transaction aborted by the server');
    });
  }

  onCancel($event) {
    console.log('Canceled');
  }

  onError($event) {
    console.log('Error catch from paypal widget!');
  }
}
