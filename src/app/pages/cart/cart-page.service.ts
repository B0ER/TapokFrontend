import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { ICreateOrderRequest } from "ngx-paypal";
import { Observable } from "rxjs";

import { APP_ENV } from "src/environments/environment.injector";
import { EnvironmentType } from "src/environments/environment.type";
import { ProductType } from "./types/product.type";


@Injectable()
export class CartPageService {

  constructor(
    @Inject(APP_ENV) private readonly environment: EnvironmentType,
    private readonly httpClient: HttpClient
  ) { }

  getCartProducts(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(`${this.environment.apiUrl}/cart/`);
  }

  createOrderOnClient(products: ProductType[]): ICreateOrderRequest {
    const paypalOrder: ICreateOrderRequest = <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'RUB',
            value: '0',
            breakdown: {
              item_total: {
                currency_code: 'RUB',
                value: '0'
              }
            }
          },
          items: []
        }
      ]
    };


    let totalAmount: number = 0;
    for (const product of products) {
      paypalOrder.purchase_units[0].items.push({
        name: product.title,
        quantity: product.count.toFixed(0),
        category: 'PHYSICAL_GOODS',
        unit_amount: {
          currency_code: 'RUB',
          value: product.price.toFixed(0),
        },
      });

      totalAmount += +product.price.toFixed(0) * +product.count.toFixed(0);
    }

    paypalOrder.purchase_units[0].amount.value = totalAmount.toFixed(0);
    paypalOrder.purchase_units[0].amount.breakdown.item_total.value = totalAmount.toFixed(0);

    debugger;
    return paypalOrder;
  }
}
